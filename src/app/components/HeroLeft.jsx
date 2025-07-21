import { ChevronRight } from "lucide-react";

const HeroLeft = () => {
  return (
    <div className="flex flex-col justify-center h-full px-8 lg:px-16 mb-8 bg-black font-sans">
      <h1 className="text-6xl font-bold text-white mb-[.625rem] leading-tight">
        Chat SDK
      </h1>

      <p className="text-xl font-medium md:mb-12 text-[hsla(0,0%,63%,1)] mb-4 leading-[32px] max-w-lg ">
        Chat SDK is a free, open-source template that helps you dive right into
        building powerful chatbot applications.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pb-3">
        <button
          className="flex items-center max-w-100 bg-[hsla(0,0%,93%,1)] px-[18px] sm:px-[10px] sm:h-[40px] py-2 rounded-md border border-gray-700  transition-[border-color,background,color,transform,box-shadow] duration-150 ease-in-out font-medium text-[hsla(0,0%,4%,1)]  hover:bg-[#ccc]    
  text-xs
  leading-[1.25rem]
          h-[48px]     
  cursor-pointer 
  shadow-xs
  hover:opacity-90"
        >
          Get Started
          <ChevronRight size={16} />
        </button>

        <button
          className="flex items-center max-w-100 bg-[hsla(0,0%,4%,1)] lg:px-4 sm:px-[10px] sm:h-[40px] py-5 rounded-md border border-[hsla(0,0%,100%,0.14)]  transition-[border-color,background,color,transform,box-shadow] duration-100 ease-in-out font-medium text-[hsla(0,0%,93%,1)]  hover:bg-[hsla(0,0%,100%,.09)]    
  text-sm
  leading-[1.25rem]
          h-[48px]     
  cursor-pointer 
  shadow-xs
  hover:opacity-90"
        >
          Try It Out
        </button>
      </div>
    </div>
  );
};
export default HeroLeft;
