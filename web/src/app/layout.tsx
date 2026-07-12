import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRPilot - AI-Powered Pull Request Code Reviewer",
  description: "Automate your code reviews with ultra-fast static checks and smart AI suggestions from Google Gemini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
