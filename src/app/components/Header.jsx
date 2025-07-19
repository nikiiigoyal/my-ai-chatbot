import { Github, GithubIcon } from "lucide-react";

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
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-[hsla(0,0%,4%,1)] hover:bg-[0,0,100%,0.09] border-[0,0,100%,0.14%] text-white placeholder-gray-500 rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:ring-1 focus:ring-gray-600 w-48 text-sm"
                />
                <div className="flex w-full items-center justify-center rounded border border-gray-200 font-sans text-sm group-hover:border-gray-aplha-400">
                  <kbd className="flex h-5 min-h-5 w-fit items-center px-1 py-0 text-center font-sans text-xs">
                    /
                  </kbd>
                </div>
              </div>

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
