
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Mail, Phone, ExternalLink, Clock, MapPin } from 'lucide-react';

const mockLeads = [
  {
    id: 1,
    name: 'Maria Silva',
    email: 'maria@email.com',
    phone: '(11) 99999-9999',
    status: 'new',
    source: 'Facebook Ads',
    value: 2500,
    time: '5 min atrás'
  },
  {
    id: 2,
    name: 'João Santos',
    email: 'joao@email.com',
    phone: '(11) 88888-8888',
    status: 'qualified',
    source: 'Instagram',
    value: 3200,
    time: '15 min atrás'
  },
  {
    id: 3,
    name: 'Ana Costa',
    email: 'ana@email.com',
    phone: '(11) 77777-7777',
    status: 'proposal',
    source: 'Google Ads',
    value: 1800,
    time: '1 hora atrás'
  }
];

const statusColors = {
  new: 'bg-blue-100 text-blue-800',
  qualified: 'bg-green-100 text-green-800',
  proposal: 'bg-yellow-100 text-yellow-800',
  negotiation: 'bg-orange-100 text-orange-800',
  won: 'bg-emerald-100 text-emerald-800',
  lost: 'bg-red-100 text-red-800'
};

const statusLabels = {
  new: 'Novo',
  qualified: 'Qualificado',
  proposal: 'Proposta',
  negotiation: 'Negociação',
  won: 'Ganho',
  lost: 'Perdido'
};

export default function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center">
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
          {mockLeads.map((lead) => (
            <div key={lead.id} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-medium text-purple-700">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{lead.name}</h4>
                      <p className="text-sm text-gray-500 flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {lead.source}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      {lead.email}
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-1" />
                      {lead.phone}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge className={statusColors[lead.status as keyof typeof statusColors]}>
                        {statusLabels[lead.status as keyof typeof statusLabels]}
                      </Badge>
                      <span className="text-sm font-medium text-green-600">
                        R$ {lead.value.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {lead.time}
                    </div>
                  </div>
                </div>
                
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {mockLeads.length === 0 && (
          <div className="text-center py-8">
            <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum lead ainda</h3>
            <p className="text-gray-500 mb-4">Comece criando campanhas para gerar seus primeiros leads</p>
            <Button>Criar Campanha</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
