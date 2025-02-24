"use client";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ZapIcon } from "lucide-react";

export function Navbar() {
  const { isSignedIn } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-black/50 backdrop-blur-sm">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <ZapIcon className="h-6 w-6 text-indigo-400" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Content Flash
            </span>
          </Link>
        </div>

        {/* Right side - Navigation and Auth */}
        <div className="flex items-center space-x-6">
          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
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
              <Link
                href="/generate"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Generate
              </Link>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button variant="ghost" className="text-gray-300 hover:text-white">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="bg-indigo-600 hover:bg-indigo-500">
                    Sign Up
                  </Button>
                </SignUpButton>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
