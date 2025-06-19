
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, DollarSign, Target, ArrowUp, ArrowDown } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  changeType: 'positive' | 'negative';
  icon: React.ReactNode;
  color: string;
}

function MetricCard({ title, value, change, changeType, icon, color }: MetricCardProps) {
  const isPositive = changeType === 'positive';
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <div className="flex items-center mt-2">
              {isPositive ? (
                <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
              )}
              <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {Math.abs(change)}%
              </span>
              <span className="text-sm text-gray-500 ml-1">vs. mês anterior</span>
            </div>
          </div>
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${color}20` }}
          >
            <div style={{ color }}>{icon}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function MetricsCards() {
  const { data: metrics, isLoading } = useQuery({
    queryKey: ['dashboard-metrics'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('dashboard_metrics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();
      
      if (error && error.code !== 'PGRST116') {
        throw error;
      }
      
      return data;
    },
  });

  const { data: leadsCount } = useQuery({
    queryKey: ['leads-count'],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true });
      
      if (error) throw error;
      return count || 0;
    },
  });

  // Fallback para dados mock se não houver dados no banco
  const metricsData = [
    {
      title: 'Leads Gerados',
      value: leadsCount?.toString() || (metrics?.total_leads?.toString() || '247'),
      change: metrics?.leads_change || 12.5,
      changeType: 'positive' as const,
      icon: <Users className="h-6 w-6" />,
      color: '#6B46C1'
    },
    {
      title: 'Taxa de Conversão',
      value: metrics?.conversion_rate ? `${metrics.conversion_rate}%` : '3.2%',
      change: metrics?.conversion_change || 8.1,
      changeType: 'positive' as const,
      icon: <Target className="h-6 w-6" />,
      color: '#805AD5'
    },
    {
      title: 'Receita Gerada',
      value: metrics?.revenue ? `R$ ${metrics.revenue.toLocaleString()}` : 'R$ 15.800',
      change: metrics?.revenue_change || 15.3,
      changeType: 'positive' as const,
      icon: <DollarSign className="h-6 w-6" />,
      color: '#9F7AEA'
    },
    {
      title: 'ROI Campanhas',
      value: metrics?.roi ? `${metrics.roi}x` : '4.2x',
      change: metrics?.roi_change || -2.4,
      changeType: (metrics?.roi_change || -2.4) >= 0 ? 'positive' as const : 'negative' as const,
      icon: <TrendingUp className="h-6 w-6" />,
      color: '#B794F4'
    }
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metricsData.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}
