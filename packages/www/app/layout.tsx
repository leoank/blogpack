import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <link rel="icon" href="favicon.svg" type="image/svg" sizes="32x32" />
      <body>{children}</body>
    </html>
  );
}
