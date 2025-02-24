export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Features</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">AI-Powered Generation</h2>
            <p className="text-gray-400">
              Create engaging content for multiple platforms using advanced AI technology.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Multi-Platform Support</h2>
            <p className="text-gray-400">
              Generate content optimized for Twitter, Instagram, and LinkedIn.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Analytics & Insights</h2>
            <p className="text-gray-400">
              Track performance and optimize your content strategy.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 