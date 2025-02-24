import Link from "next/link"
import { TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Generate", href: "/generate" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
  ]

  return (
    <footer className="border-t border-gray-800 bg-black/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Content Flash
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              AI-powered content generation for modern creators
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://twitter.com" className="text-gray-400 hover:text-gray-300">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-gray-300">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-300">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-200">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} Content Flash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 