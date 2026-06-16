import { useState, MouseEvent } from 'react';
import { Search, ShoppingCart, Sparkles, Check, CheckCircle } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface ShopViewProps {
  onAddProduct: (product: Product) => void;
  lang: 'SO' | 'EN';
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function ShopView({
  onAddProduct,
  lang,
  selectedCategory,
  setSelectedCategory
}: ShopViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { key: 'Dhammaan', labelSO: 'Dhammaan', labelEN: 'All Products' },
    { key: 'Wajiga', labelSO: 'Wajiga', labelEN: 'Face Care' },
    { key: 'Jirka', labelSO: 'Jirka', labelEN: 'Body Care' },
    { key: 'Saliidaha', labelSO: 'Saliidaha', labelEN: 'Organic Oils' }
  ];

  // Filter products based on category and search query
  const filteredProducts = PRODUCTS.filter((product: Product) => {
    const matchesCategory = selectedCategory === 'Dhammaan' || product.category === selectedCategory;
    
    const term = searchQuery.toLowerCase();
    const matchesSearch = 
      product.name.toLowerCase().includes(term) || 
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term);

    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>, product: Product) => {
    e.stopPropagation(); // prevent modal trigger
    onAddProduct(product);
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1800);
  };

  return (
    <div className="flex flex-col w-full py-16 bg-surface">
      {/* Title & Organic Selector */}
      <section className="px-container-margin-mobile md:px-container-margin-desktop mb-12">
        <div className="max-w-4xl mb-10 animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary font-bold tracking-tight mb-4">
            {lang === 'SO' ? 'Ururka Quruxda Somali' : 'The Somali Beauty Collection'}
          </h1>
          <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            {lang === 'SO'
              ? 'Ku soo dhowow khibrad daryeel maqaarka oo ka timid dhaxalka qaniga ah ee Somalida, iyadoo la adeegsanayo maaddooyinka ugu dabiicisan dabeecadda.'
              : 'Welcome to an exquisite clean skincare collection designed directly around rich dryland traditions, using entirely pure, time-honored organic elements.'}
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-container-margin-mobile px-container-margin-mobile md:mx-0 md:px-0">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`flex-shrink-0 px-8 py-3 font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container-high border border-outline-variant/30'
                }`}
              >
                {lang === 'SO' ? cat.labelSO : cat.labelEN}
              </button>
            );
          })}
        </div>

        {/* Dynamic Search Integration */}
        <div className="mt-8 relative max-w-xl">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface-container-low border border-outline-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary py-4 pl-4 pr-12 font-sans text-sm placeholder:text-outline/70 italic"
            placeholder={lang === 'SO' ? "Raadi alaabtaada..." : "Search Som Skin essentials..."}
            type="text"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/60 w-5 h-5 pointer-events-none" />
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-container-margin-mobile md:px-container-margin-desktop min-h-[40vh]">
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-outline-variant rounded-lg bg-surface-container-lowest">
            <span className="text-secondary font-sans font-bold text-lg mb-2">
              {lang === 'SO' ? 'Wax alaab ah lama helin' : 'No items match your filter'}
            </span>
            <p className="text-on-surface-variant/70 text-sm max-w-sm">
              {lang === 'SO' ? 'Isku day inaad raadiso kalmad kale ama dooro qayb kale.' : 'Try adjusting your search terms or switch categories to explore the collection.'}
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('Dhammaan'); }}
              className="mt-6 px-6 py-2 bg-primary text-white font-sans text-xs uppercase tracking-widest font-bold"
            >
              Cusbooneysii (Reset Filters)
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-grid-gutter animate-fade-in">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group flex flex-col bg-surface-container-low border border-outline-variant/10 overflow-hidden hover:-translate-y-2 transition-all duration-350 cursor-pointer shadow-sm"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={product.image}
                    referrerPolicy="no-referrer"
                  />
                  {product.tag && (
                    <div className="absolute top-4 left-4 bg-surface/90 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest text-primary shadow-sm">
                      {product.tag}
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-sans font-bold text-secondary uppercase tracking-widest mb-2 block">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-xl text-primary font-semibold mb-2 group-hover:text-secondary transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant line-clamp-2 mb-6">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-outline-variant/20">
                    <span className="font-serif text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={(e) => handleAddToCart(e, product)}
                      className={`p-3 rounded-full flex items-center justify-center transition-all ${
                        addedProductId === product.id 
                          ? 'bg-secondary text-white' 
                          : 'bg-primary text-white hover:bg-neutral-800'
                      }`}
                      style={{ transition: 'all 0.3s ease' }}
                    >
                      {addedProductId === product.id ? (
                        <Check className="w-5 h-5 animate-pulse" />
                      ) : (
                        <ShoppingCart className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Product Details Premium Overlay Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-primary/45 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedProduct(null)}
          ></div>
          <div className="relative bg-surface max-w-4xl w-full rounded shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 z-10 animate-fade-in border border-outline-variant/30">
            {/* Left Image aspect */}
            <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px] overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                referrerPolicy="no-referrer"
              />
              {selectedProduct.tag && (
                <span className="absolute top-4 left-4 bg-primary text-surface font-sans text-xs uppercase tracking-widest font-bold px-4 py-1.5">
                  {selectedProduct.tag}
                </span>
              )}
            </div>

            {/* Right Information detail */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 text-on-surface-variant hover:text-primary transition-colors text-sans font-bold"
              >
                Halka Kabax (Close)
              </button>
              
              <span className="text-secondary font-sans font-bold text-xs uppercase tracking-widest mb-2 block">
                {selectedProduct.category} Ritual
              </span>
              <h2 className="font-serif text-3xl text-primary font-bold mb-4 font-semibold">{selectedProduct.name}</h2>
              <p className="font-sans text-secondary font-bold text-xl mb-6">${selectedProduct.price.toFixed(2)}</p>
              
              <div className="border-t border-b border-outline-variant/20 py-6 mb-8">
                <p className="font-sans text-on-surface-variant leading-relaxed text-sm sm:text-base">
                  {selectedProduct.description}
                </p>
                <div className="flex flex-col gap-2 mt-4 text-xs font-sans text-on-surface-variant/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#819986]" />
                    <span>Tested Dermatologically for sensitive skin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#819986]" />
                    <span>100% Organic Somalian botanicals & oils</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={(e) => handleAddToCart(e, selectedProduct)}
                className="w-full py-4 bg-primary hover:bg-neutral-900 border border-primary text-surface font-sans text-xs font-bold uppercase tracking-widest transition-all hover:shadow"
              >
                {addedProductId === selectedProduct.id ? 'Aya Lagu Daray (Added!)' : 'Ku dar koobka daryeelka'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
