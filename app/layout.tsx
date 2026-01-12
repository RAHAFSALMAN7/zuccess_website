import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Zuccess — AI Solutions, Automation & Digital Innovation, Robotics",
  description:
    "Zuccess delivers next-generation AI automation, WhatsApp bots, robotics solutions, AI avatars, and enterprise digital systems across the Middle East.",
  keywords: [
    "AI Solutions",
    "Robotics",
    "WhatsApp Automation",
    "AI Avatar",
    "Middle East AI",
    "Pudu Robotics",
    "Automation",
    "Digital Transformation",
    "Zuccess",
  ],
  openGraph: {
    title: "Zuccess — Intelligent AI Solutions & Robotics",
    description:
      "Leading AI innovation including automation, robotics, WhatsApp bots, and 3D AI avatars for enterprises across UAE, KSA, and Palestine.",
    url: "https://zuccess.ai",
    siteName: "Zuccess Intelligent Systems",
    images: [
      {
        url: "/zuccessog.png",
        width: 1200,
        height: 630,
        alt: "Zuccess AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuccess — AI Automation & Robotics",
    description:
      "AI automation, WhatsApp bots, robotics, and intelligent enterprise systems.",
    images: ["/zuccessog.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zuccess Intelligent Systems",
              url: "https://zuccess.ai",
              logo: "https://zuccess.ai/zuccesslogo.png",
              sameAs: [
                "https://www.linkedin.com/company/zuccess",
                "https://www.instagram.com/zuccess.ai",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ajman",
                addressCountry: "UAE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@zuccess.ai",
                telephone: "+971503294644",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        {children}

        {/* ✅ Chat Widget — يعوّض main.js */}
        <Script
          src="/chat-widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
