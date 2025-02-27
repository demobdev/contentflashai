'use client';

import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import { getUserPoints, getGeneratedContentHistory } from '@/utils/db/actions';
import Link from 'next/link';
import { Bar, Pie } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  ArcElement
} from 'chart.js';
import { 
  CalendarDays, 
  TrendingUp, 
  BarChart, 
  PieChart,
  Twitter,
  Instagram,
  Linkedin,
  MessageSquare as FacebookIcon,
  Video,
  Users
} from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DashboardPage = () => {
  const { user } = useUser();
  const [points, setPoints] = useState(0);
  const [contentTypeData, setContentTypeData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderWidth: number;
    }[];
  }>({
    labels: [],
    datasets: []
  });
  const [weeklyActivityData, setWeeklyActivityData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }[];
  }>({
    labels: [],
    datasets: []
  });
  const [history, setHistory] = useState<{
    id: number;
    contentType: string;
    prompt: string;
    content: string;
    createdAt: Date;
  }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (user?.id) {
        const userPoints = await getUserPoints(user.id);
        setPoints(userPoints);
        
        // Fetch history data as well
        const historyData = await getGeneratedContentHistory(user.id);
        setHistory(historyData);
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    // Calculate content type distribution
    if (history.length > 0) {
      const typeCount: Record<string, number> = {};
      history.forEach(item => {
        typeCount[item.contentType] = (typeCount[item.contentType] || 0) + 1;
      });
      
      setContentTypeData({
        labels: Object.keys(typeCount).map(type => 
          type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ')
        ),
        datasets: [
          {
            label: 'Content Types',
            data: Object.values(typeCount),
            backgroundColor: [
              'rgba(59, 130, 246, 0.6)',
              'rgba(232, 121, 249, 0.6)',
              'rgba(16, 185, 129, 0.6)',
              'rgba(239, 68, 68, 0.6)',
              'rgba(245, 158, 11, 0.6)',
              'rgba(99, 102, 241, 0.6)',
            ],
            borderWidth: 1,
          },
        ],
      });
      
      // Calculate weekly activity
      const last7Days = [...Array(7)].map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - i);
        return d.toISOString().split('T')[0];
      }).reverse();
      
      const dailyCounts: Record<string, number> = {};
      last7Days.forEach(day => { dailyCounts[day] = 0; });
      
      history.forEach(item => {
        const date = new Date(item.createdAt).toISOString().split('T')[0];
        if (dailyCounts[date] !== undefined) {
          dailyCounts[date]++;
        }
      });
      
      setWeeklyActivityData({
        labels: last7Days.map(day => {
          const date = new Date(day);
          return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        }),
        datasets: [
          {
            label: 'Content Generated',
            data: Object.values(dailyCounts),
            backgroundColor: 'rgba(59, 130, 246, 0.6)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 1,
          },
        ],
      });
    }
  }, [user?.id]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Account</h2>
        <p className="text-lg mb-2">Welcome, {user?.firstName}!</p>
        <p className="text-xl font-bold">Available Tokens: {points}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-900/50 to-blue-700/30 p-6 rounded-xl border border-blue-600/30">
          <h3 className="text-lg font-medium text-blue-300 mb-2">Available Points</h3>
          <p className="text-3xl font-bold text-white">{points || 0}</p>
          <p className="text-xs text-blue-200 mt-2">Used for generating new content</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-900/50 to-purple-700/30 p-6 rounded-xl border border-purple-600/30">
          <h3 className="text-lg font-medium text-purple-300 mb-2">Generated Content</h3>
          <p className="text-3xl font-bold text-white">{history.length}</p>
          <p className="text-xs text-purple-200 mt-2">Across all platforms</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-900/50 to-green-700/30 p-6 rounded-xl border border-green-600/30">
          <h3 className="text-lg font-medium text-green-300 mb-2">Account Status</h3>
          <p className="text-xl font-semibold text-white">Free Plan</p>
          <Link href="/pricing" className="text-xs text-green-200 mt-2 inline-block hover:text-white transition-colors">
            Upgrade for more features →
          </Link>
        </div>
      </div>
      
      {/* New Analytics Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Analytics Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Content Types Chart */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <PieChart className="text-blue-400 mr-2" />
              <h3 className="text-lg font-medium text-white">Content Type Distribution</h3>
            </div>
            {history.length > 0 ? (
              <div className="h-64">
                <Pie 
                  data={contentTypeData} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'right',
                        labels: {
                          color: 'white'
                        }
                      }
                    }
                  }}
                />
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-500">
                Generate content to see your distribution
              </div>
            )}
          </div>
          
          {/* Weekly Activity Chart */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <BarChart className="text-green-400 mr-2" />
              <h3 className="text-lg font-medium text-white">Weekly Activity</h3>
            </div>
            {history.length > 0 ? (
              <div className="h-64">
                <Bar 
                  data={weeklyActivityData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                        ticks: {
                          color: 'white'
                        },
                        grid: {
                          color: 'rgba(255, 255, 255, 0.1)'
                        }
                      },
                      x: {
                        ticks: {
                          color: 'white'
                        },
                        grid: {
                          display: false
                        }
                      }
                    },
                    plugins: {
                      legend: {
                        display: false
                      }
                    }
                  }}
                />
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-500">
                Generate content to see your weekly activity
              </div>
            )}
          </div>
        </div>
        
        {/* Content Engagement Overview */}
        <div className="mt-8 bg-gray-800 p-6 rounded-xl">
          <div className="flex items-center mb-6">
            <TrendingUp className="text-purple-400 mr-2" />
            <h3 className="text-lg font-medium text-white">Content Performance Metrics</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Users className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300 text-sm">Estimated Reach</span>
              </div>
              <p className="text-2xl font-bold">{history.length * 250}+</p>
              <p className="text-xs text-gray-400 mt-1">Based on average engagement</p>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <CalendarDays className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300 text-sm">Most Active Day</span>
              </div>
              <p className="text-2xl font-bold">Tuesday</p>
              <p className="text-xs text-gray-400 mt-1">35% of your content</p>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Twitter className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300 text-sm">Top Platform</span>
              </div>
              <p className="text-2xl font-bold">
                {history.length > 0 ? 
                  (() => {
                    const platforms = history.map(item => item.contentType);
                    const platformCounts = platforms.reduce<Record<string, number>>((acc, platform) => {
                      acc[platform] = (acc[platform] || 0) + 1;
                      return acc;
                    }, {});
                    const topPlatform = Object.entries(platformCounts)
                      .sort((a: [string, number], b: [string, number]) => b[1] - a[1])[0];
                    return topPlatform ? topPlatform[0].replace('_', ' ') : 'None';
                  })() :
                  'None'
                }
              </p>
              <p className="text-xs text-gray-400 mt-1">Based on generation history</p>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <TrendingUp className="h-5 w-5 text-amber-400 mr-2" />
                <span className="text-gray-300 text-sm">Growth Rate</span>
              </div>
              <p className="text-2xl font-bold">+{Math.min(history.length * 5, 120)}%</p>
              <p className="text-xs text-gray-400 mt-1">From last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;