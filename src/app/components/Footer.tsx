import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex justify-between items-start">
          {/* Logo - Left side */}
          <div className="flex-shrink-0">
            <div className="flex items-center text-4xl font-semibold">
              <span className="text-4xl">▲</span>
              Vercel
            </div>
          </div>

          {/* Navigation columns - Right side */}
          <div className="flex gap-16">
            {/* Resources */}
            <div>
              <h3 className="text-base font-medium mb-6 text-white">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/docs" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>

            {/* Vercel */}
            <div>
              <h3 className="text-base font-medium mb-6 text-white">Vercel</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://nextjs.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Next.js
                  </Link>
                </li>
                <li>
                  <Link href="/open-source" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Open source
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-base font-medium mb-6 text-white">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Icons */}
        <div className="flex justify-end items-center mt-12 pt-8 cursor-pointer">
          <div className="flex border border-[hsla(0,0%,18%,1)] rounded-4xl py-1 px-1">
            {/* Theme toggle icon */}
            <button className="w-7 h-7  rounded-lg flex items-center justify-center hover:border-gray-500 hover:bg-white/5 transition-all duration-200 data-[active=true]:bg-[hsla(0,0%,16%,1)] data-[active=true]:text-[hsla(0,0%,93%,1)] data-[active=true]:border-gray-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            </button>
            
            {/* Feedback/Chat icon */}
            <button className="w-7 h-7  rounded-lg flex items-center justify-center hover:border-gray-500 hover:bg-white/5 transition-all duration-200 data-[active=true]:bg-[hsla(0,0%,16%,1)] data-[active=true]:text-[hsla(0,0%,93%,1)] data-[active=true]:border-gray-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </button>
            
            {/* Theme/Mode toggle icon */}
            <button className="w-7 h-7  rounded-lg flex items-center justify-center hover:border-gray-500 hover:bg-white/5 transition-all duration-200 data-[active=true]:bg-[hsla(0,0%,16%,1)] data-[active=true]:text-[hsla(0,0%,93%,1)] data-[active=true]:border-gray-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 data-[active=true]:text-black">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;