import React, { useState } from 'react';
import { Check, Crown, Star, Zap, Shield, Users, BarChart3, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Sidebar from '@/components/dashboard/Sidebar';
import TopHeader from '@/components/dashboard/TopHeader';
import AuthWrapper from '@/components/auth/AuthWrapper';

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const { toast } = useToast();

  const plans = [
    {
      id: 'free',
      name: 'Gratuito',
      price: 'R$ 0',
      period: '/mês',
      description: 'Perfeito para começar',
      features: [
        'Até 5 campanhas',
        'Criativos básicos',
        'Analytics básicos',
        'Suporte por email',
        '1 usuário'
      ],
      limitations: [
        'Sem recursos avançados de IA',
        'Sem integração com CRM',
        'Sem relatórios avançados'
      ],
      popular: false,
      icon: Star
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 'R$ 97',
      period: '/mês',
      description: 'Para profissionais que querem crescer',
      features: [
        'Campanhas ilimitadas',
        'Criativos avançados com IA',
        'Analytics completos',
        'Integração com CRM',
        'Suporte prioritário',
        'Até 5 usuários',
        'Relatórios avançados',
        'Templates premium'
      ],
      limitations: [],
      popular: true,
      icon: Crown
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'R$ 297',
      period: '/mês',
      description: 'Para equipes e agências',
      features: [
        'Tudo do plano Pro',
        'Usuários ilimitados',
        'API personalizada',
        'Suporte dedicado',
        'Onboarding personalizado',
        'Relatórios customizados',
        'Integrações avançadas',
        'SLA garantido'
      ],
      limitations: [],
      popular: false,
      icon: Zap
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    toast({
      title: "Plano selecionado",
      description: `Você selecionou o plano ${plans.find(p => p.id === planId)?.name}`,
    });
  };

  const handleUpgrade = () => {
    if (selectedPlan) {
      toast({
        title: "Upgrade iniciado",
        description: "Redirecionando para o checkout...",
      });
      // Aqui você implementaria a integração com o sistema de pagamento
    } else {
      toast({
        title: "Selecione um plano",
        description: "Por favor, escolha um plano antes de continuar.",
        variant: "destructive",
      });
    }
  };

  return (
    <AuthWrapper>
      <div className="flex h-screen bg-background">
        <Sidebar 
          expanded={sidebarExpanded} 
          onToggle={() => setSidebarExpanded(!sidebarExpanded)} 
        />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopHeader 
            onMenuToggle={() => setSidebarExpanded(!sidebarExpanded)}
            title="Planos"
          />
          
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  Escolha o Plano Ideal para Você
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Desbloqueie todo o potencial do CommercialAI Pro com nossos planos flexíveis
                </p>
              </div>

              {/* Plans Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {plans.map((plan) => {
                  const Icon = plan.icon;
                  const isSelected = selectedPlan === plan.id;
                  
                  return (
                    <Card 
                      key={plan.id} 
                      className={`relative transition-all duration-300 hover:shadow-xl ${
                        isSelected ? 'ring-2 ring-primary shadow-lg' : ''
                      } ${plan.popular ? 'border-primary' : ''}`}
                    >
                      {plan.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                          Mais Popular
                        </Badge>
                      )}
                      
                      <CardHeader className="text-center">
                        <div className="flex justify-center mb-4">
                          <div className={`p-3 rounded-full ${
                            plan.id === 'free' ? 'bg-muted' :
                            plan.id === 'pro' ? 'bg-primary/10' : 'bg-secondary'
                          }`}>
                            <Icon className={`h-8 w-8 ${
                              plan.id === 'free' ? 'text-muted-foreground' :
                              plan.id === 'pro' ? 'text-primary' : 'text-secondary-foreground'
                            }`} />
                          </div>
                        </div>
                        <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                        <div className="mt-4">
                          <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                          <span className="text-muted-foreground">{plan.period}</span>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground">Incluído:</h4>
                            {plan.features.map((feature, index) => (
                              <div key={index} className="flex items-center">
                                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {plan.limitations.length > 0 && (
                            <div className="space-y-3 pt-4 border-t">
                              <h4 className="font-semibold text-foreground">Limitações:</h4>
                              {plan.limitations.map((limitation, index) => (
                                <div key={index} className="flex items-center">
                                  <div className="h-5 w-5 text-red-500 mr-3 flex-shrink-0">×</div>
                                  <span className="text-muted-foreground">{limitation}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <Button
                          className={`w-full mt-6 ${
                            isSelected 
                              ? 'bg-primary hover:bg-primary/90' 
                              : 'bg-muted text-muted-foreground hover:bg-muted/80'
                          }`}
                          onClick={() => handlePlanSelect(plan.id)}
                        >
                          {isSelected ? 'Selecionado' : 'Selecionar Plano'}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Action Section */}
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                  onClick={handleUpgrade}
                  disabled={!selectedPlan}
                >
                  {selectedPlan ? 'Fazer Upgrade Agora' : 'Selecione um Plano'}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Cancele a qualquer momento. Sem compromisso.
                </p>
              </div>

              {/* Features Comparison */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Comparação de Recursos</h2>
                <div className="bg-card rounded-lg shadow-lg overflow-hidden border">
                  <div className="grid grid-cols-4 gap-4 p-6 bg-muted border-b">
                    <div className="font-semibold text-foreground">Recurso</div>
                    <div className="text-center font-semibold text-foreground">Gratuito</div>
                    <div className="text-center font-semibold text-foreground">Pro</div>
                    <div className="text-center font-semibold text-foreground">Enterprise</div>
                  </div>
                  
                  {[
                    { feature: 'Campanhas', free: '5', pro: 'Ilimitadas', enterprise: 'Ilimitadas' },
                    { feature: 'Criativos com IA', free: 'Não', pro: 'Sim', enterprise: 'Sim' },
                    { feature: 'Analytics Avançados', free: 'Não', pro: 'Sim', enterprise: 'Sim' },
                    { feature: 'Integração CRM', free: 'Não', pro: 'Sim', enterprise: 'Sim' },
                    { feature: 'Usuários', free: '1', pro: '5', enterprise: 'Ilimitados' },
                    { feature: 'Suporte', free: 'Email', pro: 'Prioritário', enterprise: 'Dedicado' },
                    { feature: 'API', free: 'Não', pro: 'Não', enterprise: 'Sim' },
                  ].map((row, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 p-4 border-b last:border-b-0">
                      <div className="font-medium text-foreground">{row.feature}</div>
                      <div className="text-center text-foreground">{row.free}</div>
                      <div className="text-center text-foreground">{row.pro}</div>
                      <div className="text-center text-foreground">{row.enterprise}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Perguntas Frequentes</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      question: "Posso cancelar minha assinatura a qualquer momento?",
                      answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem penalidades."
                    },
                    {
                      question: "Há um período de teste gratuito?",
                      answer: "Oferecemos 7 dias de teste gratuito para todos os planos pagos."
                    },
                    {
                      question: "Posso mudar de plano durante a assinatura?",
                      answer: "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento."
                    },
                    {
                      question: "O que acontece se eu exceder os limites do meu plano?",
                      answer: "Você será notificado e poderá fazer upgrade para continuar usando os recursos."
                    }
                  ].map((faq, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Plans; 