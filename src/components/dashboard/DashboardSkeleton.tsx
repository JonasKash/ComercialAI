
import React from 'react';

export default function DashboardSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Welcome Section Skeleton */}
      <div className="h-32 bg-gray-200 rounded-lg"></div>
      
      {/* Metrics Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
        ))}
      </div>
      
      {/* Chart Skeleton */}
      <div className="h-96 bg-gray-200 rounded-lg"></div>
      
      {/* Two Column Section Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-80 bg-gray-200 rounded-lg"></div>
        <div className="h-80 bg-gray-200 rounded-lg"></div>
      </div>
      
      {/* Campaigns Skeleton */}
      <div className="h-64 bg-gray-200 rounded-lg"></div>
      
      {/* Learning Resources Skeleton */}
      <div className="h-48 bg-gray-200 rounded-lg"></div>
    </div>
  );
}
