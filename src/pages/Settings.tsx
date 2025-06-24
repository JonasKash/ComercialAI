import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import TopHeader from '@/components/dashboard/TopHeader';
import AuthWrapper from '@/components/auth/AuthWrapper';

export default function Settings() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <AuthWrapper>
      <div className="flex h-screen bg-background">
        <Sidebar 
          expanded={sidebarExpanded} 
          onToggle={() => setSidebarExpanded(!sidebarExpanded)} 
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopHeader 
            onMenuToggle={() => setSidebarExpanded(!sidebarExpanded)}
            title="Configurações"
          />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {/* Coloque aqui o conteúdo da página de configurações, como tabs, cards, formulários, etc. */}
            <div className="text-white text-center text-2xl font-bold mt-10">Configurações (restaurar conteúdo real aqui)</div>
          </main>
        </div>
      </div>
    </AuthWrapper>
  );
} 