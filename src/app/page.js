'use client';
import Hero from './components/hero'
import CasestudyShowcase from './components/casestudyShowcase';
import ExampleGallery from './components/examples';



export default function Home() {
  return (
    <div>
      <Hero />
      <CasestudyShowcase />
      <ExampleGallery />
    </div>
      );
}