
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = [
  { date: '01/01', impressoes: 4000, cliques: 240, conversoes: 12, receita: 1200 },
  { date: '02/01', impressoes: 3000, cliques: 198, conversoes: 8, receita: 800 },
  { date: '03/01', impressoes: 5000, cliques: 350, conversoes: 18, receita: 1800 },
  { date: '04/01', impressoes: 4500, cliques: 290, conversoes: 15, receita: 1500 },
  { date: '05/01', impressoes: 6000, cliques: 420, conversoes: 22, receita: 2200 },
  { date: '06/01', impressoes: 5500, cliques: 380, conversoes: 19, receita: 1900 },
  { date: '07/01', impressoes: 7000, cliques: 490, conversoes: 25, receita: 2500 },
];

export default function PerformanceChart() {
  const [selectedPeriod, setSelectedPeriod] = useState('30-dias');
  const [activeMetrics, setActiveMetrics] = useState(['impressoes', 'cliques', 'conversoes']);

<<<<<<< HEAD
  const metricColors = {
    impressoes: '#9F7AEA',
    cliques: '#6B46C1',
    conversoes: '#4C1D95',
    receita: '#2D3748'
=======
  const metricConfig = {
    impressoes: { name: "Impressões", color: "hsl(var(--chart-1))" },
    cliques: { name: "Cliques", color: "hsl(var(--chart-2))" },
    conversoes: { name: "Conversões", color: "hsl(var(--chart-3))" },
    receita: { name: "Receita", color: "hsl(var(--chart-4))" }
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
  };

  const handleExport = () => {
    // Implementar exportação
    console.log('Exportando dados...');
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
<<<<<<< HEAD
          <CardTitle>Desempenho de Campanhas</CardTitle>
=======
          <CardTitle className="text-foreground">Desempenho de Campanhas</CardTitle>
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
          <div className="flex items-center space-x-2">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7-dias">7 dias</SelectItem>
                <SelectItem value="30-dias">30 dias</SelectItem>
                <SelectItem value="90-dias">90 dias</SelectItem>
                <SelectItem value="custom">Personalizado</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Metric Toggles */}
        <div className="flex flex-wrap gap-2 mb-4">
<<<<<<< HEAD
          {Object.entries(metricColors).map(([metric, color]) => (
            <Button
              key={metric}
              variant={activeMetrics.includes(metric) ? 'default' : 'outline'}
              size="sm"
              onClick={() => {
                if (activeMetrics.includes(metric)) {
                  setActiveMetrics(activeMetrics.filter(m => m !== metric));
                } else {
                  setActiveMetrics([...activeMetrics, metric]);
                }
              }}
              className="text-xs"
              style={activeMetrics.includes(metric) ? { backgroundColor: color, borderColor: color } : {}}
            >
              {metric.charAt(0).toUpperCase() + metric.slice(1)}
=======
          {Object.entries(metricConfig).map(([key, { name, color }]) => (
            <Button
              key={key}
              variant={activeMetrics.includes(key) ? 'default' : 'outline'}
              size="sm"
              onClick={() => {
                const newActiveMetrics = activeMetrics.includes(key)
                  ? activeMetrics.filter(m => m !== key)
                  : [...activeMetrics, key];
                setActiveMetrics(newActiveMetrics);
              }}
              className="text-xs"
              style={activeMetrics.includes(key) ? { backgroundColor: color, borderColor: color, color: 'hsl(var(--primary-foreground))' } : {}}
            >
              {name}
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
            </Button>
          ))}
        </div>

        {/* Chart */}
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
<<<<<<< HEAD
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="date" stroke="#718096" />
              <YAxis yAxisId="left" orientation="left" stroke="#718096" />
              <YAxis yAxisId="right" orientation="right" stroke="#718096" />
              <Tooltip />
              <Legend />
              
              {activeMetrics.includes('impressoes') && (
                <Line
                  type="monotone"
                  dataKey="impressoes"
                  stroke={metricColors.impressoes}
                  yAxisId="left"
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              )}
              
              {activeMetrics.includes('cliques') && (
                <Line
                  type="monotone"
                  dataKey="cliques"
                  stroke={metricColors.cliques}
                  yAxisId="left"
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              )}
              
              {activeMetrics.includes('conversoes') && (
                <Line
                  type="monotone"
                  dataKey="conversoes"
                  stroke={metricColors.conversoes}
                  yAxisId="left"
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              )}
              
              {activeMetrics.includes('receita') && (
                <Line
                  type="monotone"
                  dataKey="receita"
                  stroke={metricColors.receita}
                  yAxisId="right"
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              )}
=======
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis yAxisId="left" orientation="left" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))",
                }}
              />
              <Legend />
              
              {activeMetrics.map(metric => (
                <Line
                  key={metric}
                  type="monotone"
                  dataKey={metric}
                  stroke={metricConfig[metric as keyof typeof metricConfig].color}
                  yAxisId={metric === 'receita' ? 'right' : 'left'}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              ))}
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
