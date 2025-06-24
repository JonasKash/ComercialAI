
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Play, Clock, Star } from 'lucide-react';

const mockLessons = [
  {
    id: 1,
    title: 'Como criar criativos que convertem',
    duration: '5 min',
    category: 'Criativos',
    level: 'Iniciante',
    thumbnail: '/api/placeholder/160/90',
    rating: 4.8,
    isNew: true
  },
  {
    id: 2,
    title: 'Otimização de campanhas no Facebook',
    duration: '8 min',
    category: 'Campanhas',
    level: 'Intermediário',
    thumbnail: '/api/placeholder/160/90',
    rating: 4.9,
    isNew: false
  },
  {
    id: 3,
    title: 'CRM: Gestão eficiente de leads',
    duration: '6 min',
    category: 'CRM',
    level: 'Iniciante',
    thumbnail: '/api/placeholder/160/90',
    rating: 4.7,
    isNew: true
  }
];

const levelColors = {
  'Iniciante': 'bg-green-100 text-green-800',
  'Intermediário': 'bg-yellow-100 text-yellow-800',
  'Avançado': 'bg-red-100 text-red-800'
};

export default function LearningResources() {
  const handlePlayLesson = (lessonId: number) => {
    console.log('Reproduzindo aula:', lessonId);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center">
            <GraduationCap className="h-5 w-5 mr-2" />
            Recursos & Aprendizado
          </CardTitle>
          <Button variant="link" size="sm">
            Ver Academia
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockLessons.map((lesson) => (
            <div key={lesson.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <div className="w-full h-24 bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center">
                  <Play className="h-8 w-8 text-white opacity-80" />
                </div>
                {lesson.isNew && (
                  <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                    Novo
                  </Badge>
                )}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {lesson.duration}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {lesson.category}
                  </Badge>
                  <Badge className={levelColors[lesson.level as keyof typeof levelColors]}>
                    {lesson.level}
                  </Badge>
                </div>
                
                <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">
                  {lesson.title}
                </h4>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">{lesson.rating}</span>
                  </div>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handlePlayLesson(lesson.id)}
                  >
                    <Play className="h-3 w-3 mr-1" />
                    Assistir
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-4">
            Acelere seu crescimento com nossa biblioteca de conteúdos exclusivos
          </p>
          <Button variant="outline">
            <GraduationCap className="h-4 w-4 mr-2" />
            Explorar Academia Completa
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
