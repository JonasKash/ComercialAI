
import React from 'react';
import { useRouter } from 'next/router';
import { 
  LayoutDashboard, 
  Palette, 
  Megaphone, 
  Users, 
  BarChart3, 
  GraduationCap, 
  Settings, 
  LogOut,
  Sparkles,
  ChevronLeft,
  Crown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface SidebarProps {
  expanded: boolean;
  onToggle: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', active: true },
  { icon: Palette, label: 'Criativos', href: '/creatives' },
  { icon: Megaphone, label: 'Campanhas', href: '/campaigns' },
  { icon: Users, label: 'CRM', href: '/crm' },
  { icon: BarChart3, label: 'Analytics', href: '/analytics' },
  { icon: GraduationCap, label: 'Academy', href: '/academy' },
  { icon: Settings, label: 'Configurações', href: '/settings' },
];

export default function Sidebar({ expanded, onToggle }: SidebarProps) {
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Logout realizado",
        description: "Você foi desconectado com sucesso.",
      });
    } catch (error: any) {
      toast({
        title: "Erro no logout",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className={`bg-purple-900 text-white transition-all duration-300 ${expanded ? 'w-64' : 'w-16'} flex flex-col`}>
      {/* Header */}
      <div className="p-4 border-b border-purple-800">
        <div className="flex items-center justify-between">
          <div className={`flex items-center ${expanded ? '' : 'justify-center'}`}>
            <Sparkles className="h-8 w-8 text-purple-300" />
            {expanded && (
              <div className="ml-3">
                <h1 className="text-lg font-bold">CommercialAI</h1>
                <p className="text-xs text-purple-300">Pro Suite</p>
              </div>
            )}
          </div>
          {expanded && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="text-purple-300 hover:text-white hover:bg-purple-800"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* User Info */}
      {expanded && (
        <div className="p-4 border-b border-purple-800">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">João Silva</p>
              <p className="text-xs text-purple-300">Plano Gratuito</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.active;
            
            return (
              <li key={item.href}>
                <button
                  onClick={() => router.push(item.href)}
                  className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-purple-800 text-white' 
                      : 'text-purple-300 hover:text-white hover:bg-purple-800'
                  } ${expanded ? '' : 'justify-center'}`}
                >
                  <Icon className="h-5 w-5" />
                  {expanded && <span className="ml-3">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Upgrade Button */}
        {expanded && (
          <div className="mt-8 p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg">
            <div className="flex items-center mb-2">
              <Crown className="h-5 w-5 text-yellow-300 mr-2" />
              <span className="text-sm font-medium">Upgrade</span>
            </div>
            <p className="text-xs text-purple-100 mb-3">
              Desbloqueie recursos avançados do CommercialAI Pro
            </p>
            <Button 
              size="sm" 
              className="w-full bg-white text-purple-900 hover:bg-gray-100"
              onClick={() => router.push('/settings?tab=plans')}
            >
              Ver Planos
            </Button>
          </div>
        )}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-purple-800">
        <button
          onClick={handleLogout}
          className={`w-full flex items-center px-3 py-2 rounded-lg text-purple-300 hover:text-white hover:bg-purple-800 transition-colors ${
            expanded ? '' : 'justify-center'
          }`}
        >
          <LogOut className="h-5 w-5" />
          {expanded && <span className="ml-3">Sair</span>}
        </button>
      </div>
    </div>
  );
}
