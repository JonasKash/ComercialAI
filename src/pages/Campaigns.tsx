import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import TopHeader from '@/components/dashboard/TopHeader';
import AuthWrapper from '@/components/auth/AuthWrapper';
import CampaignsContent from '@/components/dashboard/sections/CampaignsContent';

export default function Campaigns() {
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
            title="Campanhas"
          />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <CampaignsContent />
          </main>
        </div>
      </div>
    </AuthWrapper>
  );
} 