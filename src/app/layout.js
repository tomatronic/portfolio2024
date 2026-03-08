import "./globals.css";
import Navigation from './components/navigation';
import Footer from "./components/footer";
import PageBackground from './components/PageBackground';
import ThemeProvider from './components/ThemeProvider';
import { GoogleAnalytics } from "@next/third-parties/google";
import { DM_Sans, Fraunces } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
});

export async function generateMetadata() {
  return {
    title: "Tom Spencer - UX Designer",
    description: "Hello, I am Tom Spencer, a Senior UX Designer based in Brighton, UK. I am currently working at Rakuten Advertising.",
    icons: { icon: '/just_me.webp' },
  }
}

// Prevent flash of incorrect theme before React hydrates
const themeScript = `
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
`

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <PageBackground />
          <Navigation />
          {children}
          <Footer />
          {modal}
        </ThemeProvider>
        <GoogleAnalytics gaId="G-CCDKVM70NV" debug={true} />
        <Analytics />
      </body>
    </html>
  );
}
