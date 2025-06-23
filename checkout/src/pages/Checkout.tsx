import React, { useState, useEffect } from 'react';
import { Moon, Sun, Sparkles, Zap, Crown, ShoppingCart, CreditCard, QrCode } from 'lucide-react';
import PlanCard from '../components/PlanCard';
import CheckoutForm from '../components/CheckoutForm';
import PaymentStatus from '../components/PaymentStatus';
import { toast } from '@/hooks/use-toast';

interface CheckoutProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  icon: 'star' | 'zap' | 'crown';
  gradient: string;
}

interface CustomerData {
  name: string;
  email: string;
  phone: string;
  document: string;
  address: {
    street: string;
    number: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

const Checkout: React.FC<CheckoutProps> = ({ theme, setTheme }) => {
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');
  const [currentStep, setCurrentStep] = useState<'plans' | 'checkout' | 'payment'>('plans');
  const [paymentStatus, setPaymentStatus] = useState<'processing' | 'approved' | 'rejected' | 'pending'>('processing');
  const [paymentId, setPaymentId] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'pix' | 'checkout'>('checkout');

  const plans: Plan[] = [
    {
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
      ],
      icon: 'star',
      gradient: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
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
      ],
      popular: true,
      icon: 'zap',
      gradient: 'bg-gradient-to-r from-purple-600 to-indigo-600'
    },
    {
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
      ],
      icon: 'crown',
      gradient: 'bg-gradient-to-r from-yellow-500 to-orange-600'
    }
  ];

  // Detectar plano selecionado na URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const planFromUrl = urlParams.get('plan');
    
    if (planFromUrl && plans.find(p => p.id === planFromUrl)) {
      setSelectedPlan(planFromUrl);
      // Se um plano foi passado na URL, ir direto para o checkout
      setCurrentStep('checkout');
    }
  }, []);

  const selectedPlanData = plans.find(plan => plan.id === selectedPlan);

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleContinueToCheckout = () => {
    if (!selectedPlan) {
      toast({
        title: "Selecione um plano",
        description: "Por favor, escolha um plano para continuar.",
        variant: "destructive"
      });
      return;
    }
    setCurrentStep('checkout');
  };

  const handlePayment = async (customerData: CustomerData) => {
    console.log('Iniciando processo de pagamento...', { customerData, selectedPlan, paymentMethod });
    
    setCurrentStep('payment');
    setPaymentStatus('processing');

    try {
      let response;
      
      if (paymentMethod === 'checkout') {
        // Checkout Pro - redirecionamento
        response = await fetch('http://localhost:3001/api/create-preference', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            planId: selectedPlan,
            customer: customerData
          })
        });

        if (!response.ok) {
          throw new Error('Erro na API');
        }

        const data = await response.json();
        
        if (data.init_point) {
          // Abrir em uma nova aba
          window.open(data.init_point, '_blank');
          
          // Simular aprovação após alguns segundos (para demonstração)
          setTimeout(() => {
            setPaymentStatus('approved');
            setPaymentId(data.id || 'MP-' + Date.now());
            
            toast({
              title: "Pagamento aprovado!",
              description: "Seu plano foi ativado com sucesso.",
            });
          }, 3000);
        }
      } else if (paymentMethod === 'pix') {
        // Pagamento PIX
        response = await fetch('http://localhost:3001/api/create-pix-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            planId: selectedPlan,
            customer: customerData
          })
        });

        if (!response.ok) {
          throw new Error('Erro na API PIX');
        }

        const data = await response.json();
        setPaymentId(data.id);
        
        // Aqui você pode mostrar o QR Code PIX
        console.log('QR Code PIX:', data.qr_code);
        
        // Simular aprovação após alguns segundos (para demonstração)
        setTimeout(() => {
          setPaymentStatus('approved');
          
          toast({
            title: "Pagamento PIX aprovado!",
            description: "Seu plano foi ativado com sucesso.",
          });
        }, 5000);
      }

    } catch (error) {
      console.error('Erro no pagamento:', error);
      setPaymentStatus('rejected');
      
      toast({
        title: "Erro no pagamento",
        description: "Não foi possível processar o pagamento. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  const handleRetryPayment = () => {
    setCurrentStep('checkout');
  };

  return (
    <div className="min-h-screen bg-background transition-all duration-300">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-card-foreground">CommercialAI Pro</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              {currentStep === 'plans' && 'Escolha seu plano'}
              {currentStep === 'checkout' && 'Finalizar compra'}
              {currentStep === 'payment' && 'Processando pagamento'}
            </span>
            
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {currentStep === 'plans' && (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">
                Escolha seu plano
              </h1>
              <p className="text-xl text-muted-foreground">
                Comece grátis e evolua conforme suas vendas aumentam
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {plans.map((plan) => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  isSelected={selectedPlan === plan.id}
                  onSelect={() => handlePlanSelect(plan.id)}
                  theme={theme}
                />
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={handleContinueToCheckout}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                Continuar para Pagamento
              </button>
            </div>
          </>
        )}

        {currentStep === 'checkout' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-card-foreground mb-2">
                Finalizar Compra
              </h2>
              <p className="text-muted-foreground">
                Plano selecionado: <span className="font-semibold">{selectedPlanData?.name}</span>
              </p>
            </div>

            {/* Seleção do método de pagamento */}
            <div className="bg-card rounded-xl p-6 shadow-lg mb-8 border border-border">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">
                Método de Pagamento
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <CreditCard className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-card-foreground">
                    Cartão de Crédito
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    Pagamento direto
                  </p>
                </button>
                <button
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === 'pix'
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <QrCode className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-card-foreground">
                    PIX
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    Pagamento instantâneo
                  </p>
                </button>
              </div>
            </div>

            <CheckoutForm
              selectedPlan={selectedPlanData!}
              onPayment={handlePayment}
              theme={theme}
            />
          </div>
        )}

        {currentStep === 'payment' && (
          <PaymentStatus
            status={paymentStatus}
            paymentId={paymentId}
            onRetry={handleRetryPayment}
            theme={theme}
          />
        )}
      </div>
    </div>
  );
};

export default Checkout;
