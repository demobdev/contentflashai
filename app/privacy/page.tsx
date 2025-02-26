import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2>1. Introduction</h2>
            <p>
              ContentFlash ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, services, or applications (collectively, the "Service").
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>
              We may collect information about you in various ways, including:
            </p>
            <ul>
              <li>
                <strong>Personal Information:</strong> This includes information you provide to us directly, such as your name, email address, and billing information when you register for an account or subscribe to our Service.
              </li>
              <li>
                <strong>Content Information:</strong> When you use our Service to generate content, we collect the prompts you provide and the content that is generated.
              </li>
              <li>
                <strong>Usage Information:</strong> We collect information about how you use our Service, including your interactions with our website, features you use, and time spent on the Service.
              </li>
              <li>
                <strong>Device Information:</strong> We may collect information about the device you use to access our Service, including IP address, browser type, and operating system.
              </li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>
              We may use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>To provide, maintain, and improve our Service</li>
              <li>To process your transactions and manage your account</li>
              <li>To send you technical notices, updates, security alerts, and administrative messages</li>
              <li>To respond to your comments, questions, and customer service requests</li>
              <li>To develop new products and services</li>
              <li>To improve our AI models and content generation capabilities</li>
            </ul>
            
            <h2>4. Sharing Your Information</h2>
            <p>
              We may share your information in the following situations:
            </p>
            <ul>
              <li>
                <strong>With Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us.
              </li>
              <li>
                <strong>For Business Transfers:</strong> We may share your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may disclose your information for any other purpose with your consent.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
              </li>
            </ul>
            
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
            
            <h2>6. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your personal information. To exercise these rights, please contact us at privacy@contentflash.ai.
            </p>
            
            <h2>7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@contentflash.ai.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 