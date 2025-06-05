

import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="flex justify-between items-center text-center px-8 py-16 bg-black text-white relative">
     
      
      
      {/* <div className="relative z-8 flex justify-between"> */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
          Deploy your chatbot today.
        </h1>
        
        <div className="flex items-center gap-4 justify-center">
          <Link 
            href="/deploy" 
            className="bg-white text-black px-6 py-3 rounded-lg font-medium text-base hover:bg-gray-100 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span className="text-sm">▲</span>
            Deploy on Vercel
          </Link>
          
          <Link 
            href="/get-started" 
            className="bg-transparent text-white border border-gray-700 px-6 py-3 rounded-lg font-medium text-base hover:border-gray-500 hover:bg-white/5 transition-all duration-200 flex items-center gap-2"
          >
            Get Started
            <span>→</span>
          </Link>
        </div>
      
    </section>
  );
};

export default HeroSection;