// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header"; 
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"]
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "Terreia Spa Sanctuaire | Art du Soin & Sérénité Botanique",
  description: "Une oasis sensorielle où s'unissent l'eau thermale millénaire, les plantes rares de Madagascar et l'harmonie des gestes holistiques ancestraux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-background text-on-surface antialiased">
        <Header />
        {/* On retire pt-28. Le contenu va maintenant commencer tout en haut, sous le header */}
        <main className="w-full flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}