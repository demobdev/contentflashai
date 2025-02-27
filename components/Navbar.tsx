"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";

export function Navbar() {
  const { isSignedIn } = useUser();
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and site name */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">
              Content<span className="text-blue-500">Flash</span>
            </span>
          </Link>

          {/* Navigation links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            {isSignedIn && (
              <>
                <Link
                  href="/generate"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Dashboard
                </Link>
              </>
            )}
            <div className="relative group">
              <span className="text-sm font-medium text-gray-500 px-3 py-2 rounded-md cursor-not-allowed flex items-center">
                Analytics
                <span className="ml-2 text-xs text-gray-400">(Coming Soon)</span>
              </span>
            </div>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center space-x-4">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <SignInButton mode="modal">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </SignInButton>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
