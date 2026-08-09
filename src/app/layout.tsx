import type { Metadata } from 'next';
import { Syne, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Anil Pradhan — Software Engineer | Backend & AI',
  description: 'Backend-focused Computer Science undergraduate specializing in AI-powered applications, scalable backend systems, and intelligent software using FastAPI, LangGraph, and RAG. CGPA 8.93. Open to internships in Bangalore, Hyderabad, Bhubaneswar.',
  keywords: ['Backend Engineer', 'AI Engineer', 'FastAPI', 'LangGraph', 'Distributed Systems', 'RAG', 'Python', 'Java', 'Anil Pradhan'],
  authors: [{ name: 'Anil Pradhan' }],
  creator: 'Anil Pradhan',
  publisher: 'Anil Pradhan',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anilpradhan.dev',
    title: 'Anil Pradhan — Software Engineer | Backend & AI',
    description: 'Backend-focused Computer Science undergraduate specializing in AI-powered applications, scalable backend systems, and intelligent software using FastAPI, LangGraph, and RAG.',
    siteName: 'Anil Pradhan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anil Pradhan — Software Engineer | Backend & AI',
    description: 'Backend-focused Computer Science undergraduate specializing in AI-powered applications, scalable backend systems, and intelligent software using FastAPI, LangGraph, and RAG.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
      </head>
      <body
        suppressHydrationWarning
        className={`${syne.variable} ${jetbrainsMono.variable} ${inter.variable} font-body bg-bg-primary text-text-primary antialiased overflow-x-hidden`}
      >
        <Navbar />
        <main id="main-content">{children}</main>
        <footer className="border-t border-border-primary py-8">
          <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4 text-text-muted text-sm font-body">
            <p>Built by Anil Pradhan · 2026 · ITER, SOA University, Bhubaneswar, Odisha</p>
            <div className="flex gap-6">
              <a href="https://github.com/Anil-Pradhan-web" className="link" aria-label="GitHub">GitHub</a>
              <a href="https://linkedin.com/in/anil-pradhan543" className="link" aria-label="LinkedIn">LinkedIn</a>
              <a href="mailto:anilpradhan9644@gmail.com" className="link" aria-label="Email">Email</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}