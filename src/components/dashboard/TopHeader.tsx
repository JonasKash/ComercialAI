
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

interface TopHeaderProps {
  onMenuToggle: () => void;
  title: string;
}

export default function TopHeader({ onMenuToggle, title }: TopHeaderProps) {
  const [searchValue, setSearchValue] = useState('');
  const notificationCount = 3;

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuToggle}
            className="md:hidden mr-2"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        </div>

        {/* Center - Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
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
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
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
                  <p className="text-xs text-gray-500">Maria Silva se interessou pela sua campanha</p>
                  <p className="text-xs text-gray-400 mt-1">2 min atrás</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3">
                <div>
                  <p className="text-sm font-medium">Campanha precisa de atenção</p>
                  <p className="text-xs text-gray-500">Campanha "Verão 2024" com baixo desempenho</p>
                  <p className="text-xs text-gray-400 mt-1">1 hora atrás</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3">
                <div>
                  <p className="text-sm font-medium">Recomendação da IA</p>
                  <p className="text-xs text-gray-500">Sugestão para otimizar suas conversões</p>
                  <p className="text-xs text-gray-400 mt-1">3 horas atrás</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center text-sm text-purple-600">
                Ver todas as notificações
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Help */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <HelpCircle className="h-5 w-5" />
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
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-sm font-medium text-white">JS</span>
                </div>
                <span className="hidden md:block text-sm">João Silva</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Meu Perfil
              </DropdownMenuItem>
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuItem>Planos e Cobrança</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
