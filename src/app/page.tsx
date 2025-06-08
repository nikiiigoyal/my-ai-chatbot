import Header from './components/Header'
import HeroLeft from './components/HeroLeft'
import ChatDemo from './components/HeroRight'
import  Features  from './components/Features';
import HeroSection from "./components/LastSection"
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
    <Header />
    <div className='mx-auto w-[80%] border border-gray-800 mt-12'>
    <div className='grid grid-cols-1 lg:grid-cols-2 border-b border-gray-800'>
    <HeroLeft />
    <ChatDemo />
    </div>
    <Features />
    <div>
      <HeroSection />
    </div>
    </div>
    <Footer />
    </>
  );
}
