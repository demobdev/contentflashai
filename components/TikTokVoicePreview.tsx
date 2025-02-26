"use client";
import { useState, useEffect } from 'react';
import { VolumeUp, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TikTokVoicePreviewProps {
  content: string;
}

export function TikTokVoicePreview({ content }: TikTokVoicePreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState("en-US-female");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      // Initialize voices
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        if (availableVoices.length > 0) {
          setVoices(availableVoices);
        }
      };

      loadVoices();
      
      // Chrome loads voices asynchronously
      window.speechSynthesis.onvoiceschanged = loadVoices;

      // Cleanup
      return () => {
        if (window.speechSynthesis.speaking) {
          window.speechSynthesis.cancel();
        }
      };
    }
  }, []);

  const playTextToSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert("Sorry, your browser doesn't support text to speech!");
      return;
    }

    // Cancel any ongoing speech
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    const newUtterance = new SpeechSynthesisUtterance(content);
    
    // Set selected voice
    const selectedVoiceObj = voices.find(v => v.name === selectedVoice);
    if (selectedVoiceObj) {
      newUtterance.voice = selectedVoiceObj;
    }

    // Speech events
    newUtterance.onstart = () => setIsPlaying(true);
    newUtterance.onend = () => setIsPlaying(false);
    newUtterance.onerror = () => setIsPlaying(false);

    setUtterance(newUtterance);
    window.speechSynthesis.speak(newUtterance);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg mt-4">
      <h3 className="text-white font-medium mb-3">Voice Preview</h3>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label className="text-xs text-gray-400 mb-1 block">Select Voice:</label>
          <select 
            value={selectedVoice} 
            onChange={(e) => setSelectedVoice(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm text-white"
          >
            {voices.map(voice => (
              <option key={voice.name} value={voice.name}>
                {voice.name} ({voice.lang})
              </option>
            ))}
            {voices.length === 0 && (
              <option value="default">Default Voice</option>
            )}
          </select>
        </div>
        
        <div className="flex items-end">
          <Button 
            onClick={playTextToSpeech}
            className={`${isPlaying ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2`}
          >
            {isPlaying ? (
              <>
                <Pause className="h-4 w-4 mr-2" />
                Stop
              </>
            ) : (
              <>
                <VolumeUp className="h-4 w-4 mr-2" />
                Preview Voice
              </>
            )}
          </Button>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-gray-400">
        Voice preview uses your browser's speech synthesis capabilities. Voice quality may vary by browser.
      </div>
    </div>
  );
} 