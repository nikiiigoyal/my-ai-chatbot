'use client'

import { Search } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
        setSearchValue("");
      }
      if (event.key === "/" && !isExpanded) {
        event.preventDefault();
        setIsExpanded(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded]);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleSearchClick = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setSearchValue("");
  };

  if (isExpanded) {
    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-3xl bg-opacity-50 


 opacity-80 flex mt-12 p-8 justify-center z-50">
            <div className="w-full max-w-2xl mx-4">
                <div className="bg-transparent border border-gray-700 rounded-md">
      <div className="flex flex-row items-center gap-2 px-3">
        <div className="relative size-4">
          <Search size={18} className="text-gray-400 mr-3" />
        </div>
        <input 
          ref={inputRef}
          type='text'
          placeholder="Search" 
          value={searchValue}
          className="w-full flex-1 py-3 text-base placeholder:bg-[hsl(0,0,88%)] opacity-[1] focus-visible:outline-none rounded-2xl" 
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button 
          type="button" 
          onClick={handleClose}
          aria-label="Close Search" 
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 border hover:bg-[0,0%,88%] text-xs p-1.5"
        >
          Esc
        </button>
      </div>
      </div>
      </div>
      </div>
    );
  }

  return (
      <div className="relative ">
  <button 
    onClick={handleSearchClick} 
    className="block w-full group" // Added 'group' class for parent-state styling
  >
    <input
      type="text"
      placeholder="Search..."
      className="bg-[hsla(0,0%,4%,1)] group-hover:bg-[hsla(0,0%,100%,0.09)] border border-[hsla(0,0%,100%,0.14)] text-white placeholder-gray-500 rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:ring-1 focus:ring-gray-600 w-48 text-sm hover:text- transition-text duration-150 cursor-pointer"
      readOnly
    />
  </button>
  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
    <div className="flex w-full items-center justify-center rounded-[4px] border border-[hsla(0,0%,12%)] opacity-[1] font-sans text-sm group-hover:border-[hsla(0,0%,100%,0.04)]">
      <kbd className="flex h-5 min-h-5 w-fit items-center px-1 py-0 text-center font-sans text-xs text-gray-400 group-hover:text-red">
        /
      </kbd>
    </div>
  </div>
</div>
  );
}

export default SearchBar;