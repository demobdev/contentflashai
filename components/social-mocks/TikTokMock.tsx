import { Sparkles } from "lucide-react";

interface TikTokMockProps {
  content: string;
}

export const TikTokMock = ({ content }: TikTokMockProps) => {
  // Process content to better format TikTok scripts
  const formatTikTokContent = (content: string) => {
    // Extract hook and script sections
    const hookMatch = content.match(/\[HOOK\](.*?)(?=\[SCRIPT\]|\[CALL TO ACTION\]|$)/s);
    const scriptMatch = content.match(/\[SCRIPT\](.*?)(?=\[CALL TO ACTION\]|$)/s);
    const ctaMatch = content.match(/\[CALL TO ACTION\](.*?)$/s);
    
    return (
      <>
        {hookMatch && (
          <div className="mb-3 border-l-2 border-red-500 pl-2">
            <p className="text-red-500 font-bold text-xs mb-1">HOOK:</p>
            <p>{hookMatch[1].trim()}</p>
          </div>
        )}
        
        {scriptMatch && (
          <div className="mb-3 border-l-2 border-blue-400 pl-2">
            <p className="text-blue-400 font-bold text-xs mb-1">SCRIPT:</p>
            <p>{scriptMatch[1].trim()}</p>
          </div>
        )}
        
        {ctaMatch && (
          <div className="border-l-2 border-green-400 pl-2">
            <p className="text-green-400 font-bold text-xs mb-1">CALL TO ACTION:</p>
            <p>{ctaMatch[1].trim()}</p>
          </div>
        )}
        
        {!hookMatch && !scriptMatch && !ctaMatch && (
          // If no sections found, display the original content
          content.split('\n').map((line, i) => (
            <p key={i} className="mb-2">{line}</p>
          ))
        )}
      </>
    );
  };

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
        <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-50 p-6">
          <div className="w-full h-full overflow-y-auto">
            <p className="text-white text-sm mb-4 font-semibold">Script Preview:</p>
            <div className="text-xs text-gray-200">
              {formatTikTokContent(content)}
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