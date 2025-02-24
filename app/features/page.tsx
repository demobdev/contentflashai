import { Navbar } from "@/components/Navbar";
import { 
  Zap, 
  BarChart3, 
  Globe, 
  MessageSquare, 
  Clock, 
  Shield,
  Sparkles,
  Brain,
  History,
  RefreshCw,
  Settings,
  Share2,
  Target,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FeaturesPage() {
  const mainFeatures = [
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

  const additionalFeatures = [
    {
      icon: <Brain className="w-6 h-6 text-pink-500" />,
      title: "Smart Learning",
      description: "AI learns from your style and improves over time"
    },
    {
      icon: <History className="w-6 h-6 text-orange-500" />,
      title: "Content History",
      description: "Access and reuse your past generated content"
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-cyan-500" />,
      title: "Unlimited Regeneration",
      description: "Not happy? Regenerate until perfect"
    },
    {
      icon: <Settings className="w-6 h-6 text-violet-500" />,
      title: "Customizable Settings",
      description: "Adjust tone, length, and style"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        <div className="container mx-auto px-4 py-24 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Features that Power Your Content
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Everything you need to create engaging social media content at scale
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/generate">Try It Free</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Features Grid */}
      <main className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-900/50"
            >
              <div className="mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-semibold mb-4">{feature.title}</h2>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-16">More Powerful Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-colors"
              >
                <div className="flex items-center mb-3">
                  {feature.icon}
                  <h3 className="text-lg font-semibold ml-2">{feature.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-16">Trusted by Content Creators</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-900/30">
              <div className="text-4xl font-bold text-blue-500 mb-2">1M+</div>
              <div className="text-gray-400">Posts Generated</div>
            </div>
            <div className="p-6 rounded-lg bg-gray-900/30">
              <div className="text-4xl font-bold text-green-500 mb-2">10K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="p-6 rounded-lg bg-gray-900/30">
              <div className="text-4xl font-bold text-purple-500 mb-2">99%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Content?</h2>
          <p className="text-xl mb-8 text-gray-200">Start creating engaging content in minutes</p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link href="/generate">Get Started Now</Link>
          </Button>
        </div>
      </main>
    </div>
  );
} 