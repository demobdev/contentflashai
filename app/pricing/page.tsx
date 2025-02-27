"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Check as CheckIcon } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Head from "next/head";

// Store metadata values as constants instead of exporting metadata
const pageTitle = "Pricing | ContentFlash AI";
const pageDescription = "Choose the perfect pricing plan for your content creation needs. Start for free or upgrade for more powerful AI content generation features.";

const features = {
  basic: [
    "5 social media posts per month",
    "Basic AI content generation",
    "Standard templates",
    "Email support",
    "Content history for 30 days"
  ],
  pro: [
    "25 social media posts per month",
    "Advanced AI content generation",
    "All templates + custom templates",
    "Priority email support",
    "Content history for 90 days",
    "Analytics dashboard",
    "Custom brand voice settings"
  ],
  enterprise: [
    "Unlimited social media posts",
    "Premium AI content generation",
    "All templates + custom templates",
    "Dedicated account manager",
    "Unlimited content history",
    "Advanced analytics & reporting",
    "Team collaboration features",
    "API access",
    "Custom integrations"
  ]
};

// Preserve the Stripe configuration
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function PricingPage() {
  // Keep the Stripe checkout functionality
  const { userId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  // Set document title on component mount
  useEffect(() => {
    document.title = pageTitle;
  }, []);

  const handleSubscribe = async (priceId: string) => {
    try {
      setIsLoading(true);
      
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session");
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to start checkout process");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-300 mb-8">Choose the perfect plan for your content creation needs. All plans include our core AI technology.</p>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg shadow-lg inline-block">
              <p className="text-white font-medium">Save 20% with annual billing</p>
            </div>
          </div>
          
          {/* Pricing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 p-1 rounded-lg inline-flex">
              <button className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium">Monthly</button>
              <button className="px-6 py-2 rounded-md text-gray-300 font-medium">Yearly</button>
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Basic Plan */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Basic</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-gray-400">/mo</span>
                </div>
                <p className="text-gray-400 mb-6">Perfect for individuals just getting started with AI content creation.</p>
                <button
                  onClick={() => handleSubscribe("price_1QdLzPDIZtNhBePNSRZdpCOq")}
                  disabled={isLoading}
                  className="block text-center bg-white text-black font-bold py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors w-full disabled:opacity-70"
                >
                  {isLoading ? "Processing..." : "Get Started"}
                </button>
              </div>
              <div className="border-t border-gray-700 p-8">
                <ul className="space-y-4">
                  {features.basic.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Pro Plan - Highlighted */}
            <div className="bg-gradient-to-b from-blue-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg transform scale-105 relative transition-transform hover:scale-110 hover:shadow-2xl">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg font-medium">
                Most Popular
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-400">/mo</span>
                </div>
                <p className="text-gray-300 mb-6">For professionals and small teams creating content regularly.</p>
                <button
                  onClick={() => handleSubscribe("price_1QdM0mDIZtNhBePNi15kVpc3")}
                  disabled={isLoading}
                  className="block text-center bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors w-full disabled:opacity-70"
                >
                  {isLoading ? "Processing..." : "Choose Pro"}
                </button>
              </div>
              <div className="border-t border-gray-700 p-8">
                <ul className="space-y-4">
                  {features.pro.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$149</span>
                  <span className="text-gray-400">/mo</span>
                </div>
                <p className="text-gray-400 mb-6">For larger teams and agencies with advanced content needs.</p>
                <button
                  onClick={() => handleSubscribe("price_enterprise")}
                  disabled={isLoading}
                  className="block text-center bg-white text-black font-bold py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors w-full disabled:opacity-70"
                >
                  {isLoading ? "Processing..." : "Contact Sales"}
                </button>
              </div>
              <div className="border-t border-gray-700 p-8">
                <ul className="space-y-4">
                  {features.enterprise.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Can I change plans later?</h3>
                <p className="text-gray-300">Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes to your subscription will be applied immediately.</p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, PayPal, and for Enterprise customers, we also support invoicing.</p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Is there a free trial?</h3>
                <p className="text-gray-300">Yes! You can try ContentFlash for free with 3 content generations before choosing a plan.</p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How do the monthly content limits work?</h3>
                <p className="text-gray-300">Each plan comes with a specific number of AI-generated posts per month. These reset on your billing date. Unused generations don't roll over to the next month.</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-20 h-20 bg-gray-700 rounded-full mb-4 md:mb-0 md:mr-6"></div>
              <div>
                <p className="text-lg italic mb-4">"ContentFlash has completely transformed our social media strategy. We're creating better content in a fraction of the time, and our engagement metrics have improved by over 200%."</p>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-gray-400 text-sm">Marketing Director, TechStart Inc.</p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to transform your content creation?</h2>
            <Link href="/dashboard" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
              Start Creating Now
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
