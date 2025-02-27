import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPosts, getBlogPost } from "@/utils/blog-data";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found | ContentFlash Blog",
      description: "The requested blog post could not be found."
    };
  }
  
  return {
    title: `${post.title} | ContentFlash Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
    }
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Make sure this is a proper React functional component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-500 mb-6 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Articles
          </Link>
          <div className="mb-6">
            <div className="flex flex-wrap items-center text-sm text-gray-400 mb-2 gap-2">
              <span>{post.date}</span>
              <span className="mx-2 hidden sm:inline">•</span>
              <span>{post.readTime}</span>
              <span className="mx-2 hidden sm:inline">•</span>
              <span className="bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded-full">{post.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">{post.excerpt}</p>
          </div>
          
          <div className="relative w-full h-96 mb-10">
            <Image 
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }} 
              className="blog-content"
            />
          </div>
          
          <div className="mt-10 pt-8 border-t border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {post.relatedPosts.map((relatedPost) => (
                <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug} className="group">
                  <div className="bg-gray-800 rounded-lg p-4 h-full hover:bg-gray-700 transition-colors">
                    <h4 className="font-semibold group-hover:text-blue-400 transition-colors">{relatedPost.title}</h4>
                    <p className="text-sm text-gray-400 mt-2">{relatedPost.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "image": [post.image],
                "datePublished": post.date,
                "author": {
                  "@type": "Person",
                  "name": "ContentFlash Team"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "ContentFlash",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://contentflash.app/logo.png"
                  }
                }
              })
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
} 