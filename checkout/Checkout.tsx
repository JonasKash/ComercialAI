import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun, CreditCard, CheckCircle, Zap, Users, Target, BarChart3 } from 'lucide-react';
import PlanCard from '../components/PlanCard';
import CheckoutForm from '../components/CheckoutForm';

interface CheckoutProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const Checkout = ({ theme, setTheme }: CheckoutProps) => {
  const [selectedPlan, setSelectedPlan] = useState('growth');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const plans = [
    {
      id: 'free',
      name: 'Gratuito',
      price: 0,
      period: 'mês',
      popular: false,
      features: ['1 usuário', '10 criativos/mês', '1.000 impressões', 'CRM básico (50 leads)'],
      icon: Users
    },
    {
      id: 'growth',
      name: 'Growth',
      price: 49,
      period: 'mês',
      popular: true,
      features: ['3 usuários', '50 criativos/mês', '5.000 impressões', 'CRM completo (500 leads)', 'Integrações básicas'],
      icon: Target
    },
    {
      id: 'scale',
      name: 'Scale',
      price: 99,
      period: 'mês',
      popular: false,
      features: ['10 usuários', 'Criativos ilimitados', '25.000 impressões', 'Leads ilimitados', 'Todas as integrações', 'API para desenvolvedores'],
      icon: BarChart3
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleCheckout = async (userData: { email: string; name: string }) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/create-preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId: selectedPlan,
          userEmail: userData.email,
          userName: userData.name,
        }),
      });

      const data = await response.json();
      
      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        throw new Error('Erro ao criar pagamento');
      }
    } catch (error) {
      console.error('Erro no checkout:', error);
      alert('Erro ao processar pagamento. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-zinc-900 dark:to-zinc-800">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">CommercialAI Pro</span>
          </div>
          
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Escolha seu plano
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comece grátis e evolua conforme suas vendas aumentam
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              isSelected={selectedPlan === plan.id}
              onSelect={() => handlePlanSelect(plan.id)}
            />
          ))}
        </div>

        {selectedPlan !== 'free' && (
          <div className="mt-12 max-w-md mx-auto">
            <CheckoutForm
              plan={plans.find(p => p.id === selectedPlan)!}
              onSubmit={handleCheckout}
              loading={loading}
            />
          </div>
        )}

        {selectedPlan === 'free' && (
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/success')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Começar Grátis
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;