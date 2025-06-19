
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, TrendingUp, Target, Zap, X } from 'lucide-react';

const mockRecommendations = [
  {
    id: 1,
    title: 'Otimize suas campanhas no Instagram',
    description: 'Suas campanhas no Instagram têm potencial para 25% mais conversões ajustando o público-alvo.',
    impact: 'high',
    action: 'Otimizar Campanhas',
    icon: <Target className="h-5 w-5" />
  },
  {
    id: 2,
    title: 'Crie criativos para vídeos curtos',
    description: 'Vídeos de 15-30 segundos estão gerando 40% mais engajamento no seu nicho.',
    impact: 'medium',
    action: 'Criar Vídeos',
    icon: <Zap className="h-5 w-5" />
  },
  {
    id: 3,
    title: 'Aumente o follow-up com leads',
    description: 'Leads que recebem follow-up em 24h têm 60% mais chance de conversão.',
    impact: 'high',
    action: 'Configurar Automação',
    icon: <TrendingUp className="h-5 w-5" />
  }
];

const impactColors = {
  high: 'bg-red-100 text-red-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-green-100 text-green-800'
};

const impactLabels = {
  high: 'Alto Impacto',
  medium: 'Médio Impacto',
  low: 'Baixo Impacto'
};

export default function AIRecommendations() {
  const handleAction = (recommendationId: number) => {
    console.log('Executando ação para recomendação:', recommendationId);
  };

  const handleDismiss = (recommendationId: number) => {
    console.log('Dispensando recomendação:', recommendationId);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mr-3">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          Recomendações da IA
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockRecommendations.map((recommendation) => (
            <div key={recommendation.id} className="border border-purple-100 rounded-lg p-4 bg-gradient-to-r from-purple-50 to-indigo-50">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                    {recommendation.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{recommendation.title}</h4>
                    <Badge className={impactColors[recommendation.impact as keyof typeof impactColors]}>
                      {impactLabels[recommendation.impact as keyof typeof impactLabels]}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDismiss(recommendation.id)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-sm text-gray-600 mb-4 ml-13">
                {recommendation.description}
              </p>
              
              <div className="flex justify-end ml-13">
                <Button 
                  size="sm" 
                  onClick={() => handleAction(recommendation.id)}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  {recommendation.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {mockRecommendations.length === 0 && (
          <div className="text-center py-8">
            <Sparkles className="h-12 w-12 text-purple-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma recomendação no momento</h3>
            <p className="text-gray-500">
              Nossa IA está analisando seus dados para gerar recomendações personalizadas
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
