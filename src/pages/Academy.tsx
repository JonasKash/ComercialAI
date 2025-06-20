import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import TopHeader from '@/components/dashboard/TopHeader';
import AuthWrapper from '@/components/auth/AuthWrapper';
import AcademyContent from '@/components/dashboard/sections/AcademyContent';

export default function Academy() {
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
            title="Academy"
          />
          
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <AcademyContent />
          </main>
        </div>
      </div>
    </AuthWrapper>
  );
} 