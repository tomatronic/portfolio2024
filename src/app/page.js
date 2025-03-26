'use client';
import Hero from './components/hero'
import CasestudyShowcase from './components/casestudyShowcase';
import ExampleGallery from './components/examples';



export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <CasestudyShowcase />
      <ExampleGallery />      
    </div>
  );
}
