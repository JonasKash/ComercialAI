
import React from 'react';
import WelcomeSection from './sections/WelcomeSection';
import MetricsCards from './sections/MetricsCards';
import PerformanceChart from './sections/PerformanceChart';
import RecentActivity from './sections/RecentActivity';
import AIRecommendations from './sections/AIRecommendations';
import ActiveCampaigns from './sections/ActiveCampaigns';
import LearningResources from './sections/LearningResources';

export default function DashboardContent() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <WelcomeSection />
      
      {/* Metrics Cards */}
      <MetricsCards />
      
      {/* Performance Chart */}
      <PerformanceChart />
      
      {/* Recent Activity and AI Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <AIRecommendations />
      </div>
      
      {/* Active Campaigns */}
      <ActiveCampaigns />
      
      {/* Learning Resources */}
      <LearningResources />
    </div>
  );
}
