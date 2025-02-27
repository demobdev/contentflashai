import React, { useState, useEffect } from 'react';
import Joyride, { STATUS, Step } from 'react-joyride';

interface DashboardTourProps {
  isFirstVisit?: boolean;
}

const DashboardTour: React.FC<DashboardTourProps> = ({ isFirstVisit = false }) => {
  const [run, setRun] = useState(isFirstVisit);
  const [steps, setSteps] = useState<Step[]>([
    {
      target: '.dashboard-welcome',
      content: 'Welcome to ContentFlash AI! This is your content creation dashboard.',
      placement: 'center',
      disableBeacon: true,
    },
    {
      target: '.content-generator',
      content: 'Create new content by selecting your platform and entering a topic here.',
      placement: 'bottom',
    },
    {
      target: '.template-selector',
      content: 'Choose from our professionally designed templates to make your content stand out.',
      placement: 'right',
    },
    {
      target: '.tone-selector',
      content: 'Adjust the tone of your content to match your brand voice.',
      placement: 'top',
    },
    {
      target: '.content-history',
      content: 'All your previously generated content is saved here for easy access.',
      placement: 'top',
    },
    {
      target: '.settings-button',
      content: 'Customize your ContentFlash experience and manage your account settings.',
      placement: 'left',
    }
  ]);

  useEffect(() => {
    // Check localStorage to see if the user has completed the tour before
    const tourCompleted = localStorage.getItem('dashboardTourCompleted');
    if (tourCompleted === 'true') {
      setRun(false);
    }
  }, []);

  const handleJoyrideCallback = (data: any) => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      // Tour is complete, save to localStorage
      setRun(false);
      localStorage.setItem('dashboardTourCompleted', 'true');
    }
  };

  const startTour = () => {
    setRun(true);
  };

  return (
    <>
      <Joyride
        steps={steps}
        run={run}
        continuous
        showSkipButton
        showProgress
        styles={{
          options: {
            arrowColor: '#2563EB',
            backgroundColor: '#1F2937',
            primaryColor: '#2563EB',
            textColor: '#F9FAFB',
            overlayColor: 'rgba(0, 0, 0, 0.7)',
          },
          buttonNext: {
            backgroundColor: '#2563EB',
          },
          buttonBack: {
            color: '#9CA3AF',
          },
        }}
        callback={handleJoyrideCallback}
      />
      
      {!run && (
        <button 
          onClick={startTour}
          className="fixed bottom-4 right-4 bg-blue-600 text-white px-3 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          title="Take a tour"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </>
  );
};

export default DashboardTour; 