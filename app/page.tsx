import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  ArrowRightIcon,
  SparklesIcon,
  ZapIcon,
  RocketIcon,
  StarIcon,
  BrainCircuitIcon,
  TimerIcon,
  TrendingUpIcon,
  MessageSquareIcon,
} from "lucide-react"
import { SignUpButton } from "@clerk/nextjs"
import { Navbar } from "@/components/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-gray-100">
      <Navbar />

      {/* Hero Section with Gradient Mesh Background */}
      <div className="relative isolate pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <main className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
          {/* Hero Content */}
          <div className="text-center mx-auto max-w-4xl">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                New: Multi-platform AI Generation{' '}
                <Link href="/features" className="font-semibold text-indigo-400">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Learn more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-8">
              Create Engaging Social Content with AI
            </h1>
            
            <p className="text-lg leading-8 text-gray-300 mb-10">
              Transform your social media presence with AI-powered content generation. 
              Create compelling posts for Twitter, Instagram, and LinkedIn in seconds.
            </p>

            <div className="flex gap-x-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-8"
              >
                <Link href="/generate">
                  Start Creating <SparklesIcon className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                <Link href="#demo">Watch Demo</Link>
              </Button>
            </div>
          </div>

          {/* Platform Icons */}
          <div className="mt-20 flex justify-center gap-8">
            <TwitterIcon className="h-8 w-8 text-gray-400 hover:text-blue-400 transition-colors" />
            <InstagramIcon className="h-8 w-8 text-gray-400 hover:text-pink-400 transition-colors" />
            <LinkedinIcon className="h-8 w-8 text-gray-400 hover:text-blue-600 transition-colors" />
          </div>

          {/* Features Grid */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to create amazing content
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Powerful features to help you generate, manage, and optimize your social media content
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-7xl">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "AI-Powered Generation",
                    description: "Advanced AI algorithms create engaging, platform-specific content",
                    icon: <BrainCircuitIcon className="h-6 w-6 text-indigo-400" />,
                  },
                  {
                    title: "Quick Turnaround",
                    description: "Generate multiple posts in seconds, not hours",
                    icon: <TimerIcon className="h-6 w-6 text-purple-400" />,
                  },
                  {
                    title: "Performance Analytics",
                    description: "Track and optimize your content's performance",
                    icon: <TrendingUpIcon className="h-6 w-6 text-pink-400" />,
                  },
                  {
                    title: "Multi-Platform Support",
                    description: "Create content for Twitter, Instagram, and LinkedIn",
                    icon: <MessageSquareIcon className="h-6 w-6 text-indigo-400" />,
                  },
                  {
                    title: "Brand Voice Control",
                    description: "Maintain consistent tone and style across platforms",
                    icon: <StarIcon className="h-6 w-6 text-purple-400" />,
                  },
                  {
                    title: "Content Calendar",
                    description: "Schedule and organize your content strategy",
                    icon: <ZapIcon className="h-6 w-6 text-pink-400" />,
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:bg-gray-900/75 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      {feature.icon}
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                    </div>
                    <p className="mt-4 text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}