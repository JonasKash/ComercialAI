import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import TopHeader from '@/components/dashboard/TopHeader';
import AuthWrapper from '@/components/auth/AuthWrapper';
import CRMContent from '@/components/dashboard/sections/CRMContent';

export default function CRM() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
#teste
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
            title="CRM"
          />
          
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <CRMContent />
          </main>
        </div>
      </div>
    </AuthWrapper>
  );
} 