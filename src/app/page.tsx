import Header from './components/Header'
import HeroLeft from './components/HeroLeft'
import ChatDemo from './components/HeroRight'
import Features from './components/Features';
import HeroSection from "./components/LastSection"
import Footer from './components/Footer';
import { PlusIcon } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Add relative positioning wrapper */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 mt-6 sm:mt-8 md:mt-12">
        
        {/* Cross icon positioned on the left side of the border */}
        <div className="absolute -top-5 -left-4 sm:left-10 md:left-12 lg:left-5 bg-black px-2 text-[#f9e9e9] text-2xl cursor-pointer hover:text-gray-300 transition-colors z-10">
          <PlusIcon size={40} color='gray' strokeWidth={1}/>
        </div>
        
        {/* Main container with border */}
        <div className="border border-[hsla(0,0%,14%,1)] rounded-xl overflow-hidden">
          
          <div className='grid grid-cols-1 lg:grid-cols-2 border-b border-[hsla(0,0%,14%,1)]'>
            <HeroLeft />
            <ChatDemo />
          </div>
          
          <Features />
          
          <div>
            <HeroSection />
          </div>
          
        </div>
      </div>
      
      <Footer />
    </>
  );
}