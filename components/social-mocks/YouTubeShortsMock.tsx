interface YouTubeShortsMockProps {
  content: string;
}

export const YouTubeShortsMock = ({ content }: YouTubeShortsMockProps) => {
  // Process content to better format YouTube Shorts scripts
  const formatYouTubeContent = (content: string) => {
    // Extract sections (HOOK, MAIN CONTENT, CTA)
    const hookMatch = content.match(/\[HOOK\](.*?)(?=\[MAIN CONTENT\]|\[CALL TO ACTION\]|$)/s);
    const mainMatch = content.match(/\[MAIN CONTENT\](.*?)(?=\[CALL TO ACTION\]|$)/s);
    const ctaMatch = content.match(/\[CALL TO ACTION\](.*?)$/s);
    
    return (
      <>
        {hookMatch && (
          <div className="mb-3 border-l-2 border-red-500 pl-2">
            <p className="text-red-500 font-bold text-xs mb-1">HOOK:</p>
            <p>{hookMatch[1].trim()}</p>
          </div>
        )}
        
        {mainMatch && (
          <div className="mb-3 border-l-2 border-blue-400 pl-2">
            <p className="text-blue-400 font-bold text-xs mb-1">MAIN CONTENT:</p>
            <p>{mainMatch[1].trim()}</p>
          </div>
        )}
        
        {ctaMatch && (
          <div className="border-l-2 border-green-400 pl-2">
            <p className="text-green-400 font-bold text-xs mb-1">CALL TO ACTION:</p>
            <p>{ctaMatch[1].trim()}</p>
          </div>
        )}
        
        {!hookMatch && !mainMatch && !ctaMatch && (
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
      {/* YouTube Shorts Video Area (mock) */}
      <div className="bg-gray-900 aspect-[9/16] w-full relative">
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="w-full h-full overflow-y-auto">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
                <span className="text-white text-xs">CF</span>
              </div>
              <p className="text-white text-sm ml-2 font-semibold">ContentFlash</p>
            </div>
            <p className="text-white text-sm mb-2 font-semibold">Script Preview:</p>
            <div className="text-xs text-gray-200">
              {formatYouTubeContent(content)}
            </div>
          </div>
        </div>
        
        {/* YouTube Shorts overlay elements */}
        <div className="absolute bottom-4 right-2 flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center">
            <div className="text-white text-2xl">👍</div>
            <p className="text-white text-xs">45K</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white text-2xl">👎</div>
            <p className="text-white text-xs">Dislike</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white text-2xl">💬</div>
            <p className="text-white text-xs">2.3K</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white text-2xl">↗️</div>
            <p className="text-white text-xs">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 