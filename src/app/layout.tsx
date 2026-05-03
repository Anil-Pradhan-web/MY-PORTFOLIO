import type { Metadata } from 'next';
import { Syne, JetBrains_Mono, Inter, Outfit, Calistoga } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const calistoga = Calistoga({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-calistoga',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Anil Pradhan — Full-Stack & AI Developer',
  description: 'B.Tech CSE student at SOA University. Building production-grade AI + Full-Stack systems. CGPA 9.11. Open to internships in Bangalore, Hyderabad, Bhubaneswar.',
  keywords: ['Anil Pradhan', 'Full Stack Developer', 'AI Developer', 'SOA University', 'Next.js', 'FastAPI', 'Python', 'Java'],
  openGraph: {
    title: 'Anil Pradhan — Full-Stack & AI Developer',
    description: 'Building production-grade AI + Full-Stack systems from Bhubaneswar, India.',
    url: 'https://anilpradhan.dev',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anil Pradhan — Full-Stack & AI Developer',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${jetbrainsMono.variable} ${inter.variable} ${outfit.variable} ${calistoga.variable} font-outfit bg-[#030014] text-zinc-300 antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
