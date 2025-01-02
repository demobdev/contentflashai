"use client";

import { useState } from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Calendar, Twitter, Instagram, Linkedin, Zap, Sparkles, TrendingUp, Users, MessageCircle, Repeat, ChevronRight } from "lucide-react";

const docsSections = [
  {
    title: "Getting Started",
    description: "Set up your account and create your first AI-generated content in minutes. Learn the basics of our platform and how to navigate through different features.",
    link: "/docs/getting-started",
    icon: Sparkles,
    examples: [
      "Account setup walkthrough",
      "Creating your first AI-generated post",
      "Customizing AI parameters for better results",
    ],
  },
  {
    title: "AI Calendar",
    description: "Master our AI-powered content calendar for efficient scheduling. Optimize your posting strategy and maintain a consistent online presence across all platforms.",
    link: "/docs/ai-calendar",
    icon: Calendar,
    examples: [
      "Setting up your content calendar",
      "Using AI to suggest optimal posting times",
      "Bulk scheduling and content recycling",
    ],
  },
  {
    title: "Twitter Threads",
    description: "Create engaging Twitter threads that captivate your audience and boost your reach. Learn how to craft compelling narratives and use hashtags effectively.",
    link: "/docs/twitter-threads",
    icon: Twitter,
    examples: [
      "Structuring a viral Twitter thread",
      "Incorporating trending topics into your threads",
      "Using AI to generate thread ideas and outlines",
    ],
  },
  {
    title: "Instagram Captions",
    description: "Generate Instagram captions that increase engagement and followers. Discover techniques for creating visually appealing posts that complement your images.",
    link: "/docs/instagram-captions",
    icon: Instagram,
    examples: [
      "Crafting captions that boost engagement",
      "Using AI to suggest relevant hashtags",
      "Creating story-driven captions for carousel posts",
    ],
  },
  {
    title: "LinkedIn Posts",
    description: "Craft professional LinkedIn content to establish thought leadership and grow your network. Learn how to share industry insights and showcase your expertise.",
    link: "/docs/linkedin-posts",
    icon: Linkedin,
    examples: [
      "Writing attention-grabbing headlines",
      "Sharing case studies and success stories",
      "Using AI to generate industry-specific content ideas",
    ],
  },
  {
    title: "API Reference",
    description: "Integrate our AI content generation into your applications with our comprehensive API. Access advanced features and automate your content creation workflow.",
    link: "/docs/api-reference",
    icon: Zap,
    examples: [
      "Authentication and rate limiting",
      "Endpoint documentation and usage examples",
      "Webhooks for real-time content generation updates",
    ],
  },
];

const features = [
  {
    title: "Time-Saving",
    description: "Reduce content creation time by up to 80% with our AI-powered tools. Spend more time engaging with your audience and less time brainstorming content ideas.",
    icon: TrendingUp,
  },
  {
    title: "Consistent Quality",
    description: "Maintain high-quality posts across all platforms with AI assistance. Ensure your content always meets your brand standards and resonates with your audience.",
    icon: Sparkles,
  },
  {
    title: "Increased Engagement",
    description: "Boost your social media engagement with tailored, AI-generated content. Our AI analyzes trending topics and your audience preferences to create highly engaging posts.",
    icon: Users,
  },
  {
    title: "Trend Analysis",
    description: "Stay ahead of social media trends with our AI's real-time insights. Capitalize on emerging topics and hashtags before they go viral.",
    icon: TrendingUp,
  },
  {
    title: "Brand Voice Customization",
    description: "Tailor AI-generated content to match your unique brand voice and style. Maintain consistency across all your social media channels while saving time.",
    icon: MessageCircle,
  },
  {
    title: "Scalable Solution",
    description: "Effortlessly scale your social media presence across multiple platforms. Manage multiple accounts and campaigns with ease using our AI-powered tools.",
    icon: Repeat,
  },
];

export default function DocsPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="container mx-auto px-8 py-20">
        <motion.h1 
          className="text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Content Flash AI Documentation
        </motion.h1>
        <motion.p 
          className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Learn how to leverage our AI-powered social media content generator to create engaging content for Twitter, Instagram, and LinkedIn with cutting-edge AI technology.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {docsSections.map((section, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border border-gray-200 bg-white shadow-md flex flex-col transition-all hover:border-gray-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <section.icon className="w-6 h-6 mr-2 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-600 mb-4 flex-grow">
                {section.description}
              </p>
              <div className="flex justify-between items-center">
                <Button
                  asChild
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Link href={section.link}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      Examples
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{section.title} Examples</DialogTitle>
                      <DialogDescription>
                        Explore these examples to get started with {section.title.toLowerCase()}.
                      </DialogDescription>
                    </DialogHeader>
                    <ul className="list-disc pl-6">
                      {section.examples.map((example, i) => (
                        <li key={i} className="text-gray-700 mb-2">{example}</li>
                      ))}
                    </ul>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Content Flash AI?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="p-6 rounded-lg border border-gray-200 bg-white shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <feature.icon className="w-6 h-6 mr-2 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Ready to revolutionize your social media strategy?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start creating AI-powered content today and take your social media presence to the next level.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <Button
              asChild
              className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-4"
            >
              <Link href="/generate">
                Generate Content Now
                <motion.div
                  className="ml-2 inline-block"
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
          <p className="mt-4 text-sm text-gray-500">No credit card required</p>
        </motion.div>
      </main>
    </div>
  );
}