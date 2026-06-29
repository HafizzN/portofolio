import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hafizul Hanif — Laravel Developer & Business Strategist",
  description:
    "3D neomorphic portfolio of Hafizul Hanif: 11× business simulation champion, Laravel developer, and digital business strategist from Universitas Negeri Padang.",
  keywords: [
    "Hafizul Hanif",
    "Laravel Developer",
    "Business Strategist",
    "MonsoonSIM",
    "Portfolio",
    "Bisnis Digital",
    "Universitas Negeri Padang",
  ],
  authors: [{ name: "Hafizul Hanif" }],
  openGraph: {
    title: "Hafizul Hanif — Laravel Developer & Business Strategist",
    description:
      "3D neomorphic portfolio · 11× champion · Laravel full-stack engineer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hafizul Hanif — Portfolio",
    description:
      "3D neomorphic portfolio · 11× champion · Laravel full-stack engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundColor: "var(--neo-bg)",
          color: "var(--neo-text)",
        }}
      >
        {children}
        <Toaster />
        <SonnerToaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "var(--neo-bg)",
              color: "var(--neo-text)",
              border: "1px solid var(--border)",
              boxShadow:
                "8px 8px 16px var(--neo-dark), -8px -8px 16px var(--neo-light)",
              borderRadius: "1rem",
            },
          }}
        />
      </body>
    </html>
  );
}
