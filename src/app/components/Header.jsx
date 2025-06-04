function Header() {
  return (
    <>
      <header className="text-white shadow-lg">
        <div className="sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* logo section */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">▲</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-xl font-bold">Chat SDK</span>
                <span className="text-gray-400 text-sm ml-2">Docs</span>
              </div>
            </div>
            {/* Right Side - Search and GitHub */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-800 text-white placeholder-gray-400 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <kbd className="text-xs bg-gray-700 px-1.5 py-0.5 rounded">
                    /
                  </kbd>
                </div>
              </div>

              {/* GitHub Link */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {/* <Github size={20} /> */}
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
