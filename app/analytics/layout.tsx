import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics | ContentFlash AI",
  description: "Track your content performance and audience growth with ContentFlash AI analytics.",
};

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 