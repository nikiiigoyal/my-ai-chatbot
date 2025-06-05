import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800 mt-20">
      <div className="mx-auto px-8 py-12 flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center text-2xl font-semibold mb-8">
              <span className="textt-3xl">▲</span>
              Vercel
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base font-medium mb-6 text-gray-400">Resources</h3>
            <ul className="space-y-3">
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
            <h3 className="text-base font-medium mb-6 text-gray-400">Vercel</h3>
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
            <h3 className="text-base font-medium mb-6 text-gray-400">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-end items-center gap-4 mt-8 pt-8 border-t border-gray-800">
          <button className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center hover:border-gray-500 hover:bg-white/5 transition-all duration-200">
            ☀
          </button>
          <button className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center hover:border-gray-500 hover:bg-white/5 transition-all duration-200">
            💬
          </button>
          <button className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center hover:border-gray-500 hover:bg-white/5 transition-all duration-200">
            ↻
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;