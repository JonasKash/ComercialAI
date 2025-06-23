import express from 'express';
import cors from 'cors';
import pkg from 'mercadopago';
const mercadopago = pkg.default || pkg;
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, 'dist')));

// Configurar Mercado Pago
mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN
});

// Planos disponíveis
const plans = {
  starter: {
    id: 'starter',
    name: 'Starter',
    description: 'Perfeito para começar',
    price: 49,
    originalPrice: 79,
    features: [
      'Até 1.000 análises de dados por mês',
      'Dashboard básico',
      'Relatórios em PDF',
      'Suporte por email',
      'Integração com 3 plataformas'
    ]
  },
  pro: {
    id: 'pro',
    name: 'Professional',
    description: 'Ideal para profissionais',
    price: 99,
    originalPrice: 149,
    features: [
      'Até 10.000 análises por mês',
      'Dashboard avançado com IA',
      'Relatórios personalizados',
      'Suporte prioritário 24/7',
      'Integração ilimitada',
      'API personalizada',
      'Alertas em tempo real'
    ]
  },
  enterprise: {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Para grandes empresas',
    price: 199,
    originalPrice: 299,
    features: [
      'Análises ilimitadas',
      'Dashboard white-label',
      'Relatórios avançados com IA',
      'Gerente de conta dedicado',
      'Integrações customizadas',
      'SLA garantido',
      'Treinamento da equipe',
      'Consultoria estratégica'
    ]
  }
};

// Rota para criar preferência de pagamento (Checkout Pro)
app.post('/api/create-preference', async (req, res) => {
  try {
    const { planId, customer } = req.body;
    const plan = plans[planId];
    
    if (!plan) {
      return res.status(400).json({ error: 'Plano não encontrado' });
    }

    const preference = {
      items: [
        {
          title: `CommercialAI Pro - ${plan.name}`,
          unit_price: plan.price,
          quantity: 1,
          currency_id: 'BRL'
        }
      ],
      payer: {
        name: customer.name,
        email: customer.email,
        phone: {
          number: customer.phone
        },
        identification: {
          type: 'CPF',
          number: customer.document
        },
        address: {
          street_name: customer.address.street,
          street_number: customer.address.number,
          city_name: customer.address.city,
          state_name: customer.address.state,
          zip_code: customer.address.zipCode
        }
      },
      back_urls: {
        success: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/success`,
        failure: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/checkout?error=payment_failed`,
        pending: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/checkout?error=payment_pending`
      },
      auto_return: 'approved',
      external_reference: `${planId}_${Date.now()}`,
      notification_url: `${process.env.BACKEND_URL || 'http://localhost:3001'}/api/webhook`,
      payment_methods: {
        excluded_payment_types: [
          { id: 'ticket' } // Excluir boleto
        ],
        installments: 12
      }
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ 
      init_point: response.body.init_point,
      id: response.body.id
    });
  } catch (error) {
    console.error('Erro ao criar preferência:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para criar pagamento transparente (Cartão de crédito)
app.post('/api/create-payment', async (req, res) => {
  try {
    const { planId, customer, paymentData } = req.body;
    const plan = plans[planId];
    
    if (!plan) {
      return res.status(400).json({ error: 'Plano não encontrado' });
    }

    const payment = {
      transaction_amount: plan.price,
      token: paymentData.token,
      description: `CommercialAI Pro - ${plan.name}`,
      installments: paymentData.installments || 1,
      payment_method_id: paymentData.payment_method_id,
      payer: {
        email: customer.email,
        identification: {
          type: 'CPF',
          number: customer.document
        }
      }
    };

    const response = await mercadopago.payment.save(payment);
    
    res.json({
      id: response.body.id,
      status: response.body.status,
      status_detail: response.body.status_detail,
      external_reference: response.body.external_reference
    });
  } catch (error) {
    console.error('Erro ao criar pagamento:', error);
    res.status(500).json({ 
      error: 'Erro interno do servidor',
      details: error.message 
    });
  }
});

// Rota para criar pagamento PIX
app.post('/api/create-pix-payment', async (req, res) => {
  try {
    const { planId, customer } = req.body;
    const plan = plans[planId];
    
    if (!plan) {
      return res.status(400).json({ error: 'Plano não encontrado' });
    }

    const payment = {
      transaction_amount: plan.price,
      description: `CommercialAI Pro - ${plan.name}`,
      payment_method_id: 'pix',
      payer: {
        email: customer.email,
        first_name: customer.name.split(' ')[0],
        last_name: customer.name.split(' ').slice(1).join(' '),
        identification: {
          type: 'CPF',
          number: customer.document
        }
      }
    };

    const response = await mercadopago.payment.save(payment);
    
    res.json({
      id: response.body.id,
      status: response.body.status,
      qr_code: response.body.point_of_interaction.transaction_data.qr_code,
      qr_code_base64: response.body.point_of_interaction.transaction_data.qr_code_base64
    });
  } catch (error) {
    console.error('Erro ao criar pagamento PIX:', error);
    res.status(500).json({ 
      error: 'Erro interno do servidor',
      details: error.message 
    });
  }
});

// Webhook para notificações do Mercado Pago
app.post('/api/webhook', async (req, res) => {
  try {
    const { type, data } = req.body;
    
    if (type === 'payment') {
      const payment = await mercadopago.payment.findById(data.id);
      console.log('Pagamento recebido:', payment.body);
      
      // Aqui você pode implementar a lógica para ativar o plano do usuário
      // Por exemplo, atualizar o banco de dados, enviar email, etc.
      
      const status = payment.body.status;
      const externalReference = payment.body.external_reference;
      
      console.log(`Pagamento ${status} para referência: ${externalReference}`);
    }
    
    res.status(200).send('OK');
  } catch (error) {
    console.error('Erro no webhook:', error);
    res.status(500).send('Erro');
  }
});

// Rota para verificar status do pagamento
app.get('/api/payment/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await mercadopago.payment.findById(id);
    
    res.json({
      id: payment.body.id,
      status: payment.body.status,
      status_detail: payment.body.status_detail,
      external_reference: payment.body.external_reference
    });
  } catch (error) {
    console.error('Erro ao buscar pagamento:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para servir o frontend
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Frontend: http://localhost:5173`);
  console.log(`Backend: http://localhost:${PORT}`);
}); 