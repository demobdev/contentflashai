import { Sparkles } from "lucide-react";

interface TikTokMockProps {
  content: string;
}

export const TikTokMock = ({ content }: TikTokMockProps) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden border border-gray-800 max-w-sm mx-auto">
      {/* TikTok Header */}
      <div className="bg-black p-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-white text-xs">CF</span>
          </div>
          <div className="ml-2">
            <p className="text-white text-sm font-semibold">ContentFlash</p>
            <p className="text-gray-400 text-xs">TikTok Script</p>
          </div>
        </div>
        <div className="text-gray-400">
          <Sparkles size={18} />
        </div>
      </div>
      
      {/* TikTok Video Area (mock) */}
      <div className="bg-gray-900 aspect-[9/16] w-full relative">
        <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-50">
          <div className="w-3/4">
            <p className="text-white text-sm mb-4 font-semibold">Script Preview:</p>
            <div className="text-xs text-gray-200 max-h-52 overflow-y-auto">
              {content.split('\n').map((line, i) => (
                <p key={i} className="mb-2">{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* TikTok Action Bar */}
      <div className="bg-black p-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="text-white">❤️</div>
            <p className="text-white text-xs mt-1">123K</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white">💬</div>
            <p className="text-white text-xs mt-1">4.5K</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white">↪️</div>
            <p className="text-white text-xs mt-1">78.2K</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white">⤴️</div>
            <p className="text-white text-xs mt-1">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 