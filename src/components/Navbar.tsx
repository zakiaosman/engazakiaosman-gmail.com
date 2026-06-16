import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { ActiveView } from '../types';

interface NavbarProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  cartCount: number;
  onCartClick: () => void;
  lang: 'SO' | 'EN';
  toggleLang: () => void;
}

export default function Navbar({
  activeView,
  setActiveView,
  cartCount,
  onCartClick,
  lang,
  toggleLang
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: ActiveView) => {
    setActiveView(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-40 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 flex justify-between items-center px-container-margin-mobile md:px-container-margin-desktop py-4 transition-all">
        {/* Left Toggle and Menu */}
        <div className="flex items-center gap-4">
          <button 
            id="nav-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
            className="p-1 rounded-full text-primary hover:bg-surface-container transition-colors focus:outline-none"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Center Logo branding */}
        <div 
          onClick={() => setActiveView('home')} 
          className="flex items-center gap-2 cursor-pointer active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center font-bold text-premium font-serif text-primary" style={{ backgroundColor: '#e9c176' }}>S</div>
          <span className="font-serif font-bold text-lg md:text-xl tracking-widest text-primary">SOM SKIN GLOW</span>
        </div>

        {/* Right Info and Actions */}
        <div className="flex items-center gap-4">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8 mr-4">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`font-sans font-medium text-sm transition-colors ${activeView === 'home' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
            >
              {lang === 'SO' ? 'The Ritual' : 'Rituals'}
            </button>
            <button 
              onClick={() => handleNavClick('shop')} 
              className={`font-sans font-medium text-sm transition-colors ${activeView === 'shop' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
            >
              {lang === 'SO' ? 'Shop All' : 'Dukaanka'}
            </button>
            <button 
              onClick={() => handleNavClick('heritage')} 
              className={`font-sans font-medium text-sm transition-colors ${activeView === 'heritage' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
            >
              {lang === 'SO' ? 'Sheekadeena' : 'Our Story'}
            </button>
          </div>

          {/* Language Toggle */}
          <button 
            onClick={toggleLang} 
            className="text-xs font-sans font-bold text-secondary hover:text-primary bg-surface-container-low px-3 py-1 border border-outline-variant/30 rounded"
          >
            {lang}
          </button>

          {/* Shopping Bag trigger */}
          <button 
            onClick={onCartClick} 
            className="relative p-2 text-primary hover:text-secondary hover:bg-surface-container transition-colors rounded-full focus:outline-none"
            aria-label="Open shopping bag modal"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-surface text-[10px] font-sans font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Drawer Overlay for Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-primary/20 backdrop-blur-sm transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <aside className="relative bg-surface h-full w-80 shadow-2xl flex flex-col py-8 z-10 animate-slide-in">
            <div className="px-6 mb-12 flex justify-between items-center">
              <span className="font-serif font-bold text-xl text-primary">SOM SKIN GLOW</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-4">
              <button 
                onClick={() => handleNavClick('home')} 
                className={`text-left pl-4 py-3 rounded font-serif text-lg tracking-wide hover:bg-surface-container transition-colors ${activeView === 'home' ? 'text-primary font-bold border-l-4 border-primary' : 'text-on-surface-variant'}`}
              >
                {lang === 'SO' ? '• The Ritual' : '• Rituals'}
              </button>
              <button 
                onClick={() => handleNavClick('shop')} 
                className={`text-left pl-4 py-3 rounded font-serif text-lg tracking-wide hover:bg-surface-container transition-colors ${activeView === 'shop' ? 'text-primary font-bold border-l-4 border-primary' : 'text-on-surface-variant'}`}
              >
                {lang === 'SO' ? '• Shop All' : '• Dukaanka'}
              </button>
              <button 
                onClick={() => handleNavClick('heritage')} 
                className={`text-left pl-4 py-3 rounded font-serif text-lg tracking-wide hover:bg-surface-container transition-colors ${activeView === 'heritage' ? 'text-primary font-bold border-l-4 border-primary' : 'text-on-surface-variant'}`}
              >
                {lang === 'SO' ? '• Sheekadeena' : '• Our Story'}
              </button>
            </nav>
            <div className="mt-auto px-8 pt-8 border-t border-outline-variant/30">
              <p className="text-xs text-on-surface-variant uppercase tracking-widest font-sans font-bold mb-2">Quruxda Somali</p>
              <p className="text-xs text-on-surface-variant/70 leading-relaxed font-sans">
                Blending premium traditional ingredients like frankincense and Qasil with modern scientific skincare.
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
