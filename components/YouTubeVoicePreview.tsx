"use client";
import { useState, useEffect } from 'react';
// Fix the imports to avoid barrel optimization issues
import { Button } from '@/components/ui/button';
// Import icons individually instead of using barrel imports
import AlertCircle from 'lucide-react/dist/esm/icons/alert-circle';
import Pause from 'lucide-react/dist/esm/icons/pause';
import Volume2 from 'lucide-react/dist/esm/icons/volume-2';

interface YouTubeVoicePreviewProps {
  content: string;
}

export function YouTubeVoicePreview({ content }: YouTubeVoicePreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState("en-US-male");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  const [supported, setSupported] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if speech synthesis is supported
    if (typeof window !== 'undefined') {
      try {
        if (!('speechSynthesis' in window)) {
          console.log("Speech synthesis not supported");
          setSupported(false);
          return;
        }
        
        // Initialize voices
        const loadVoices = () => {
          try {
            const availableVoices = window.speechSynthesis.getVoices();
            if (availableVoices && availableVoices.length > 0) {
              setVoices(availableVoices);
            }
          } catch (err) {
            console.error("Error loading voices:", err);
            setError("Could not load voice options");
          }
        };

        loadVoices();
        
        // Chrome loads voices asynchronously
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
          window.speechSynthesis.onvoiceschanged = loadVoices;
        }

        // Cleanup
        return () => {
          try {
            if (window.speechSynthesis.speaking) {
              window.speechSynthesis.cancel();
            }
          } catch (err) {
            console.error("Error during cleanup:", err);
          }
        };
      } catch (err) {
        console.error("Error initializing speech synthesis:", err);
        setSupported(false);
      }
    }
  }, []);

  const playTextToSpeech = () => {
    if (!supported) {
      setError("Speech synthesis is not supported in your browser");
      return;
    }

    try {
      // Cancel any ongoing speech
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        return;
      }

      // Clean the content - remove any markdown or special formatting
      const cleanedContent = content
        .replace(/\[HOOK\]|\[MAIN CONTENT\]|\[CALL TO ACTION\]/g, '')
        .replace(/\[.*?\]/g, '')
        .trim();

      const newUtterance = new SpeechSynthesisUtterance(cleanedContent);
      
      // Set selected voice
      if (voices.length > 0) {
        const selectedVoiceObj = voices.find(v => v.name === selectedVoice);
        if (selectedVoiceObj) {
          newUtterance.voice = selectedVoiceObj;
        }
      }

      // Speech events
      newUtterance.onstart = () => setIsPlaying(true);
      newUtterance.onend = () => setIsPlaying(false);
      newUtterance.onerror = (e) => {
        console.error("Speech synthesis error:", e);
        setIsPlaying(false);
        setError("Error playing audio. Try again.");
      };

      setUtterance(newUtterance);
      window.speechSynthesis.speak(newUtterance);
    } catch (err) {
      console.error("Error in text-to-speech:", err);
      setError("Could not play audio. Your browser may not support this feature.");
    }
  };

  // If speech synthesis is not supported, show a simplified UI
  if (!supported) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg mt-4">
        <div className="flex items-center text-amber-400 mb-2">
          <AlertCircle className="h-4 w-4 mr-2" />
          <h3 className="font-medium">Voice Preview Not Available</h3>
        </div>
        <p className="text-gray-400 text-sm">
          Your browser doesn't support text-to-speech functionality. Try using Chrome or Edge on desktop for this feature.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg mt-4">
      <h3 className="text-white font-medium mb-3">YouTube Voice Preview</h3>
      
      {error && (
        <div className="mb-3 p-2 bg-red-900/30 border border-red-700 rounded text-red-300 text-sm flex items-center">
          <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label className="text-xs text-gray-400 mb-1 block">Select Voice Style:</label>
          <select 
            value={selectedVoice} 
            onChange={(e) => {
              setSelectedVoice(e.target.value);
              setError(null); // Clear any errors when changing voice
            }}
            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm text-white"
          >
            {voices.length > 0 ? (
              voices.map(voice => (
                <option key={voice.name} value={voice.name}>
                  {voice.name} ({voice.lang})
                </option>
              ))
            ) : (
              <option value="default">Default Voice</option>
            )}
          </select>
        </div>
        
        <div className="flex items-end">
          <Button 
            onClick={() => {
              setError(null); // Clear any previous errors
              playTextToSpeech();
            }}
            className={`${isPlaying ? 'bg-red-600 hover:bg-red-700' : 'bg-red-600 hover:bg-red-700'} text-white px-4 py-2`}
          >
            {isPlaying ? (
              <>
                <Pause className="h-4 w-4 mr-2" />
                Stop
              </>
            ) : (
              <>
                <Volume2 className="h-4 w-4 mr-2" />
                Preview Voice
              </>
            )}
          </Button>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-gray-400">
        Voice preview lets you hear how your script sounds when read aloud.
      </div>
    </div>
  );
} 