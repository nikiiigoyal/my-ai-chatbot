import Header from './components/Header'
import HeroLeft from './components/HeroLeft'
import ChatDemo from './components/HeroRight'
import  Features  from './components/Features';

export default function Home() {
  return (
    <>
    <Header />
    <div className='mx-auto w-[80%] border border-gray-800'>
    <div className=' grid grid-cols-1 lg:grid-cols-2 border-b border-gray-800'>
    <HeroLeft />
    <ChatDemo />
    </div>
    <Features />
    </div>
    </>
  );
}
