import { Github, GithubIcon } from "lucide-react";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <>
      <header className="bg-black text-white shadow-lg border-b border-gray-800">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* logo section */}
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">▲</span>
              </div>
              <div className="bg-gray-alpha-400"> / </div>
              <div className="flex items-center space-x-1">
                <span className="text-lg font-bold">Chat SDK</span>
                <span className="text-gray-400 text-base ml-4">Docs</span>
              </div>
            </div>

            {/* Right Side - Search and GitHub */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Search Bar */}
              <SearchBar />

              {/* GitHub Link */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-100 px-2 py-2 rounded-md border border-gray-700  transition-[border-color,background,color,transform,box-shadow] duration-150 ease-in-out font-medium
                   
  text-black      
  text-xs
  leading-[1.25rem]
  h-[32px]              
  cursor-pointer 
  shadow-xs
  hover:opacity-90"
              >
                <GithubIcon size={16} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
