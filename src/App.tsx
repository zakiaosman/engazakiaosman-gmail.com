import { useState } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import ShopView from './components/ShopView';
import HeritageView from './components/HeritageView';
import CartDrawer from './components/CartDrawer';
import { Product, CartItem, ActiveView } from './types';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [lang, setLang] = useState<'SO' | 'EN'>('SO');
  const [selectedCategory, setSelectedCategory] = useState('Dhammaan');

  // Interactive Add to bag
  const handleAddProduct = (product: Product) => {
    setCartItems((prevItems) => {
      const match = prevItems.find((item) => item.product.id === product.id);
      if (match) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
    // Open cart drawer for active visual feedback
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, dir: 'inc' | 'dec') => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.product.id === id) {
            const nextQty = dir === 'inc' ? item.quantity + 1 : item.quantity - 1;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Navigates directly to shop with predefined category filter preset
  const handleShopRedirect = (category?: string) => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory('Dhammaan');
    }
    setActiveView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'SO' ? 'EN' : 'SO'));
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + currentQuantity(curr), 0);

  function currentQuantity(item: CartItem) {
    return item.quantity;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-surface text-on-surface">
      {/* Premium Header Navbar */}
      <Navbar
        activeView={activeView}
        setActiveView={(v) => {
          setActiveView(v);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={totalCartCount}
        onCartClick={() => setCartOpen(true)}
        lang={lang}
        toggleLang={toggleLanguage}
      />

      {/* Main Container View Switcher */}
      <main className="flex-grow pt-16">
        {activeView === 'home' && (
          <HomeView
            onShopClick={handleShopRedirect}
            lang={lang}
            onAddProduct={handleAddProduct}
          />
        )}
        {activeView === 'shop' && (
          <ShopView
            onAddProduct={handleAddProduct}
            lang={lang}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        {activeView === 'heritage' && (
          <HeritageView
            lang={lang}
            onShopClick={() => handleShopRedirect('Dhammaan')}
          />
        )}
      </main>

      {/* Footer Content Module */}
      <footer className="w-full bg-surface-container-low border-t border-outline-variant/30 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-grid-gutter px-container-margin-mobile md:px-container-margin-desktop py-16">
          <div className="md:col-span-1">
            <div className="font-serif font-bold text-xl uppercase tracking-tighter text-primary mb-4">
              SOM SKIN GLOW
            </div>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed max-w-xs">
              {lang === 'SO' 
                ? 'Daryeelka maqaarka ee ugu wanaagsan, oo dhiirigelin ka helay dhaqanka guunka ah iyo dabeecadda.'
                : 'The absolute finest dryland skincare experience, inspired by time-honored nomadic culture and science.'}
            </p>
          </div>

          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-primary mb-6">
              {lang === 'SO' ? 'Xiriirka' : 'Menu Links'}
            </h4>
            <ul className="space-y-4 font-sans text-sm text-on-surface-variant">
              <li>
                <button onClick={() => handleShopRedirect('Dhammaan')} className="hover:text-secondary-container transition-colors">
                  {lang === 'SO' ? 'Dukaan / Products' : 'Shop All'}
                </button>
              </li>
              <li>
                <button onClick={() => handleShopRedirect('Wajiga')} className="hover:text-secondary-container transition-colors">
                  {lang === 'SO' ? 'Wajiga / Facial Care' : 'Facial Rituals'}
                </button>
              </li>
              <li>
                <button onClick={() => handleShopRedirect('Jirka')} className="hover:text-secondary-container transition-colors">
                  {lang === 'SO' ? 'Jirka / Body Care' : 'Body Silk'}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-primary mb-6">
              {lang === 'SO' ? 'Adeegga Macmiilka' : 'Client Care'}
            </h4>
            <ul className="space-y-4 font-sans text-sm text-on-surface-variant">
              <li>
                <span className="hover:text-secondary-container cursor-pointer transition-colors">
                  {lang === 'SO' ? 'Heshiiska Adeegga' : 'Terms of Service'}
                </span>
              </li>
              <li>
                <span className="hover:text-secondary-container cursor-pointer transition-colors">
                  {lang === 'SO' ? 'Sustainability' : 'Environmental Sourcing'}
                </span>
              </li>
              <li>
                <span className="hover:text-secondary-container cursor-pointer transition-colors">
                  {lang === 'SO' ? 'Faallooyin & F.A.Q' : 'Help & Answers'}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-primary mb-6">Social</h4>
            <p className="font-sans text-xs text-on-surface-variant mb-4 font-medium leading-relaxed">
              {lang === 'SO' ? 'Ku xidhnow ritula-keenba dabiiciga ah baraha bulshada.' : 'Follow our active farm-to-face botanical journeys.'}
            </p>
            <div className="flex gap-4 font-sans text-sm text-on-surface-variant">
              <span className="hover:text-primary cursor-pointer transition-colors font-semibold">Instagram</span>
              <span className="hover:text-primary cursor-pointer transition-colors font-semibold">Pinterest</span>
              <span className="hover:text-primary cursor-pointer transition-colors font-semibold">Facebook</span>
            </div>
          </div>
        </div>

        <div className="px-container-margin-mobile md:px-container-margin-desktop py-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant/80 font-sans text-xs">
            © 2026 SOM SKIN GLOW. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-xs font-sans font-bold">
            <button 
              onClick={() => setLang('SO')} 
              className={`transition-colors ${lang === 'SO' ? 'text-primary border-b-2 border-primarypb-0.5' : 'text-on-surface-variant/60'}`}
            >
              SOMALI
            </button>
            <button 
              onClick={() => setLang('EN')} 
              className={`transition-colors ${lang === 'EN' ? 'text-primary border-b-2 border-primary pb-0.5' : 'text-on-surface-variant/60'}`}
            >
              ENGLISH
            </button>
          </div>
        </div>
      </footer>

      {/* Slide-out Cart bag drawer side-panel */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        lang={lang}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
