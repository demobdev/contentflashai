'use client';

import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import { getUserPoints } from '@/utils/db/actions';

const DashboardPage = () => {
  const { user } = useUser();
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const fetchPoints = async () => {
      if (user?.id) {
        const userPoints = await getUserPoints(user.id);
        setPoints(userPoints);
      }
    };

    fetchPoints();
  }, [user]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Account</h2>
        <p className="text-lg mb-2">Welcome, {user?.firstName}!</p>
        <p className="text-xl font-bold">Available Tokens: {points}</p>
      </div>
    </div>
  );
};

export default DashboardPage;