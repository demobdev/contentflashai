import { formatDistanceToNow } from "date-fns";
import { Heart, MessageCircle, Repeat, Share } from "lucide-react";

interface TwitterMockProps {
  tweets: string[];
}

export const TwitterMock = ({ tweets }: TwitterMockProps) => {
  // Guard against undefined tweets
  if (!tweets || !Array.isArray(tweets)) {
    return <div className="text-gray-400 p-4">No tweets to display</div>;
  }
  
  return (
    <div className="bg-black text-white rounded-xl overflow-hidden max-w-lg border border-gray-800">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-blue-400 mr-3"></div>
          <div>
            <p className="font-bold">User Name</p>
            <p className="text-gray-500">@username</p>
          </div>
        </div>
      </div>
      {tweets.map((tweet, index) => (
        <div key={index} className="p-4 border-b border-gray-800">
          <p className="mb-3">{tweet}</p>
          <div className="flex justify-between text-gray-500 text-sm">
            <div className="flex items-center">
              <MessageCircle className="h-4 w-4 mr-1" />
              <span>{Math.floor(Math.random() * 100)}</span>
            </div>
            <div className="flex items-center">
              <Repeat className="h-4 w-4 mr-1" />
              <span>{Math.floor(Math.random() * 50)}</span>
            </div>
            <div className="flex items-center">
              <Heart className="h-4 w-4 mr-1" />
              <span>{Math.floor(Math.random() * 500)}</span>
            </div>
            <div className="flex items-center">
              <Share className="h-4 w-4 mr-1" />
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            {formatDistanceToNow(new Date())} ago
          </div>
        </div>
      ))}
    </div>
  );
};
