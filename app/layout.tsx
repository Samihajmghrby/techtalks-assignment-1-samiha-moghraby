import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TechTalks — Developer Community Platform",
    template: "%s · TechTalks",
  },
  description:
    "Browse developer communities, explore topics and read what other developers are working on.",
};

/**
 * Root layout. Navbar and Footer live here, so every route in the app gets
 * them without any page having to render them itself.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>

        <Navbar />

        <div id="content" className="flex-1">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
