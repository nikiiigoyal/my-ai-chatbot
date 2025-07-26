import { ChevronRight } from 'lucide-react';


const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:text-left px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 bg-black text-white relative gap-8 lg:gap-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent leading-tight">
        Deploy your chatbot today.
      </h1>
      
      <div className="flex flex-row items-center gap-3 sm:gap-4 lg:justify-end flex-shrink-0">
        <button
          className="flex items-center max-w-100 bg-[hsla(0,0%,93%,1)] px-[18px] sm:px-[10px] sm:h-[40px] py-2 rounded-md border border-gray-700  transition-[border-color,background,color,transform,box-shadow] duration-150 ease-in-out font-medium text-[hsla(0,0%,4%,1)]  hover:bg-[#ccc]    
  text-sm
  leading-[1.25rem]
          h-[48px]     
  cursor-pointer 
  shadow-xs
  hover:opacity-90"
        >
         <span className='px-2'>▲</span>
         Deploy on Vercel
        </button>
        
       <button
          className="flex items-center max-w-100 bg-[hsla(0,0%,4%,1)] lg:px-4 px-5 sm:h-[40px] py-5 rounded-md border border-[hsla(0,0%,100%,0.14)]  transition-[border-color,background,color,transform,box-shadow] duration-100 ease-in-out font-medium text-[hsla(0,0%,93%,1)]  hover:bg-[hsla(0,0%,100%,.09)]    
  text-sm
  leading-[1.25rem]
          h-[48px]     
  cursor-pointer 
  shadow-xs
  hover:opacity-90"
        >
          Get started
          <ChevronRight size={16}/>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;