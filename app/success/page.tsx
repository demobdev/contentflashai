'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/generate');
    }, 3000);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-xl mb-8">Thank you for your purchase.</p>
      <p className="text-lg">Redirecting you to your dashboard...</p>
    </div>
  );
};

export default SuccessPage;