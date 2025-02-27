"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  MessageSquare, 
  Video, 
  Share2, 
  ArrowRight, 
  Check, 
  Star,
  Camera
} from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import CountUp from 'react-countup';
import 'swiper/css';
import 'swiper/css/pagination';
import { getGeneratedContentHistory } from "@/utils/db/actions";
import { formatDistance } from "date-fns";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [scrolled, setScrolled] = useState(false);
  const [recentContent, setRecentContent] = useState<{
    id: number;
    content: string;
    prompt: string;
    contentType: string;
    createdAt: Date;
  }[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    async function fetchRecentContent() {
      if (isSignedIn && user?.id) {
        try {
          const history = await getGeneratedContentHistory(user.id);
          setRecentContent(history.slice(0, 3)); // Get only the 3 most recent items
        } catch (error) {
          console.error("Error fetching recent content:", error);
        }
      }
    }
    
    fetchRecentContent();
  }, [isSignedIn, user]);

  const platformList = [
    { name: "Twitter Threads", icon: Twitter, color: "text-blue-400", bg: "bg-blue-400/10", available: true },
    { name: "Instagram Captions", icon: Instagram, color: "text-pink-400", bg: "bg-pink-400/10", available: true },
    { name: "LinkedIn Posts", icon: Linkedin, color: "text-blue-600", bg: "bg-blue-600/10", available: true },
    { name: "TikTok Scripts", icon: MessageSquare, color: "text-red-400", bg: "bg-red-400/10", available: true },
    { name: "YouTube Shorts", icon: Video, color: "text-red-600", bg: "bg-red-600/10", available: true },
    { name: "Facebook Posts", icon: Share2, color: "text-blue-500", bg: "bg-blue-500/10", available: true },
  ];

  const testimonials = [
    {
      quote: "ContentFlash has transformed how our marketing team operates. We save hours every day on content creation.",
      author: "Sarah J.",
      role: "Marketing Director",
      company: "TechStart Inc."
    },
    {
      quote: "The AI-generated content is indistinguishable from our in-house writers. It's like having a content team on demand.",
      author: "Michael R.",
      role: "Social Media Manager",
      company: "Global Brands"
    },
    {
      quote: "We've seen a 35% increase in engagement since using ContentFlash for our social media strategy.",
      author: "Jessica T.",
      role: "Influencer & Content Creator",
      company: ""
    },
  ];

  const stats = [
    { value: 75, label: "Time Saved", suffix: "%" },
    { value: 3500, label: "Happy Users", suffix: "+" },
    { value: 15000, label: "Posts Generated", suffix: "+" },
    { value: 40, label: "Engagement Increase", suffix: "%" },
  ];

  const getTimeAgo = (date: Date): string => {
    return new Date(date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <Navbar />
      </div>

      {/* Hero Section with Animated Background */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-50">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 right-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500">
              AI-Powered Social Media Content Generator
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Create engaging content for Twitter, Instagram, LinkedIn, TikTok and more with cutting-edge AI technology. Save time and boost your social media presence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {isLoaded && isSignedIn ? (
                <Link href="/generate">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-xl text-lg font-medium transition-all shadow-lg hover:shadow-xl">
                    Start Creating
                  </Button>
                </Link>
              ) : (
                <SignInButton mode="modal">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-xl text-lg font-medium transition-all shadow-lg hover:shadow-xl">
                    Get Started
                  </Button>
                </SignInButton>
              )}
              <Link href="/features">
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800 px-8 py-6 rounded-xl text-lg font-medium transition-all">
                  Learn More
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-gray-500">No credit card required</p>
          </motion.div>
        </div>

        {/* Floating UI elements animation */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-1/4 -left-20"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, 5, 0]
            }} 
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut"
            }}
          >
            <div className="w-36 h-36 bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-800 shadow-xl"></div>
          </motion.div>
          <motion.div 
            className="absolute bottom-1/3 -right-16"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, -7, 0]
            }} 
            transition={{ 
              repeat: Infinity, 
              duration: 7, 
              ease: "easeInOut" 
            }}
          >
            <div className="w-44 h-44 bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-800 shadow-xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Platform Cards Section */}
      <section className="py-16 bg-gray-900/60 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Supercharge Your Social Media Presence
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Generate high-quality content for all major social platforms in seconds
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformList.map((platform, index) => (
              <motion.div
                key={platform.name}
                className={`p-6 rounded-xl backdrop-blur-sm bg-gray-800/40 border border-gray-700 shadow-lg hover:shadow-xl transition-all hover:border-gray-600 relative overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`absolute top-0 right-0 h-24 w-24 rounded-bl-full ${platform.bg} opacity-10`}></div>
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${platform.bg}`}>
                    <platform.icon className={`h-6 w-6 ${platform.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{platform.name}</h3>
                <p className="text-gray-400 mb-4">
                  {platform.name === "Twitter Threads" && "Generate compelling Twitter threads that engage your audience and boost your reach."}
                  {platform.name === "Instagram Captions" && "Create catchy captions for your Instagram posts that increase engagement and followers."}
                  {platform.name === "LinkedIn Posts" && "Craft professional content for your LinkedIn network to establish thought leadership."}
                  {platform.name === "TikTok Scripts" && "Create viral-worthy scripts that capture attention in the first few seconds."}
                  {platform.name === "YouTube Shorts" && "Generate short-form video scripts optimized for YouTube's algorithm."}
                  {platform.name === "Facebook Posts" && "Create engaging posts that drive comments, shares, and overall engagement."}
                </p>
                <div className="pt-2">
                  {platform.available ? (
                    <Link href="/generate" className="text-blue-400 font-medium flex items-center hover:text-blue-300 transition-colors">
                      Try now <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  ) : (
                    <span className="px-2 py-1 rounded text-xs font-medium bg-purple-600/30 text-purple-300">Coming Soon</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700 p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What Our Users Say
            </h2>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="testimonial-swiper pb-14"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full flex flex-col">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}
                      {testimonial.company && ` @ ${testimonial.company}`}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-30">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to revolutionize your social media strategy?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of content creators, marketers, and businesses who are saving time and boosting engagement with ContentFlash.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {isLoaded && isSignedIn ? (
                  <Link href="/generate">
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-xl text-lg font-medium transition-all shadow-lg hover:shadow-xl">
                      Generate Content Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                ) : (
                  <SignInButton mode="modal">
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-xl text-lg font-medium transition-all shadow-lg hover:shadow-xl">
                      Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </SignInButton>
                )}
              </div>
              <p className="mt-4 text-gray-500">No credit card required</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose Our AI Content Generator?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Save time and effort on content creation", desc: "Focus on strategy while our AI handles the content production." },
              { title: "Consistently produce high-quality posts", desc: "Maintain professional standards across all your social media channels." },
              { title: "Increase engagement across all platforms", desc: "Generate content that resonates with your specific audiences." },
              { title: "Stay ahead of social media trends", desc: "Our AI is continuously updated with the latest platform trends." },
              { title: "Customize content to match your brand voice", desc: "Maintain consistent brand messaging with customizable outputs." },
              { title: "Scale your social media presence effortlessly", desc: "Create content for multiple platforms in minutes, not hours." }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="mt-1 flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600/20 text-blue-400">
                    <Check className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full mb-4 inline-block">Roadmap</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Exciting Features Coming Soon
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We're constantly improving ContentFlash to help you create even better content with less effort.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Direct Social Posting", 
                desc: "Post directly to your social media accounts from our platform.",
                tag: "Coming Q3 2025"
              },
              { 
                title: "AI Voice-Over for Videos", 
                desc: "Convert your scripts to professional voice-overs for TikTok and YouTube.",
                tag: "Coming Q3 2025"
              },
              { 
                title: "Advanced Analytics", 
                desc: "Track performance and get insights about your generated content.",
                tag: "Coming Q4 2025"
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl backdrop-blur-sm bg-gray-800/40 border border-gray-700 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="absolute top-4 right-4 px-2 py-1 bg-purple-600/30 text-purple-300 text-xs font-medium rounded">
                  {feature.tag}
                </span>
                <h3 className="text-xl font-semibold mb-3 text-white mt-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {isSignedIn && recentContent && recentContent.length > 0 && (
        <section className="py-12 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Your Recent Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentContent.map((item) => (
                <div key={item.id} className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-blue-500 transition-colors group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      {item.contentType === 'twitter' && <Twitter className="h-5 w-5 text-blue-400" />}
                      {item.contentType === 'instagram' && <Camera className="h-5 w-5 text-pink-400" />}
                      {item.contentType === 'linkedin' && <Linkedin className="h-5 w-5 text-blue-600" />}
                      {item.contentType === 'tiktok' && <Video className="h-5 w-5 text-teal-400" />}
                      {item.contentType === 'youtube_shorts' && <Video className="h-5 w-5 text-red-500" />}
                      {item.contentType === 'facebook' && <MessageSquare className="h-5 w-5 text-blue-500" />}
                      <h3 className="text-lg font-medium ml-2 capitalize">{item.contentType.replace('_', ' ')}</h3>
                    </div>
                    <span className="text-xs text-gray-500">
                      {getTimeAgo(new Date(item.createdAt))}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{item.prompt}</p>
                  <Link href="/generate" className="text-blue-400 text-sm group-hover:text-blue-300 transition-colors inline-flex items-center">
                    View Content <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/generate" className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors">
                Generate new content <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
