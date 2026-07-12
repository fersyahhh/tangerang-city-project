import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Profil Kota', path: '/profil' },
    { name: 'Layanan Publik', path: '/layanan' },
  ];

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center px-4 pt-6 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-[padding,background-color,shadow,border-color] duration-500 ease-out w-full max-w-5xl rounded-full backdrop-blur-md ${
          isScrolled
            ? 'bg-pure-white/95 shadow-lg shadow-royal-blue/5 py-3 px-6 border border-transparent'
            : 'bg-pure-white/100 shadow-xl shadow-slate-gray/50 py-4 px-8 border border-slate-gray'
        }`}
      >
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="font-display font-bold text-[10px] sm:text-[11px] tracking-wider text-muted-slate uppercase leading-none mb-0.5">
                Pemerintah Kota
              </span>
              <span className="font-display font-extrabold text-[15px] sm:text-[17px] tracking-tight text-royal-blue group-hover:text-emerald-green transition-colors leading-none">
                TANGERANG
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-medium text-[14px] text-dark-slate hover:text-royal-blue transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="https://tangerangkota.go.id/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-royal-blue hover:bg-royal-blue-hover text-pure-white text-[14px] font-semibold rounded-full transition-colors shadow-md hover:shadow-lg inline-block">
              Tangerang LIVE
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-slate hover:text-royal-blue transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden absolute top-full left-0 w-full mt-4 bg-pure-white rounded-3xl shadow-2xl transition-all duration-300 overflow-hidden border border-slate-gray ${
            isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 border-transparent'
          }`}
        >
          <div className="flex flex-col py-6 px-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-semibold text-base text-dark-slate hover:text-royal-blue transition-colors py-3 border-b border-slate-gray flex justify-between items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="https://tangerangkota.go.id/" target="_blank" rel="noopener noreferrer" className="mt-6 px-5 py-3.5 bg-royal-blue text-pure-white font-bold rounded-xl hover:bg-royal-blue-hover transition-colors w-full text-center shadow-lg block">
              Akses Tangerang LIVE
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
