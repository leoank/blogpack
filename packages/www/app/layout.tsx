import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ankur Kumar",
  description: "My personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} leading-7 bg-background text-foreground`}
    >
      <link rel="icon" href="favicon.svg" type="image/svg" sizes="32x32" />
      <body className="font-mono">{children}</body>
    </html>
  );
}
