
import React from 'react';
import { CheckCircle, Clock, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export default function WelcomeSection() {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Bom dia' : currentHour < 18 ? 'Boa tarde' : 'Boa noite';
  
  const { data: profile } = useQuery({
    queryKey: ['user-profile'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return null;
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (error && error.code !== 'PGRST116') {
        throw error;
      }
      
      return data;
    },
  });

  const { data: campaignsCount } = useQuery({
    queryKey: ['campaigns-count'],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('campaigns')
        .select('*', { count: 'exact', head: true });
      
      if (error && error.code !== 'PGRST116') throw error;
      return count || 0;
    },
  });
  
  const onboardingSteps = [
    { label: 'Configurar perfil', completed: !!profile },
    { label: 'Criar primeiro criativo', completed: true },
    { label: 'Lançar campanha', completed: (campaignsCount || 0) > 0 },
    { label: 'Configurar CRM', completed: false },
  ];
  
  const completedSteps = onboardingSteps.filter(step => step.completed).length;
  const progressPercentage = (completedSteps / onboardingSteps.length) * 100;

  const userName = profile?.first_name || 'Usuário';

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {greeting}, {userName}! 👋
            </h1>
            <p className="text-gray-600">
              Você está indo bem! Continue configurando sua conta para maximizar seus resultados.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 w-full md:w-80">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progresso da Configuração</span>
                <span className="text-sm text-purple-600">{completedSteps}/{onboardingSteps.length}</span>
              </div>
              
              <Progress value={progressPercentage} className="mb-3" />
              
              <div className="space-y-2">
                {onboardingSteps.map((step, index) => (
                  <div key={index} className="flex items-center text-sm">
                    {step.completed ? (
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ) : (
                      <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    )}
                    <span className={step.completed ? 'text-gray-700' : 'text-gray-500'}>
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
