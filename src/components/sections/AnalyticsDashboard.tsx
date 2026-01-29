// components/sections/AnalyticsDashboard.tsx
import React, { useState, useEffect } from 'react';
import { Users, Eye, Clock, TrendingUp } from 'lucide-react';

const AnalyticsDashboard: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState({
    totalVisitors: 0,
    currentVisitors: 0,
    pageViews: 0,
    averageTime: 0
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This would typically fetch from your backend or Google Analytics API
    // For now, we'll simulate data with localStorage
    const simulateAnalytics = () => {
      setIsLoading(true);
      
      setTimeout(() => {
        // Simulated data - in real implementation, fetch from GA API
        const storedData = localStorage.getItem('voloveAnalytics');
        const defaultData = {
          totalVisitors: 1542,
          currentVisitors: 12,
          pageViews: 3894,
          averageTime: 3.2
        };
        
        const data = storedData ? JSON.parse(storedData) : defaultData;
        
        // Increment for demo purposes
        data.totalVisitors += Math.floor(Math.random() * 5);
        data.currentVisitors = Math.floor(Math.random() * 20) + 5;
        data.pageViews += Math.floor(Math.random() * 10);
        
        setAnalyticsData(data);
        localStorage.setItem('voloveAnalytics', JSON.stringify(data));
        setIsLoading(false);
      }, 1000);
    };

    simulateAnalytics();
    const interval = setInterval(simulateAnalytics, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: 'Total Visitors',
      value: analyticsData.totalVisitors.toLocaleString(),
      icon: Users,
      color: 'text-blue-500'
    },
    {
      label: 'Live Visitors',
      value: analyticsData.currentVisitors.toString(),
      icon: Eye,
      color: 'text-green-500'
    },
    {
      label: 'Page Views',
      value: analyticsData.pageViews.toLocaleString(),
      icon: TrendingUp,
      color: 'text-purple-500'
    },
    {
      label: 'Avg. Time (mins)',
      value: analyticsData.averageTime.toFixed(1),
      icon: Clock,
      color: 'text-orange-500'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
            Website Analytics
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Real-time insights into our growing community
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">
                          {stat.label}
                        </p>
                        <p className="text-2xl font-bold text-navy">
                          {stat.value}
                        </p>
                      </div>
                      <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center text-sm text-green-600">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span>+2.5% today</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Visitors Indicator */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-navy mb-2">Live Activity</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                      <span className="text-sm text-gray-600">
                        {analyticsData.currentVisitors} people currently browsing
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Last updated</p>
                  <p className="text-sm font-medium text-navy">
                    {new Date().toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AnalyticsDashboard;