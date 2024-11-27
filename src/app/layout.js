import "./globals.css";
import Navigation from './components/navigation';
import Footer from "./components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";


export default function RootLayout({ children }) {
  return (
    <html lang="en">  
    <Head>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
    </Head>    
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-CCDKVM70NV" debug= {true} />
    </html>
  );
}
