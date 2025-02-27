"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import CountUp from 'react-countup';

// Sample data - replace with your actual data fetching logic
const performanceData = [
  { name: 'Mon', posts: 4, engagement: 120 },
  { name: 'Tue', posts: 3, engagement: 98 },
  { name: 'Wed', posts: 5, engagement: 135 },
  { name: 'Thu', posts: 2, engagement: 85 },
  { name: 'Fri', posts: 6, engagement: 162 },
  { name: 'Sat', posts: 1, engagement: 42 },
  { name: 'Sun', posts: 3, engagement: 87 },
];

const growthData = [
  { month: 'Jan', followers: 1200 },
  { month: 'Feb', followers: 1350 },
  { month: 'Mar', followers: 1500 },
  { month: 'Apr', followers: 1750 },
  { month: 'May', followers: 2100 },
  { month: 'Jun', followers: 2400 },
];

export default function AnalyticsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1 px-4 py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8">Content Analytics</h1>
          
          {/* Account Info - Using dark theme instead of white */}
          <div className="bg-gray-800 shadow-md rounded-lg p-6 mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">Your Account</h2>
            <p className="text-lg mb-2 text-gray-300">Welcome, [User]!</p>
            <p className="text-xl font-bold text-white">Available Tokens: {isLoading ? '-' : '250'}</p>
          </div>
          
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-gray-400 mb-2">Total Posts</h3>
              <div className="text-3xl font-bold">
                {isLoading ? (
                  <div className="h-8 w-20 bg-gray-700 animate-pulse rounded"></div>
                ) : (
                  <CountUp end={124} duration={2.5} />
                )}
              </div>
              <p className="text-green-500 mt-2">↑ 12% from last month</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-gray-400 mb-2">Engagement Rate</h3>
              <div className="text-3xl font-bold">
                {isLoading ? (
                  <div className="h-8 w-20 bg-gray-700 animate-pulse rounded"></div>
                ) : (
                  <CountUp end={4.7} duration={2.5} decimals={1} suffix="%" />
                )}
              </div>
              <p className="text-green-500 mt-2">↑ 0.8% from last month</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-gray-400 mb-2">Audience Growth</h3>
              <div className="text-3xl font-bold">
                {isLoading ? (
                  <div className="h-8 w-20 bg-gray-700 animate-pulse rounded"></div>
                ) : (
                  <CountUp end={2400} duration={2.5} />
                )}
              </div>
              <p className="text-green-500 mt-2">↑ 300 new followers</p>
            </div>
          </div>
          
          {/* Performance Chart */}
          <div className="bg-gray-800 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold mb-6">Weekly Performance</h2>
            {isLoading ? (
              <div className="h-80 w-full bg-gray-700 animate-pulse rounded"></div>
            ) : (
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={performanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#333', 
                      border: 'none',
                      borderRadius: '4px',
                      color: '#fff'
                    }} 
                  />
                  <Legend />
                  <Bar dataKey="posts" name="Posts Created" fill="#3b82f6" />
                  <Bar dataKey="engagement" name="Engagement" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
          
          {/* Growth Chart */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Audience Growth</h2>
            {isLoading ? (
              <div className="h-80 w-full bg-gray-700 animate-pulse rounded"></div>
            ) : (
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={growthData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="month" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#333', 
                      border: 'none',
                      borderRadius: '4px',
                      color: '#fff'
                    }} 
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="followers" 
                    name="Followers" 
                    stroke="#10b981" 
                    activeDot={{ r: 8 }} 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 