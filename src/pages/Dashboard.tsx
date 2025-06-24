
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';
import Sidebar from '@/components/dashboard/Sidebar';
import TopHeader from '@/components/dashboard/TopHeader';
import DashboardContent from '@/components/dashboard/DashboardContent';
import DashboardSkeleton from '@/components/dashboard/DashboardSkeleton';
import AuthWrapper from '@/components/auth/AuthWrapper';
import { User } from '@supabase/supabase-js';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <AuthWrapper>
      <div className="flex h-screen bg-background">
        {/* Menu Lateral */}
        <Sidebar 
          expanded={sidebarExpanded} 
          onToggle={() => setSidebarExpanded(!sidebarExpanded)} 
        />
        {/* Conteúdo Principal */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header Superior */}
          <TopHeader 
            onMenuToggle={() => setSidebarExpanded(!sidebarExpanded)}
            title="Dashboard"
          />
          {/* Área de Conteúdo */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <DashboardContent />
          </main>
        </div>
      </div>
    </AuthWrapper>
  );
}
