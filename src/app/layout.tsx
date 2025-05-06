import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "UC San Diego Egyptian Student Association",
  description: "Official website of the UC San Diego Egyptian Student Association. Join us in celebrating Egyptian culture and heritage at UCSD.",
  keywords: ["UCSD", "Egyptian", "Student Association", "ESA", "UC San Diego", "Egypt"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
