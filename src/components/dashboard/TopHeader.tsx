
import React, { useState } from 'react';
import { Search, Bell, Menu, HelpCircle, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
<<<<<<< HEAD
=======
import { ThemeToggle } from '@/components/theme-toggle';
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4

interface TopHeaderProps {
  onMenuToggle: () => void;
  title: string;
}

export default function TopHeader({ onMenuToggle, title }: TopHeaderProps) {
  const [searchValue, setSearchValue] = useState('');
  const notificationCount = 3;

  return (
<<<<<<< HEAD
    <header className="bg-white border-b border-gray-200 px-4 py-3">
=======
    <header className="bg-background border-b border-border px-4 py-3">
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuToggle}
            className="md:hidden mr-2"
          >
<<<<<<< HEAD
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
=======
            <Menu className="h-5 w-5 text-foreground dark:text-white" />
          </Button>
          <h1 className="text-xl font-semibold text-foreground">{title}</h1>
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
        </div>

        {/* Center - Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
<<<<<<< HEAD
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
=======
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground dark:text-white" />
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
            <Input
              type="text"
              placeholder="Buscar campanhas, leads, criativos..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pl-10 pr-4"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-2">
<<<<<<< HEAD
=======
          {/* Theme Toggle */}
          <ThemeToggle />

>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative">
<<<<<<< HEAD
                <Bell className="h-5 w-5" />
=======
                <Bell className="h-5 w-5 text-foreground dark:text-white" />
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
                {notificationCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {notificationCount}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="p-3 border-b">
                <h3 className="font-medium">Notificações</h3>
              </div>
              <DropdownMenuItem className="p-3">
                <div>
                  <p className="text-sm font-medium">Novo lead gerado</p>
<<<<<<< HEAD
                  <p className="text-xs text-gray-500">Maria Silva se interessou pela sua campanha</p>
                  <p className="text-xs text-gray-400 mt-1">2 min atrás</p>
=======
                  <p className="text-xs text-muted-foreground">Maria Silva se interessou pela sua campanha</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">2 min atrás</p>
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3">
                <div>
                  <p className="text-sm font-medium">Campanha precisa de atenção</p>
<<<<<<< HEAD
                  <p className="text-xs text-gray-500">Campanha "Verão 2024" com baixo desempenho</p>
                  <p className="text-xs text-gray-400 mt-1">1 hora atrás</p>
=======
                  <p className="text-xs text-muted-foreground">Campanha "Verão 2024" com baixo desempenho</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">1 hora atrás</p>
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3">
                <div>
                  <p className="text-sm font-medium">Recomendação da IA</p>
<<<<<<< HEAD
                  <p className="text-xs text-gray-500">Sugestão para otimizar suas conversões</p>
                  <p className="text-xs text-gray-400 mt-1">3 horas atrás</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center text-sm text-purple-600">
=======
                  <p className="text-xs text-muted-foreground">Sugestão para otimizar suas conversões</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">3 horas atrás</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center text-sm text-primary">
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
                Ver todas as notificações
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Help */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
<<<<<<< HEAD
                <HelpCircle className="h-5 w-5" />
=======
                <HelpCircle className="h-5 w-5 text-foreground dark:text-white" />
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Central de Ajuda</DropdownMenuItem>
              <DropdownMenuItem>Tutoriais</DropdownMenuItem>
              <DropdownMenuItem>Contato</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Reportar Bug</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center">
<<<<<<< HEAD
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-sm font-medium text-white">JS</span>
                </div>
                <span className="hidden md:block text-sm">João Silva</span>
=======
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-2">
                  <span className="text-sm font-medium text-primary-foreground">JS</span>
                </div>
                <span className="hidden md:block text-sm text-foreground">João Silva</span>
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
<<<<<<< HEAD
                <User className="mr-2 h-4 w-4" />
=======
                <User className="mr-2 h-4 w-4 text-foreground dark:text-white" />
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
                Meu Perfil
              </DropdownMenuItem>
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuItem>Planos e Cobrança</DropdownMenuItem>
              <DropdownMenuSeparator />
<<<<<<< HEAD
              <DropdownMenuItem className="text-red-600">
=======
              <DropdownMenuItem className="text-destructive">
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
