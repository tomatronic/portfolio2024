import Hero from './components/hero'
import CasestudyShowcase from './components/casestudyShowcase';
import ExampleGallery from './components/examples';
import Footer from './components/footer';
/* import CaseStudiesSection from './components/CaseStudiesSection'
import OtherWorkSection from './components/OtherWorkSection'
import Footer from './components/Footer' */

export default function Home() {
  return (
    
    <div className="min-h-screen bg-white">
      <Hero />
      <CasestudyShowcase />
      <ExampleGallery />
      {/* <CaseStudiesSection />
      <OtherWorkSection />*/}      
    </div>
    
  );
}
