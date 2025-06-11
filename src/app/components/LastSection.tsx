import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-center lg:text-left px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 bg-black text-white relative gap-8 lg:gap-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent leading-tight">
        Deploy your chatbot today.
      </h1>
      
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-end flex-shrink-0">
        <Link 
          href="/deploy" 
          className="w-full sm:w-auto bg-white text-black px-4 sm:px-6 py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-gray-100 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
        >
          <span className="text-sm">▲</span>
          Deploy on Vercel
        </Link>
        
        <Link 
          href="/get-started" 
          className="w-full sm:w-auto bg-transparent text-white border border-gray-700 px-4 sm:px-6 py-3 rounded-lg font-medium text-sm sm:text-base hover:border-gray-500 hover:bg-white/5 transition-all duration-200 flex items-center justify-center gap-2"
        >
          Get Started
          <span>→</span>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;