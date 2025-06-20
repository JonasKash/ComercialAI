import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, User, MoreHorizontal } from 'lucide-react';

const stages = ['Novos Leads', 'Qualificação', 'Proposta', 'Negociação', 'Ganhos'];

const mockLeads = [
  { id: 1, name: 'Empresa Alpha', stage: 'Novos Leads', value: 5000, owner: 'João' },
  { id: 2, name: 'Startup Beta', stage: 'Qualificação', value: 7500, owner: 'Maria' },
  { id: 3, name: 'Corp Gama', stage: 'Proposta', value: 12000, owner: 'João' },
  { id: 4, name: 'Comércio Delta', stage: 'Negociação', value: 8000, owner: 'Ana' },
  { id: 5, name: 'Indústria Epsilon', stage: 'Ganhos', value: 25000, owner: 'Maria' },
  { id: 6, name: 'Agência Zeta', stage: 'Qualificação', value: 9500, owner: 'Carlos' },
];

const CRMContent = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-foreground">Funil de Vendas (CRM)</h1>
        <Button><Plus className="h-4 w-4 mr-2" /> Novo Lead</Button>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {stages.map(stage => (
          <div key={stage} className="flex-shrink-0 w-72 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold p-4 border-b border-border text-foreground">{stage}</h3>
            <div className="p-4 space-y-4">
              {mockLeads.filter(lead => lead.stage === stage).map(lead => (
                <Card key={lead.id} className="cursor-pointer hover:shadow-md bg-card">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-card-foreground">{lead.name}</span>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <MoreHorizontal className="h-4 w-4"/>
                      </Button>
                    </div>
                    <p className="text-sm text-green-500 font-medium mt-1">R$ {lead.value.toLocaleString()}</p>
                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-2"/>
                      <span>{lead.owner}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CRMContent; 