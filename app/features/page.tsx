import { Navbar } from "@/components/Navbar";
import { 
  Zap, 
  BarChart3, 
  Globe, 
  MessageSquare, 
  Clock, 
  Shield 
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "AI-Powered Generation",
      description: "Create engaging content for multiple platforms using advanced AI technology."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "Multi-Platform Support",
      description: "Generate content optimized for Twitter, Instagram, and LinkedIn."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: "Analytics & Insights",
      description: "Track performance and optimize your content strategy."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-yellow-500" />,
      title: "Smart Suggestions",
      description: "Get AI-powered recommendations to improve your content."
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Time Saving",
      description: "Generate weeks worth of content in minutes."
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: "Secure & Private",
      description: "Your data is always protected and private."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">
          Powerful Features for Content Creation
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-semibold mb-4">{feature.title}</h2>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 