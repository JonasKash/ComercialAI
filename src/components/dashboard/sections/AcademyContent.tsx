import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlayCircle, Award, BarChart, Users, Zap } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    title: 'Fundamentos de Vendas',
    icon: <Award className="h-5 w-5 mr-2" />,
    courses: [
      { id: 1, title: 'Introdução ao Funil de Vendas', duration: '45min', image: '/placeholder.svg' },
      { id: 2, title: 'Qualificação de Leads', duration: '1h 15min', image: '/placeholder.svg' },
      { id: 3, title: 'Gatilhos Mentais Essenciais', duration: '55min', image: '/placeholder.svg' },
      { id: 4, title: 'Introdução ao CRM', duration: '30min', image: '/placeholder.svg' },
    ]
  },
  {
    title: 'Técnicas de Negociação',
    icon: <Users className="h-5 w-5 mr-2" />,
    courses: [
      { id: 5, title: 'Contornando Objeções', duration: '1h 30min', image: '/placeholder.svg' },
      { id: 6, title: 'Técnicas de Fechamento', duration: '2h', image: '/placeholder.svg' },
      { id: 7, title: 'Storytelling para Vendas', duration: '1h 10min', image: '/placeholder.svg' },
      { id: 8, title: 'Ancoragem de Preços', duration: '40min', image: '/placeholder.svg' },
    ]
  },
  {
    title: 'Automação e Ferramentas',
    icon: <Zap className="h-5 w-5 mr-2" />,
    courses: [
      { id: 9, title: 'Automatizando seu CRM', duration: '1h 05min', image: '/placeholder.svg' },
      { id: 10, title: 'Criando Campanhas de E-mail', duration: '1h 45min', image: '/placeholder.svg' },
      { id: 11, title: 'Análise de Métricas com IA', duration: '50min', image: '/placeholder.svg' },
    ]
  }
];

const AcademyContent = () => {
  return (
    <div className="space-y-8">
      {/* Featured Course */}
      <Card className="relative w-full h-80 overflow-hidden text-primary-foreground">
        <img src="/placeholder.svg" alt="Featured Course" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent"/>
        <CardContent className="relative z-10 flex flex-col justify-end h-full p-6">
          <Badge className="mb-2 w-fit">Curso em Destaque</Badge>
          <h2 className="text-3xl font-bold">Masterclass de Vendas B2B</h2>
          <p className="max-w-xl mt-2 text-primary-foreground/80">
            Aprenda as estratégias avançadas para vender para outras empresas, 
            desde a prospecção até o fechamento de grandes contas.
          </p>
          <Button className="mt-4 w-fit bg-primary-foreground text-background hover:bg-primary-foreground/90">
            <PlayCircle className="h-5 w-5 mr-2" /> Assistir Agora
          </Button>
        </CardContent>
      </Card>

      {/* Categories */}
      {categories.map(category => (
        <div key={category.title}>
          <h2 className="text-2xl font-bold mb-4 flex items-center text-foreground">{category.icon} {category.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.courses.map(course => (
              <Card key={course.id} className="group overflow-hidden bg-card">
                <CardHeader className="p-0 relative">
                  <img src={course.image} alt={course.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"/>
                  <div className="absolute inset-0 bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="h-12 w-12 text-primary"/>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="font-semibold truncate text-card-foreground">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{course.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcademyContent; 