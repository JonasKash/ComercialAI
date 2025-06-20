import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import TopHeader from '@/components/dashboard/TopHeader';
import AuthWrapper from '@/components/auth/AuthWrapper';
import CreativesContent from '@/components/dashboard/sections/CreativesContent';

export default function Creatives() {
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
            title="Criativos"
          />
          
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <CreativesContent />
          </main>
        </div>
      </div>
    </AuthWrapper>
  );
} 