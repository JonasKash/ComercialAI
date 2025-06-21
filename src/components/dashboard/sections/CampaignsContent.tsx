import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Plus, MoreHorizontal, TrendingUp, Filter } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const mockCampaigns = [
  { id: 1, name: 'Lançamento Inverno 2024', status: 'Ativa', platform: 'Facebook', budget: 5000, spent: 3250, roi: 4.2 },
  { id: 2, name: 'Promoção Dia das Mães', status: 'Concluída', platform: 'Instagram', budget: 3000, spent: 3000, roi: 5.8 },
  { id: 3, name: 'Google Ads - Topo de Funil', status: 'Ativa', platform: 'Google', budget: 7500, spent: 6800, roi: 3.1 },
  { id: 4, name: 'Remarketing Q3', status: 'Pausada', platform: 'Facebook', budget: 4000, spent: 1500, roi: 2.5 },
  { id: 5, name: 'Captação de Leads', status: 'Rascunho', platform: 'Google', budget: 2000, spent: 0, roi: 0 },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Ativa': return <Badge variant="default" className="bg-green-500">Ativa</Badge>;
    case 'Concluída': return <Badge variant="secondary">Concluída</Badge>;
    case 'Pausada': return <Badge variant="destructive" className="bg-yellow-500">Pausada</Badge>;
    case 'Rascunho': return <Badge variant="outline">Rascunho</Badge>;
    default: return <Badge variant="secondary">{status}</Badge>;
  }
};

const CampaignsContent = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Visão Geral das Campanhas</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline"><Filter className="h-4 w-4 mr-2" /> Filtrar</Button>
          <Button><Plus className="h-4 w-4 mr-2" /> Nova Campanha</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Investido</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 14.550</div>
            <p className="text-xs text-muted-foreground">+12% vs mês passado</p>
          </CardContent>
        </Card>
        {/* Adicione outros cards de métricas aqui */}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Todas as Campanhas</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome da Campanha</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Plataforma</TableHead>
                <TableHead>Orçamento</TableHead>
                <TableHead>ROI</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCampaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className="font-medium">{campaign.name}</TableCell>
                  <TableCell>{getStatusBadge(campaign.status)}</TableCell>
                  <TableCell>{campaign.platform}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>R$ {campaign.spent.toLocaleString()} / {campaign.budget.toLocaleString()}</span>
                      <Progress value={(campaign.spent / campaign.budget) * 100} className="w-full h-2 mt-1" />
                    </div>
                  </TableCell>
                  <TableCell className="text-green-600 font-bold">{campaign.roi}x</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Pausar</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Excluir</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CampaignsContent; 