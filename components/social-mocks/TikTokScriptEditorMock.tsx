import { Clock, Film, Music, Mic, PlayCircle, Save } from "lucide-react";
import { TikTokVoicePreview } from "@/components/TikTokVoicePreview";

interface TikTokScriptEditorMockProps {
  content: string;
}

export const TikTokScriptEditorMock = ({ content }: TikTokScriptEditorMockProps) => {
  // Process content sections
  const formatTikTokContent = () => {
    const hookMatch = content.match(/\[HOOK\](.*?)(?=\[SCRIPT\]|\[CALL TO ACTION\]|$)/s);
    const scriptMatch = content.match(/\[SCRIPT\](.*?)(?=\[CALL TO ACTION\]|$)/s);
    const ctaMatch = content.match(/\[CALL TO ACTION\](.*?)$/s);
    
    const sections = [];
    
    if (hookMatch) {
      sections.push({
        type: "HOOK",
        content: hookMatch[1].trim(),
        color: "text-red-400",
        duration: "0:00 - 0:05"
      });
    }
    
    if (scriptMatch) {
      sections.push({
        type: "SCRIPT",
        content: scriptMatch[1].trim(),
        color: "text-blue-400",
        duration: "0:05 - 0:25"
      });
    }
    
    if (ctaMatch) {
      sections.push({
        type: "CALL TO ACTION",
        content: ctaMatch[1].trim(),
        color: "text-green-400",
        duration: "0:25 - 0:30"
      });
    }
    
    // If no sections found, create a generic one
    if (sections.length === 0) {
      sections.push({
        type: "SCRIPT",
        content: content,
        color: "text-blue-400",
        duration: "0:00 - 0:30"
      });
    }
    
    return sections;
  };
  
  const contentSections = formatTikTokContent();

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 max-w-3xl mx-auto">
      {/* Header - Script Editor */}
      <div className="bg-gray-800 p-3 flex items-center justify-between">
        <div className="flex items-center">
          <Film className="h-5 w-5 text-red-400 mr-2" />
          <span className="text-white font-medium">TikTok Script Editor</span>
        </div>
        <div className="flex space-x-2">
          <Music className="h-4 w-4 text-gray-400" />
          <Mic className="h-4 w-4 text-gray-400" />
          <Save className="h-4 w-4 text-gray-400" />
        </div>
      </div>
      
      {/* Timeline Header */}
      <div className="bg-gray-800 p-2 flex items-center text-xs text-gray-400 border-t border-b border-gray-700">
        <Clock className="h-3 w-3 mr-1" />
        <span>Timeline</span>
        <span className="ml-auto">Duration: 0:30</span>
      </div>
      
      {/* Script Content */}
      <div className="p-4">
        {contentSections.map((section, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <div className="flex items-center mb-2">
              <div className={`${section.color} font-semibold text-sm flex items-center`}>
                <PlayCircle className="h-4 w-4 mr-1" />
                {section.type}
              </div>
              <div className="ml-auto text-xs text-gray-500">{section.duration}</div>
            </div>
            <div className="bg-gray-800 p-3 rounded border-l-2 border-gray-600 text-sm text-gray-300">
              {section.content}
            </div>
          </div>
        ))}
      </div>
      
      {/* Timeline Markers */}
      <div className="bg-gray-800 p-2 flex text-xs text-gray-500 border-t border-gray-700">
        <div className="w-1/6 border-r border-gray-700 relative">
          <div className="absolute top-0 right-0 h-full w-1 bg-red-500"></div>
          <span>0:00</span>
        </div>
        <div className="w-1/6 border-r border-gray-700 relative pl-1">
          <span>0:05</span>
        </div>
        <div className="w-1/6 border-r border-gray-700 relative pl-1">
          <span>0:10</span>
        </div>
        <div className="w-1/6 border-r border-gray-700 relative pl-1">
          <span>0:15</span>
        </div>
        <div className="w-1/6 border-r border-gray-700 relative pl-1">
          <span>0:20</span>
        </div>
        <div className="w-1/6 relative pl-1">
          <span>0:25</span>
        </div>
      </div>
      
      <TikTokVoicePreview content={content} />
    </div>
  );
}; 