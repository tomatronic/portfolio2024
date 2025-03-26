import "./globals.css";
import Navigation from './components/navigation';
import Footer from "./components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";
import { Open_Sans } from 'next/font/google';

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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <body>
        <Navigation />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-CCDKVM70NV" debug={true} />
      </body>
    </html>
  );
}
