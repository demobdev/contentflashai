interface FacebookMockProps {
  content: string;
  image?: File | null;
}

export const FacebookMock = ({ content, image }: FacebookMockProps) => {
  // Format date like "February 24 at 2:30 PM"
  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  }) + " at " + date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  // Generate image preview URL if image is provided
  const imageUrl = image ? URL.createObjectURL(image) : null;

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-300 max-w-xl mx-auto">
      {/* Facebook Post Header */}
      <div className="p-4">
        <div className="flex items-start">
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold">CF</span>
          </div>
          <div className="ml-3">
            <p className="text-black font-semibold">ContentFlash</p>
            <p className="text-gray-500 text-xs">{formattedDate} • 🌎</p>
          </div>
        </div>
        
        {/* Post Content */}
        <div className="mt-3 text-black">
          {content.split('\n').map((line, i) => (
            <p key={i} className={line ? "mb-2" : "mb-4"}>{line}</p>
          ))}
        </div>
      </div>
      
      {/* Image */}
      {imageUrl ? (
        <div className="w-full">
          <img 
            src={imageUrl} 
            alt="Post image" 
            className="w-full object-cover max-h-96" 
            onLoad={() => URL.revokeObjectURL(imageUrl)}
          />
        </div>
      ) : (
        <div className="bg-gray-200 h-56 w-full flex items-center justify-center">
          <p className="text-gray-500">Image Preview</p>
        </div>
      )}
      
      {/* Engagement Stats */}
      <div className="p-3 border-t border-gray-300">
        <div className="flex justify-between text-gray-500 text-sm">
          <div className="flex items-center">
            <span className="mr-1">👍❤️😮</span>
            <span>1.2K</span>
          </div>
          <div>
            <span>89 comments • 45 shares</span>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex border-t border-gray-300">
        <div className="flex-1 py-2 flex justify-center items-center text-gray-600 hover:bg-gray-100">
          <span className="mr-2">👍</span>
          <span>Like</span>
        </div>
        <div className="flex-1 py-2 flex justify-center items-center text-gray-600 hover:bg-gray-100">
          <span className="mr-2">💬</span>
          <span>Comment</span>
        </div>
        <div className="flex-1 py-2 flex justify-center items-center text-gray-600 hover:bg-gray-100">
          <span className="mr-2">↗️</span>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
}; 