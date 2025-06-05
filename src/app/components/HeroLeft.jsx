import { ChevronRight } from "lucide-react";

const HeroLeft = () => {
  return (
    <div className="flex flex-col justify-center h-full px-8 lg:px-16 mb-8">
      <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
        Chat SDK
      </h1>

      <p className="text-xl lg:text-2xl text-gray-400 mb-12 leading-relaxed max-w-lg">
        Chat SDK is a free, open-source template that helps you dive right into
        building powerful chatbot applications.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
          Get Started
          <ChevronRight size={20} />
        </button>

        <button className="flex items-center justify-center gap-3 bg-transparent border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors duration-200">
          Try It Out
        </button>
      </div>
    </div>
  );
};
export default HeroLeft;
