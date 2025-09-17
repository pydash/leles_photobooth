import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PhotoProvider } from "@/context/PhotoContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lele's Photobooth",
  description: "An interactive photobooth website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <PhotoProvider>{children}</PhotoProvider>
      </body>
    </html>
  );
}
