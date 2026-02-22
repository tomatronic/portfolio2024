'use client';
import Hero from './components/hero'
import CasestudyShowcase from './components/casestudyShowcase';
import ExampleGallery from './components/examples';
import AboutMeSection from './components/AboutMeSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <CasestudyShowcase />      
      <AboutMeSection />
      <ExampleGallery />
    </div>
  );
}