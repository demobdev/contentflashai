import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | ContentFlash AI",
  description: "Choose the perfect pricing plan for your content creation needs. Start for free or upgrade for more powerful AI content generation features.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 