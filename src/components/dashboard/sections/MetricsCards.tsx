
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, DollarSign, Target, ArrowUp, ArrowDown } from 'lucide-react';

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
  const metrics = [
    {
      title: 'Leads Gerados',
      value: '247',
      change: 12.5,
      changeType: 'positive' as const,
      icon: <Users className="h-6 w-6" />,
      color: '#6B46C1'
    },
    {
      title: 'Taxa de Conversão',
      value: '3.2%',
      change: 8.1,
      changeType: 'positive' as const,
      icon: <Target className="h-6 w-6" />,
      color: '#805AD5'
    },
    {
      title: 'Receita Gerada',
      value: 'R$ 15.800',
      change: 15.3,
      changeType: 'positive' as const,
      icon: <DollarSign className="h-6 w-6" />,
      color: '#9F7AEA'
    },
    {
      title: 'ROI Campanhas',
      value: '4.2x',
      change: -2.4,
      changeType: 'negative' as const,
      icon: <TrendingUp className="h-6 w-6" />,
      color: '#B794F4'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}
