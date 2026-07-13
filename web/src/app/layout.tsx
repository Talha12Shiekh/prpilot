import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PRPilot - AI-Powered Pull Request Code Reviewer",
  description:
    "Automate your code reviews with ultra-fast static checks and smart AI suggestions from Google Gemini.",
  metadataBase: new URL("https://github.com/Talha12Shiekh/prpilot"),
  keywords: ["PRPilot", "GitHub Action", "code review", "static analysis", "AI review", "Gemini", "OpenAI"],
  authors: [{ name: "Talha Sheikh" }],
  openGraph: {
    title: "PRPilot - AI-Powered Pull Request Code Reviewer",
    description:
      "Automate your code reviews with ultra-fast static checks and smart AI suggestions from Google Gemini.",
    url: "https://github.com/Talha12Shiekh/prpilot",
    siteName: "PRPilot",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRPilot - AI-Powered Pull Request Code Reviewer",
    description:
      "Automate your code reviews with ultra-fast static checks and smart AI suggestions from Google Gemini.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
