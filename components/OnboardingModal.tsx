'use client';

import { useState, useEffect } from 'react';
import { X as XMarkIcon } from 'lucide-react';

interface OnboardingModalProps {
  isFirstVisit?: boolean;
  onComplete?: () => void;
}

export default function OnboardingModal({ isFirstVisit = false, onComplete }: OnboardingModalProps) {
  const [isOpen, setIsOpen] = useState(isFirstVisit);
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      title: "Welcome to ContentFlash AI!",
      description: "Let's get you set up to create amazing social media content in seconds.",
      image: "/images/onboarding-welcome.jpg",
    },
    {
      title: "Choose your content type",
      description: "Select the platform and format that best fits your needs.",
      image: "/images/onboarding-type.jpg",
    },
    {
      title: "Customize your brand voice",
      description: "Tell us about your brand to create content that sounds like you.",
      image: "/images/onboarding-voice.jpg",
    },
    {
      title: "Generate and share",
      description: "Create content and share it directly to your social platforms.",
      image: "/images/onboarding-share.jpg",
    }
  ];
  
  useEffect(() => {
    // Check if the user has seen the onboarding before
    const onboardingCompleted = localStorage.getItem('onboardingCompleted');
    if (onboardingCompleted === 'true') {
      setIsOpen(false);
    }
  }, []);
  
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeOnboarding();
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const completeOnboarding = () => {
    localStorage.setItem('onboardingCompleted', 'true');
    setIsOpen(false);
    if (onComplete) {
      onComplete();
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div className="relative w-full max-w-2xl bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
        <button 
          onClick={completeOnboarding}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative h-64 md:h-auto">
            {steps[currentStep].image && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-80" />
            )}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center text-white">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-white bg-opacity-20 rounded-full">
                  <span className="text-2xl font-bold">{currentStep + 1}/{steps.length}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">{steps[currentStep].title}</h2>
            <p className="mb-8 text-gray-300">{steps[currentStep].description}</p>
            
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`px-4 py-2 rounded ${
                  currentStep === 0 
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Previous
              </button>
              
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {currentStep < steps.length - 1 ? 'Next' : 'Get Started'}
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center bg-gray-800 p-4 space-x-2">
          {steps.map((_, index) => (
            <div 
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentStep ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 