import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, DollarSign, Users, BarChart3, PieChart } from 'lucide-react';

const financialData = {
  months: ['Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov'],
  revenue: [50728.09, 55298.42, 64680.50, 103648.54, 128261.87, 134087.00, 140387.00, 121087.00, 104337.00, 104337.00, 104637.00, 104637.00],
  expense: [50904.67, 100411.09, 129260.89, 123784.43, 161743.02, 149000.00, 149000.00, 149000.00, 0, 0, 0, 0],
  result: [-176.58, -45112.67, -64580.39, -20135.89, -33481.15, -14913.00, -8613.00, -27913.00, 104337.00, 104337.00, 104637.00, 104637.00],
};

const clientRevenueNovember = [
  { name: 'MARIA JOSÉ', value: 12500 },
  { name: 'WALTERON', value: 9900 },
  { name: 'GILDA', value: 9600 },
  { name: 'ADAIR', value: 8300 },
  { name: 'LYDIA', value: 7990 },
  { name: 'LAZARO', value: 7000 },
  { name: 'ELIANA', value: 6800 },
  { name: 'MARIA ABADIA', value: 6800 },
  { name: 'DOLORES', value: 5640 },
  { name: 'HAMILTON', value: 5999 },
  { name: 'PETRONILHA/ADRIANA/ ERCY', value: 5958 },
  { name: 'ORÁDIA', value: 6300 },
  { name: 'MIGUEL', value: 3500 },
  { name: 'VALDETE', value: 3500 },
];

const AnalyticsContent = () => {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Total (Nov)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {financialData.revenue[11].toLocaleString('pt-BR')}</div>
            <p className="text-xs text-muted-foreground">Estável em relação a Outubro</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Despesa Total (Jul)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {financialData.expense[7].toLocaleString('pt-BR')}</div>
            <p className="text-xs text-muted-foreground">Último mês com dados</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resultado (Nov)</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">R$ {financialData.result[11].toLocaleString('pt-BR')}</div>
            <p className="text-xs text-muted-foreground">Baseado na receita de Nov</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Ativos (Nov)</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clientRevenueNovember.length}</div>
            <p className="text-xs text-muted-foreground">Total de clientes pagantes</p>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="h-5 w-5 mr-2" />
            Visão Geral Mensal
          </CardTitle>
          <CardDescription>Receita e Despesa por mês (R$)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mês</TableHead>
                  <TableHead className="text-right">Receita</TableHead>
                  <TableHead className="text-right">Despesa</TableHead>
                  <TableHead className="text-right">Resultado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {financialData.months.map((month, index) => (
                  <TableRow key={month}>
                    <TableCell className="font-medium">{month}</TableCell>
                    <TableCell className="text-right">R$ {financialData.revenue[index].toLocaleString('pt-BR')}</TableCell>
                    <TableCell className="text-right">R$ {financialData.expense[index].toLocaleString('pt-BR')}</TableCell>
                    <TableCell className={`text-right font-bold ${financialData.result[index] >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      R$ {financialData.result[index].toLocaleString('pt-BR')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Breakdown */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChart className="h-5 w-5 mr-2" />
              Composição da Receita (Maio)
            </CardTitle>
            <CardDescription>De onde vem o dinheiro</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="font-medium">Repasses</span>
                <span className="font-bold text-purple-700">R$ 120.587,00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="font-medium">Day Car e Diárias</span>
                <span className="font-bold text-purple-700">R$ 12.500,00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="font-medium">Lanchonete</span>
                <span className="font-bold text-purple-700">R$ 1.000,00</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChart className="h-5 w-5 mr-2" />
              Composição da Despesa (Julho)
            </CardTitle>
            <CardDescription>Para onde vai o dinheiro</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="font-medium">Custo Fixo</span>
                <span className="font-bold text-red-700">R$ 99.500,00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="font-medium">Custo Variável</span>
                <span className="font-bold text-red-700">R$ 49.500,00</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Clients */}
      <Card>
        <CardHeader>
          <CardTitle>Top Clientes por Receita (Novembro)</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead className="text-right">Valor (R$)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientRevenueNovember.map((client) => (
                <TableRow key={client.name}>
                  <TableCell className="font-medium">{client.name}</TableCell>
                  <TableCell className="text-right">{client.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsContent; 