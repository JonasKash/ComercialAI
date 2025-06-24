import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Bot, Image as ImageIcon, Video, FileText } from 'lucide-react';

const mockCreatives = [
  { id: 1, type: 'image', name: 'Banner Verão 2024', performance: 8.5, status: 'Ativo', preview: '/placeholder.svg' },
  { id: 2, type: 'video', name: 'Vídeo Institucional Q3', performance: 9.2, status: 'Ativo', preview: '/placeholder.svg' },
  { id: 3, type: 'text', name: 'Copy para Ads - Dia dos Pais', performance: 7.1, status: 'Em Análise', preview: '/placeholder.svg' },
  { id: 4, type: 'image', name: 'Carrossel de Produtos', performance: 8.9, status: 'Ativo', preview: '/placeholder.svg' },
  { id: 5, type: 'video', name: 'Reels "Bastidores"', performance: 9.5, status: 'Pausado', preview: '/placeholder.svg' },
  { id: 6, type: 'image', name: 'Oferta Relâmpago', performance: 8.2, status: 'Ativo', preview: '/placeholder.svg' },
];

const getStatusClass = (status: string) => {
  switch (status) {
    case 'Ativo': return 'text-green-600 bg-green-100';
    case 'Em Análise': return 'text-yellow-600 bg-yellow-100';
    case 'Pausado': return 'text-red-600 bg-red-100';
    default: return 'text-gray-600 bg-gray-100';
  }
};

const CreativesContent = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Gerador de Criativos com IA</CardTitle>
            <CardDescription className="text-purple-200 mt-1">
              Crie imagens, vídeos e textos para suas campanhas em segundos.
            </CardDescription>
          </div>
          <Button className="bg-white text-purple-700 hover:bg-gray-100">
            <Bot className="h-5 w-5 mr-2" />
            Gerar com IA
          </Button>
        </CardHeader>
      </Card>

      <Tabs defaultValue="all">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="image"><ImageIcon className="h-4 w-4 mr-1"/> Imagens</TabsTrigger>
            <TabsTrigger value="video"><Video className="h-4 w-4 mr-1"/> Vídeos</TabsTrigger>
            <TabsTrigger value="text"><FileText className="h-4 w-4 mr-1"/> Textos</TabsTrigger>
          </TabsList>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Novo Criativo
          </Button>
        </div>
        
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCreatives.map(creative => (
              <Card key={creative.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img src={creative.preview} alt={creative.name} className="w-full h-40 object-cover"/>
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{creative.name}</h3>
                  <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                    <span>Performance</span>
                    <span className="font-bold text-lg">{creative.performance}/10</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span>Status</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(creative.status)}`}>
                      {creative.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        {/* Adicione TabsContent para 'image', 'video' e 'text' se desejar filtrar */}
      </Tabs>
    </div>
  );
};

export default CreativesContent; 