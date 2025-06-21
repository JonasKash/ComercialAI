
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Mail, Phone, ExternalLink, Clock, MapPin } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const statusLabels = {
  new: 'Novo',
  qualified: 'Qualificado',
  proposal: 'Proposta',
  negotiation: 'Negociação',
  won: 'Ganho',
  lost: 'Perdido'
};

const getStatusVariant = (status: string) => {
  switch (status) {
    case 'won': return 'default';
    case 'lost': return 'destructive';
    case 'new': return 'secondary';
    default: return 'outline';
  }
}

export default function RecentActivity() {
  const { data: leads, isLoading } = useQuery({
    queryKey: ['recent-leads'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (error) throw error;
      return data;
    },
  });

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes} min atrás`;
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} hora${hours > 1 ? 's' : ''} atrás`;
    } else {
      const days = Math.floor(diffInMinutes / 1440);
      return `${days} dia${days > 1 ? 's' : ''} atrás`;
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="h-5 w-5 mr-2" />
            Leads Recentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-border rounded-lg p-4">
                <div className="animate-pulse">
                  <div className="h-4 bg-muted-foreground/20 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-muted-foreground/20 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-muted-foreground/20 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center text-foreground">
            <Users className="h-5 w-5 mr-2" />
            Leads Recentes
          </CardTitle>
          <Button variant="link" size="sm">
            Ver todos
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leads && leads.length > 0 ? leads.map((lead) => (
            <div key={lead.id} className="border border-border rounded-lg p-4 hover:bg-muted transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-medium text-primary">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{lead.name}</h4>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {lead.source}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                    {lead.email && (
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-1" />
                        {lead.email}
                      </div>
                    )}
                    {lead.phone && (
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-1" />
                        {lead.phone}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant={getStatusVariant(lead.status)}>
                        {statusLabels[lead.status as keyof typeof statusLabels]}
                      </Badge>
                      {lead.potential_value && (
                        <span className="text-sm font-medium text-green-500">
                          R$ {lead.potential_value.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatTimeAgo(lead.created_at)}
                    </div>
                  </div>
                </div>
                
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )) : (
            <div className="text-center py-8">
              <Users className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">Nenhum lead ainda</h3>
              <p className="text-muted-foreground mb-4">Comece criando campanhas para gerar seus primeiros leads</p>
              <Button>Criar Campanha</Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
