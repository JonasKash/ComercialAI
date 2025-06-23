# Checkout Mercado Pago - CommercialAI Pro

Sistema de checkout completo com integração ao Mercado Pago para o CommercialAI Pro, incluindo pagamentos via cartão de crédito, PIX e checkout transparente.

## 🚀 Funcionalidades

- ✅ **Checkout Pro**: Redirecionamento para página do Mercado Pago
- ✅ **Cartão de Crédito**: Pagamento direto com validação em tempo real
- ✅ **PIX**: Geração de QR Code para pagamento instantâneo
- ✅ **Temas**: Suporte a tema claro e escuro
- ✅ **Responsivo**: Design adaptável para mobile e desktop
- ✅ **Webhooks**: Notificações automáticas de pagamento

## 🛠️ Tecnologias

- **Frontend**: React + TypeScript + Vite
- **Backend**: Node.js + Express
- **Pagamentos**: Mercado Pago SDK
- **UI**: Tailwind CSS + shadcn/ui
- **Ícones**: Lucide React

## 📋 Pré-requisitos

- Node.js 18.16.1 ou superior
- npm ou yarn
- Conta no Mercado Pago (para credenciais de teste)

## ⚙️ Configuração

### 1. Instalar Dependências

```bash
npm install
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Mercado Pago Configuration
MERCADO_PAGO_ACCESS_TOKEN=TEST-xxxxxxxxxxxxxxxxxxxxxxxxxxxx
MERCADO_PAGO_PUBLIC_KEY=TEST-xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# URLs
FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:3001

# Server Configuration
PORT=3001
NODE_ENV=development
```

### 3. Obter Credenciais do Mercado Pago

1. Acesse [Mercado Pago Developers](https://www.mercadopago.com.br/developers/panel/credentials)
2. Faça login na sua conta
3. Copie o **Access Token** de teste
4. Cole no arquivo `.env`

## 🚀 Como Executar

### Desenvolvimento

1. **Iniciar o Backend:**
```bash
npm run server
```

2. **Iniciar o Frontend (em outro terminal):**
```bash
npm run dev
```

3. **Acessar o projeto:**
- Frontend: http://localhost:5173
- Backend: http://localhost:3001

### Produção

```bash
npm run build
npm start
```

## 💳 Testes de Pagamento

### Cartões de Teste

**Aprovados:**
- 4509 9535 6623 3704 (Visa)
- 5031 4332 1540 6351 (Mastercard)
- 3711 8030 3257 522 (American Express)

**Rejeitados:**
- 4000 0000 0000 0002 (Visa)
- 5031 1111 1111 6351 (Mastercard)

### Dados de Teste

- **CVV**: Qualquer número de 3-4 dígitos
- **Data de Vencimento**: Qualquer data futura
- **CPF**: 123.456.789-09
- **Nome**: Qualquer nome

## 🔧 Estrutura do Projeto

```
checkout/
├── src/
│   ├── components/
│   │   ├── CheckoutForm.tsx      # Formulário de checkout
│   │   ├── PlanCard.tsx          # Cards dos planos
│   │   ├── PaymentStatus.tsx     # Status do pagamento
│   │   └── ui/                   # Componentes UI
│   ├── pages/
│   │   ├── Checkout.tsx          # Página principal
│   │   └── Success.tsx           # Página de sucesso
│   └── App.tsx                   # App principal
├── server.js                     # Servidor Express
├── package.json                  # Dependências
└── .env                          # Variáveis de ambiente
```

## 📱 Métodos de Pagamento

### 1. Checkout Pro
- Redirecionamento para página do Mercado Pago
- Suporte a cartão, PIX, boleto
- Interface gerenciada pelo Mercado Pago

### 2. Cartão de Crédito
- Pagamento direto no site
- Validação em tempo real
- Suporte a parcelamento

### 3. PIX
- Geração de QR Code
- Pagamento instantâneo
- Confirmação automática

## 🔄 Webhooks

O sistema está configurado para receber notificações do Mercado Pago em:
```
POST http://localhost:3001/api/webhook
```

## 🎨 Temas

O projeto suporta dois temas:
- **Claro**: Design limpo e moderno
- **Escuro**: Interface escura para melhor experiência

## 🐛 Solução de Problemas

### Erro de CORS
Se encontrar erros de CORS, verifique se o backend está rodando na porta 3001.

### Erro de Credenciais
Certifique-se de que as credenciais do Mercado Pago estão corretas no arquivo `.env`.

### Erro de Build
Execute `npm run build` para verificar se há erros de compilação.

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique os logs do console
2. Confirme as configurações do `.env`
3. Teste com os cartões de teste fornecidos

## 🔒 Segurança

- Use sempre credenciais de teste para desenvolvimento
- Nunca commite o arquivo `.env` no repositório
- Valide sempre os dados de entrada
- Use HTTPS em produção

## 📄 Licença

Este projeto é parte do CommercialAI Pro e está sob licença proprietária.

## ⚠️ Importante

Para que o checkout funcione corretamente, **é necessário rodar o servidor backend** responsável pelas rotas de pagamento (Mercado Pago, PIX, etc). Se o backend não estiver rodando, ao clicar em checkout o site apenas irá carregar e não irá prosseguir para o pagamento.

## Como rodar o servidor backend

### 1. A partir da raiz do projeto
Se você estiver na pasta principal do projeto (`commercialai-pro-suite-main`), execute:

```bash
node checkout/server.js
```

### 2. A partir da pasta `checkout`
Se você estiver dentro da pasta `checkout`, execute:

```bash
node server.js
```

---

- Certifique-se de que as dependências estão instaladas (`npm install` ou `bun install`).
- O backend deve rodar na porta 3001 por padrão. Se precisar mudar, ajuste as URLs no frontend.
- O terminal deve mostrar uma mensagem como: `Servidor rodando na porta 3001`.

Se aparecer algum erro ao iniciar, verifique as mensagens no terminal e envie para o suporte/canal de desenvolvimento.
