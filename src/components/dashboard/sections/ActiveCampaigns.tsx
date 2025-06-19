
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Megaphone, 
  Plus, 
  Play, 
  Pause, 
  MoreHorizontal, 
  TrendingUp, 
  TrendingDown,
  Eye,
  MousePointer,
  Target
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const mockCampaigns = [
  {
    id: 1,
    name: 'Campanha Verão 2024',
    status: 'active',
    platform: 'Facebook',
    budget: 1000,
    spent: 650,
    impressions: 15420,
    clicks: 487,
    conversions: 23,
    performance: 'good'
  },
  {
    id: 2,
    name: 'Promoção Black Friday',
    status: 'paused',
    platform: 'Instagram',
    budget: 500,
    spent: 120,
    impressions: 8350,
    clicks: 156,
    conversions: 8,
    performance: 'average'
  },
  {
    id: 3,
    name: 'Lançamento Produto X',
    status: 'active',
    platform: 'Google',
    budget: 2000,
    spent: 1200,
    impressions: 32100,
    clicks: 892,
    conversions: 45,
    performance: 'excellent'
  }
];

const statusColors = {
  active: 'bg-green-100 text-green-800',
  paused: 'bg-yellow-100 text-yellow-800',
  completed: 'bg-blue-100 text-blue-800',
  draft: 'bg-gray-100 text-gray-800'
};

const statusLabels = {
  active: 'Ativa',
  paused: 'Pausada',
  completed: 'Concluída',
  draft: 'Rascunho'
};

const performanceColors = {
  excellent: 'text-green-600',
  good: 'text-blue-600',
  average: 'text-yellow-600',
  poor: 'text-red-600'
};

export default function ActiveCampaigns() {
  const handlePause = (campaignId: number) => {
    console.log('Pausando campanha:', campaignId);
  };

  const handleResume = (campaignId: number) => {
    console.log('Retomando campanha:', campaignId);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center">
            <Megaphone className="h-5 w-5 mr-2" />
            Campanhas Ativas
          </CardTitle>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nova Campanha
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockCampaigns.map((campaign) => {
            const budgetPercentage = (campaign.spent / campaign.budget) * 100;
            const ctr = ((campaign.clicks / campaign.impressions) * 100).toFixed(2);
            const conversionRate = ((campaign.conversions / campaign.clicks) * 100).toFixed(1);
            
            return (
              <div key={campaign.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <Megaphone className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={statusColors[campaign.status as keyof typeof statusColors]}>
                          {statusLabels[campaign.status as keyof typeof statusLabels]}
                        </Badge>
                        <span className="text-sm text-gray-500">{campaign.platform}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {campaign.performance === 'excellent' && <TrendingUp className="h-4 w-4 text-green-500" />}
                    {campaign.performance === 'poor' && <TrendingDown className="h-4 w-4 text-red-500" />}
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Duplicar</DropdownMenuItem>
                        {campaign.status === 'active' ? (
                          <DropdownMenuItem onClick={() => handlePause(campaign.id)}>
                            <Pause className="h-4 w-4 mr-2" />
                            Pausar
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem onClick={() => handleResume(campaign.id)}>
                            <Play className="h-4 w-4 mr-2" />
                            Retomar
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                
                {/* Budget Progress */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Orçamento</span>
                    <span className="text-sm font-medium">
                      R$ {campaign.spent.toLocaleString()} / R$ {campaign.budget.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={budgetPercentage} className="h-2" />
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Eye className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500">Impressões</span>
                    </div>
                    <p className="text-sm font-medium">{campaign.impressions.toLocaleString()}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <MousePointer className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500">CTR</span>
                    </div>
                    <p className="text-sm font-medium">{ctr}%</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Target className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500">Conversões</span>
                    </div>
                    <p className="text-sm font-medium">{campaign.conversions}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500">Taxa Conv.</span>
                    </div>
                    <p className={`text-sm font-medium ${performanceColors[campaign.performance as keyof typeof performanceColors]}`}>
                      {conversionRate}%
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {mockCampaigns.length === 0 && (
          <div className="text-center py-8">
            <Megaphone className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma campanha ativa</h3>
            <p className="text-gray-500 mb-4">Crie sua primeira campanha para começar a gerar leads</p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Criar Primeira Campanha
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
