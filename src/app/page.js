import Hero from './components/hero'
import CasestudyShowcase from './components/casestudyShowcase';
import ExampleGallery from './components/examples';
/* import CaseStudiesSection from './components/CaseStudiesSection'
import OtherWorkSection from './components/OtherWorkSection'
import Footer from './components/Footer' */

export async function generateMetadata() {
  return {
    title: "Tom Spencer - UX Designer",
    description: "Hello, I am Tom Spencer, a Senior UX Designer based in Brighton, UK. I am currently working at Rakuten Advertising.",
    }
}

export default function Home() {
  return (
    
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <CasestudyShowcase />
      <ExampleGallery />
      {/* <CaseStudiesSection />
      <OtherWorkSection />*/}      
    </div>
    
  );
}
