interface YouTubeShortsMockProps {
  content: string;
}

export const YouTubeShortsMock = ({ content }: YouTubeShortsMockProps) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden border border-gray-800 max-w-sm mx-auto">
      {/* YouTube Shorts Video Area (mock) */}
      <div className="bg-gray-900 aspect-[9/16] w-full relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
                <span className="text-white text-xs">CF</span>
              </div>
              <p className="text-white text-sm ml-2 font-semibold">ContentFlash</p>
            </div>
            <p className="text-white text-sm mb-2 font-semibold">Script Preview:</p>
            <div className="text-xs text-gray-200 max-h-52 overflow-y-auto">
              {content.split('\n').map((line, i) => (
                <p key={i} className="mb-2">{line}</p>
              ))}
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