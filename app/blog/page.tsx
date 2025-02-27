import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getBlogPosts } from "@/utils/blog-data";

export const metadata: Metadata = {
  title: "ContentFlash Blog | AI Content Creation Insights",
  description: "Expert tips, strategies, and insights for creating better social media content with AI.",
  openGraph: {
    title: "ContentFlash Blog | AI Content Creation Insights",
    description: "Expert tips, strategies, and insights for creating better social media content with AI.",
    images: ['/images/blog/blog-header.jpg'],
  }
};

export default function BlogPage() {
  const blogPosts = getBlogPosts();

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      <div className="h-16"></div>
      
      <div className="relative w-full h-64 md:h-80 mb-12 overflow-hidden mt-2">
        <Image 
          src="/images/blog/blog-banner.jpg"
          alt="ContentFlash Blog - AI Content Creation Insights"
          fill
          className="object-cover brightness-40 scale-105 hover:scale-110 transition-transform duration-700"
          style={{ top: '0', objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="w-16 h-1 bg-blue-500 mb-6 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            <span className="relative inline-block">
              Content<span className="text-blue-400">Flash</span> Blog
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed tracking-wide">
            Expert insights, guides, and strategies for 
            <span className="text-blue-300 font-medium ml-1">AI-powered content creation</span>
          </p>
          <div className="flex space-x-2 mt-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></span>
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-200"></span>
          </div>
        </div>
      </div>
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-500 mb-6 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold mb-12 text-center">ContentFlash Blog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                <article className="bg-gray-800 rounded-xl overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image 
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3 text-sm">
                      <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">{post.category}</span>
                      <span className="text-gray-400">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h2>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 