import Header from './components/Header'
import HeroLeft from './components/HeroLeft'
import ChatDemo from './components/HeroRight'

export default function Home() {
  return (
    <>
    <Header />
    <div className='my-10 mx-auto grid grid-cols-1 lg:grid-cols-2 w-[80%] border border-gray-800'>
    <HeroLeft />
    <ChatDemo />
    </div>
    </>
  );
}
