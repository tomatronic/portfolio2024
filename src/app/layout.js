import "./globals.css";
import Navigation from './components/navigation';
import Footer from "./components/footer";
import PageBackground from './components/PageBackground';
import { GoogleAnalytics } from "@next/third-parties/google";
import { Open_Sans } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"

// Optimize font loading
const openSans = Open_Sans({ 
  subsets: ['latin'],
  display: 'swap' 
});

export async function generateMetadata() {
  return {
    title: "Tom Spencer - UX Designer",
    description: "Hello, I am Tom Spencer, a Senior UX Designer based in Brighton, UK. I am currently working at Rakuten Advertising.",
    }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>  
      <body>
        <PageBackground />
        <Navigation />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-CCDKVM70NV" debug={true} />
        <Analytics />
      </body>
    </html>
  );
}
