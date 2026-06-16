import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Sparkles, Sprout, HeartHandshake, Eye, Sparkle, RefreshCw, Flame, UserCheck, Droplets, Droplet } from 'lucide-react';
import { Product, Testimonial } from '../types';
import { PRODUCTS, TESTIMONIALS } from '../data';

interface HomeViewProps {
  onShopClick: (category?: string) => void;
  lang: 'SO' | 'EN';
  onAddProduct: (product: Product) => void;
}

export default function HomeView({ onShopClick, lang, onAddProduct }: HomeViewProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [productIndex, setProductIndex] = useState(0);

  // Get new/best selling products for the home slider
  const featuredProducts = PRODUCTS.slice(8, 11); // Dahab Serum, Qasil Glow Mask, Uunsi Face Mist

  const rotateTestimonial = (dir: 'next' | 'prev') => {
    if (dir === 'next') {
      setActiveTestimonial((prev: number) => (prev + 1) % TESTIMONIALS.length);
    } else {
      setActiveTestimonial((prev: number) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }
  };

  const nextFeatured = () => {
    setProductIndex((prev: number) => (prev + 1) % featuredProducts.length);
  };

  const prevFeatured = () => {
    setProductIndex((prev: number) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* Editorial Hero */}
      <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            alt="Somali Glowing portrait"
            referrerPolicy="no-referrer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvEQOO4E5emyQVTlMQ4JBvh7xWRm8z19HYPvoItAlM4mr5IftIXtA2Z4jxW-Y2IfdDepMsYF0QBa13gwnFUgoy0ggIzy5iIl9KwP-tdEFhtWOb7YvjQ3QejHlNaE3HRZHrKRIkp9fjvKoLoYC7mhsGCHoPTcxpBrksjjaFVedGdtt-1M49k8xrjSze1JFoUg1rEgl6-WqlHYbF9Pu4_g29e3Fd3SNYXMyQsT45q9ijDOW0OWcW4PQqduZO4Yh1neF6LDlPmEO-5PM" 
          />
          <div className="absolute inset-0 bg-primary/25 backdrop-brightness-95"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-container-margin-mobile max-w-4xl"
        >
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-sm font-serif">
            {lang === 'SO' ? 'Glow-gaaga waa Quruxdaada' : 'Your Glow is Your Beauty'}
          </h1>
          <p className="font-sans text-base sm:text-lg md:text-xl text-surface-container-low mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed font-sans">
            {lang === 'SO' 
              ? 'Ku soo dhowow mustaqbalka daryeelka maqaarka oo ay dhiirigelisay hiddaha iyo dhaqanka Soomaaliyeed.'
              : 'Welcome to the future of skincare inspired by Somalian organic beauty heritage.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => onShopClick()}
              className="bg-primary hover:bg-neutral-900 border border-primary text-surface px-10 py-4 font-sans font-bold uppercase text-xs tracking-widest transition-all shadow-lg active:scale-95 w-full sm:w-auto"
            >
              {lang === 'SO' ? 'Hadda Iibso' : 'Shop Now'}
            </button>
            <button 
              onClick={() => onShopClick()}
              className="border-2 border-surface/90 hover:bg-surface hover:text-primary text-surface px-10 py-4 font-sans font-bold uppercase text-xs tracking-widest transition-all active:scale-95 w-full sm:w-auto"
            >
              {lang === 'SO' ? 'Baro Ritual-ka' : 'Discover the Ritual'}
            </button>
          </div>
        </motion.div>
      </section>

      {/* Benefits Card Grid */}
      <section className="py-20 bg-surface px-container-margin-mobile md:px-container-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
          <div className="flex flex-col items-center text-center p-8 bg-surface-container-low border border-outline-variant/20 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-6" style={{ backgroundColor: '#d0e9d4' }}>
              <Sprout className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-primary mb-4 font-semibold">
              {lang === 'SO' ? 'Dabiici (Natural)' : 'Natural'}
            </h3>
            <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {lang === 'SO'
                ? 'Waxaan isticmaalnaa maaddooyin dabiici ah oo laga soo xulay dhulka hooyo si loo dammaanad qaado daryeelkaaga.'
                : 'We harvest pure botanical ingredients sourced directly from dryland soils to guarantee your nourishment.'}
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-surface-container-low border border-outline-variant/20 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-6" style={{ backgroundColor: '#ffdbc8' }}>
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-primary mb-4 font-semibold">
              {lang === 'SO' ? 'Organic Ah' : '100% Organic'}
            </h3>
            <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {lang === 'SO'
                ? 'Alaabtayadu waa 100% organic, ka madax banaan kiimikooyinka waxyeelada leh ee maqaarka dhibta.'
                : 'Our formulas are entirely organic, completely free from harmful synthetics, phthalates and artificial preservatives.'}
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-surface-container-low border border-outline-variant/20 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-6" style={{ backgroundColor: '#ffdea5' }}>
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-primary mb-4 font-semibold">
              {lang === 'SO' ? 'Waxtar Leh' : 'Proven Efficacy'}
            </h3>
            <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {lang === 'SO'
                ? 'Natiijooyin la arki karo oo degdeg ah, oo ku siinaya dhalaalka dabiiciga ah ee aad mar kasta ku riyoon jirtay.'
                : 'Visible, rapid results that restore your natural collagen structure, leaving your complexion vibrant and glowing.'}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Slider (Page 3 layout) */}
      <section className="py-20 bg-surface-container-low">
        <div className="px-container-margin-mobile md:px-container-margin-desktop mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-xl">
            <span className="text-secondary font-sans font-bold text-xs uppercase tracking-widest block mb-2">
              {lang === 'SO' ? 'Ugu Caansan' : 'Best Sellers'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-semibold">
              {lang === 'SO' ? 'Alaabta ugu Iibka Badan' : 'Featured Luxury Essentials'}
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevFeatured}
              className="w-12 h-12 flex items-center justify-center border border-outline-variant/60 rounded-full hover:bg-primary hover:text-white transition-colors active:scale-90"
              aria-label="Previous product slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextFeatured}
              className="w-12 h-12 flex items-center justify-center border border-outline-variant/60 rounded-full hover:bg-primary hover:text-white transition-colors active:scale-90"
              aria-label="Next product slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="px-container-margin-mobile md:px-container-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
            {featuredProducts.map((product, idx) => {
              // Highlight the currently navigated active one on small screens
              const isCurrent = idx === productIndex;
              return (
                <div 
                  key={product.id} 
                  className={`flex flex-col bg-surface border border-outline-variant/30 overflow-hidden transition-all duration-300 ${isCurrent ? 'ring-2 ring-secondary' : 'opacity-100'}`}
                >
                  <div className="aspect-[3/4] overflow-hidden relative group">
                    <img 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      src={product.image} 
                      alt={product.name}
                      referrerPolicy="no-referrer"
                    />
                    {product.tag && (
                      <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-[10px] font-sans font-bold uppercase tracking-widest">
                        {product.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-secondary font-sans text-xs uppercase tracking-widest font-bold mb-2">Wajiga</span>
                    <h4 className="font-serif text-xl text-primary font-semibold mb-1">{product.name}</h4>
                    <p className="font-sans text-sm text-secondary font-bold mb-4">${product.price.toFixed(2)}</p>
                    <p className="font-sans text-sm text-on-surface-variant line-clamp-2 mb-6">{product.description}</p>
                    <button 
                      onClick={() => onAddProduct(product)}
                      className="w-full mt-auto py-3 bg-primary hover:bg-primary-container text-white hover:text-white transition-colors font-sans text-xs font-bold uppercase tracking-widest"
                    >
                      {lang === 'SO' ? 'Ku dar koobka' : 'Add to Bag'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skin Type Questionnaire Matcher (Special Component) */}
      <section className="py-20 px-container-margin-mobile md:px-container-margin-desktop bg-surface text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-sans font-bold text-xs uppercase tracking-widest block mb-2">
            {lang === 'SO' ? 'Habee Daryeelkaaga' : 'Personalize Your Ritual'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary font-semibold mb-4 leading-normal">
            {lang === 'SO' ? 'Dooro Ritual-kaaga' : 'Find Your Custom Herb Match'}
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed">
            {lang === 'SO' 
              ? 'Noo sheeg nooca maqaarkaaga si aan kuugu dhisno daryeelka iyo alaabta dabiiciga ah ee kugu habboon.'
              : 'Identify your skin temperament below and we\'ll instantly coordinate your organic botanical skincare routine.'}
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-8 md:gap-12">
          <div 
            onClick={() => onShopClick('Wajiga')}
            className="flex flex-col items-center gap-4 cursor-pointer group"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 relative">
              <Droplets className="w-10 h-10 text-primary group-hover:text-surface transition-colors" />
            </div>
            <span className="font-sans font-bold text-xs tracking-wider text-on-surface-variant uppercase group-hover:text-primary transition-colors">
              {lang === 'SO' ? 'Qalalan (Dry)' : 'Dry / Dehydrated'}
            </span>
          </div>

          <div 
            onClick={() => onShopClick('Saliidaha')}
            className="flex flex-col items-center gap-4 cursor-pointer group"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 relative">
              <Droplet className="w-10 h-10 text-primary group-hover:text-surface transition-colors" />
            </div>
            <span className="font-sans font-bold text-xs tracking-wider text-on-surface-variant uppercase group-hover:text-primary transition-colors">
              {lang === 'SO' ? 'Saliid Leh (Oily)' : 'Oily / Sebum'}
            </span>
          </div>

          <div 
            onClick={() => onShopClick('Jirka')}
            className="flex flex-col items-center gap-4 cursor-pointer group"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 relative">
              <Sparkle className="w-10 h-10 text-primary group-hover:text-surface transition-colors" />
            </div>
            <span className="font-sans font-bold text-xs tracking-wider text-on-surface-variant uppercase group-hover:text-primary transition-colors">
              {lang === 'SO' ? 'Isku Dhafan (Combo)' : 'Combination'}
            </span>
          </div>

          <div 
            onClick={() => onShopClick('Wajiga')}
            className="flex flex-col items-center gap-4 cursor-pointer group"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 relative">
              <UserCheck className="w-10 h-10 text-primary group-hover:text-surface transition-colors" />
            </div>
            <span className="font-sans font-bold text-xs tracking-wider text-on-surface-variant uppercase group-hover:text-primary transition-colors">
              {lang === 'SO' ? 'Xasaasi (Sensitive)' : 'Sensitive Skin'}
            </span>
          </div>
        </div>
      </section>

      {/* Dramatic High Contrast Testimonial Banner */}
      <section className="py-24 bg-primary text-surface px-container-margin-mobile md:px-container-margin-desktop relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-container/20 opacity-30 z-0"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-auto md:h-[550px] overflow-hidden rounded shadow-2xl border border-outline/20">
            <img 
              className="w-full h-full object-cover grayscale opacity-90 transition-opacity duration-500" 
              src={TESTIMONIALS[activeTestimonial].image} 
              alt={TESTIMONIALS[activeTestimonial].author}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          </div>
          
          <div className="flex flex-col justify-center py-4">
            <div className="text-secondary-container font-serif text-[120px] leading-none select-none opacity-20 -mb-16 font-semibold" style={{ color: '#e9c176' }}>“</div>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-white mb-8 leading-snug tracking-tight font-medium italic">
              {TESTIMONIALS[activeTestimonial].quote}
            </p>
            
            <div className="flex items-center justify-between border-t border-white/20 pt-6">
              <div>
                <p className="font-sans font-bold text-sm sm:text-base uppercase tracking-widest text-[#e9c176] mb-1">
                  {TESTIMONIALS[activeTestimonial].author}
                </p>
                <p className="font-sans text-xs sm:text-sm text-surface/60 font-medium">
                  {TESTIMONIALS[activeTestimonial].role}
                </p>
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => rotateTestimonial('prev')}
                  className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-primary transition-all active:scale-90"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => rotateTestimonial('next')}
                  className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-primary transition-all active:scale-90"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Story block */}
      <section className="py-24 px-container-margin-mobile md:px-container-margin-desktop bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-secondary font-sans font-bold text-xs uppercase tracking-widest block mb-4">
              {lang === 'SO' ? 'Hiddaha iyo Dhaqanka' : 'Our Botanical Heritage'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-bold mb-6 font-semibold">
              {lang === 'SO' ? 'Sirta Quruxda ee Laga Dhaxlay Ayeeyooyinkeen' : 'Ancient Beauty Secrets Modernly Distilled'}
            </h2>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed mb-6">
              {lang === 'SO' 
                ? 'Waxaan isku darnay sirtii qadiimiga ahayd ee daryeelka maqaarka Soomaalida iyo cilmi-baarista casriga ah ee skincare-ka. Qasilka, Malmalka iyo Uunsigu ma ahan oo kaliya dhaqan dabiici ah, ee waa daawooyin maqaarka iftiimiya.'
                : 'We merge ancient nomadic herbal lore with cutting-edge clean bioscience. Ingredients like high-alpine wild Qasil leaves, hand-tapped frankincense glands, and moisturizing rich sea buckthorn and shea form the core of our deeply effective cosmetics.'}
            </p>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed mb-8">
              {lang === 'SO'
                ? 'Laga soo bilaabo geedka fooxa ee buuraha Cal Madow ilaa beeralayda daryeela dhulka, Som Skin Glow waxay taageeraa bulshooyinka dhabta ah.'
                : 'From the untamed Cal Madow cliffs to local co-ops, we ethically source our raw ingredients, guaranteeing fair wages to traditional dryland farmers while capturing the pure, potent essence of the Somalian ground.'}
            </p>
            <button 
              onClick={() => onShopClick()}
              className="bg-primary hover:bg-neutral-900 border border-primary text-surface px-10 py-4 font-sans font-bold uppercase text-xs tracking-widest active:scale-95 transition-transform"
            >
              {lang === 'SO' ? 'Baro Sheekadeena' : 'Explore Our Story'}
            </button>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded border border-outline-variant/30">
                <img 
                  className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO06fUQ3--pfA0HPbff5836Zb1TOdgzp-pztgCnmgSuJjpIp8GuK6ZVuJxtXC8C-tqPlD1a4cVxprfFNoyjHFWqht_yFqqRsrgK-d2BLSp2NqFlXktxPXXpQNViwPjHe68JMozG2Xp9O8KfNV_91cSgMggkzMJjfofyr_yJ-JlsgNzeMx8Q9cPk6aATpUarKlYEZOxwqKGRogq2q2kNWV1H_NCXi2hyHXlHWvYUX5Yx5e3ntrwJv3EbibdVIQbk7AR9HyDeMJVNXY" 
                  alt="Raw Qasil Leaves and Bowl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="overflow-hidden rounded border border-outline-variant/30">
                <img 
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAPJ2ADhdYEkkIcOaIY5R_QnyU3-JXUmeW7ojwwg2kCVoiERiHNWrXcGALdFZMylzNw-jMQZp3qqHmq-5Jfa4wtFOgDy0dck-W3l9ZzdYNQHFlVtK-nl6nJzy5Ylr-dunogW2kP_mV8C0GQKqP0v_0nwnnhcfazmONA36-n0lTs0hWX7ZNacf8UEKtbB9hgMA9fEvl190N0xopFtYvzrzKseJw5OxfIZLPyM0XVHGjHe1vLxDoKGrlT-SYClDizAg2ObbL8l0Ws2E" 
                  alt="Incense Uunsi Burning"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="pt-8 space-y-4">
              <div className="overflow-hidden rounded border border-outline-variant/30">
                <img 
                  className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8nzs3HW_MyF4_3V5VhqwHEYaQgCadz8zeqZL8RGmxUJvM-nxSjZJqhcikPU0QSiu-J3sQvNN-jRHBYQmTgJXKobt00gHNe4kBCXFk4yk_tQkjBh0qzTxPz2Swh1_cw_P3iaS9kGMFieUoSPtSaglofZU9tSfUKRhtOaqt9-OtPGrcbAQTMzU0fNNLSZApBGqaTImxDvMwc3iwJmXlCBlF5EsTJ2w5_APV9NEaYp6ySCzaenL2JGtNinpKWOBEdqGaNZGj2paqMwQ" 
                  alt="Frankincense Glands Sourcing"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
