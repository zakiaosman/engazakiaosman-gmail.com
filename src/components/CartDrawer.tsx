import { useState } from 'react';
import { X, Plus, Minus, Trash2, CheckCircle2, Ticket } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, dir: 'inc' | 'dec') => void;
  onRemoveItem: (id: string) => void;
  lang: 'SO' | 'EN';
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  lang,
  onClearCart
}: CartDrawerProps) {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  if (!isOpen) return null;

  const totalBeforeDiscount = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = discountApplied ? totalBeforeDiscount * 0.15 : 0;
  const grandTotal = totalBeforeDiscount - discountAmount;

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase().trim() === 'qurux15') {
      setDiscountApplied(true);
    } else {
      alert(lang === 'SO' ? 'Koodhkaas ma ahan mid sax ah!' : 'Invalid coupon code. Try "QURUX15"');
    }
  };

  const handleCheckoutSubmit = () => {
    if (cartItems.length === 0) return;
    setCheckoutSuccess(true);
  };

  const handleSuccessClose = () => {
    setCheckoutSuccess(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-primary/20 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Sliding Sidebar Drawer */}
      <aside className="relative bg-surface h-full w-full max-w-md shadow-2xl flex flex-col z-10 border-l border-outline-variant/30">
        
        {/* Header segment */}
        <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-xl text-primary">
              {lang === 'SO' ? 'Miriirka Daryeelka' : 'Your Shopping Bag'}
            </span>
            <span className="text-xs font-sans bg-secondary text-white px-2 py-0.5 rounded-full font-bold">
              {cartItems.reduce((acc, current) => acc + current.quantity, 0)}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Modal overlay within cart drawer */}
        {checkoutSuccess && (
          <div className="absolute inset-0 bg-surface flex flex-col items-center justify-center p-8 text-center animate-fade-in z-20">
            <div className="w-16 h-16 rounded-full bg-[#1b3022] text-white flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8 text-[#819986]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-2">
              {lang === 'SO' ? 'Dalabkaagu waa guuleystay!' : 'Checkout Complete!'}
            </h3>
            <p className="font-sans text-sm text-on-surface-variant mb-4 leading-normal max-w-xs">
              {lang === 'SO'
                ? 'Aad baad u mahadsantahay! Waxaan kuu soo diyaarinaynaa alaabta daryeelka si dabiici ah oo degdeg leh.'
                : 'Thank you for shopping Somali glow rituals. Your secure processing is success; package details have been routed.'}
            </p>
            <div className="p-4 bg-surface-container-low rounded border border-outline-variant/30 font-mono text-xs text-secondary/80 w-full mb-8">
              Order ID: SSG-{(Math.random() * 100000).toFixed(0)} <br />
              Subtotal: ${grandTotal.toFixed(2)}
            </div>
            <button
              onClick={handleSuccessClose}
              className="w-full py-4 bg-primary text-white font-sans text-xs font-bold uppercase tracking-widest hover:bg-neutral-900 transition-colors"
            >
              Cusbooneysii & Xir (Proceed)
            </button>
          </div>
        )}

        {/* Main Products List inside drawer */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-on-surface-variant gap-4">
              <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center">
                <Ticket className="w-6 h-6 text-outline" />
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-primary mb-1">
                  {lang === 'SO' ? 'Miriir ku habboon ma jiro' : 'Your bag is empty'}
                </p>
                <p className="font-sans text-xs max-w-[200px] mx-auto text-on-surface-variant/70 leading-normal">
                  {lang === 'SO' ? 'Dooro alaab ka mid ah daryeelka maqaarka si aad halkan u dhigto.' : 'Add traditional, organic Qasil or Frankincense rituals to begin your skin journey.'}
                </p>
              </div>
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={item.product.id}
                className="flex gap-4 border-b border-outline-variant/10 pb-6 animate-fade-in"
              >
                <div className="w-20 h-24 overflow-hidden rounded border border-outline-variant/30 flex-shrink-0 bg-surface-container-low">
                  <img 
                    className="w-full h-full object-cover" 
                    src={item.product.image} 
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-serif font-bold text-sm text-primary leading-tight line-clamp-1">{item.product.name}</h4>
                      <button 
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-on-surface-variant hover:text-error transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-[10px] font-sans text-secondary uppercase font-bold tracking-widest">{item.product.category}</span>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    {/* Quantity selectors */}
                    <div className="flex items-center border border-outline-variant/50 bg-surface-container-low">
                      <button 
                        onClick={() => onUpdateQuantity(item.product.id, 'dec')}
                        className="p-1 px-2.5 text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-high"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 font-sans font-bold text-xs text-primary">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.product.id, 'inc')}
                        className="p-1 px-2.5 text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-high"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="font-serif text-sm font-bold text-primary">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary segment */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-outline-variant/30 bg-surface-container-low space-y-4">
            {/* Promo Code section */}
            <div className="flex gap-2">
              <input
                disabled={discountApplied}
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder={discountApplied ? "QURUX15 APPLIED" : "Ku qor koodhka QURUX15"}
                className="w-full bg-surface border border-outline-variant/40 rounded px-4 py-2 font-sans text-xs focus:ring-1 focus:ring-primary focus:outline-none uppercase font-bold tracking-widest italic"
                type="text"
              />
              <button 
                disabled={discountApplied}
                onClick={handleApplyCoupon}
                className="bg-secondary hover:bg-secondary/95 text-white font-sans text-xs font-bold px-6 py-2 uppercase tracking-widest transition-colors rounded-none disabled:opacity-50"
              >
                Geli
              </button>
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-2 text-xs font-sans text-on-surface-variant">
              <div className="flex justify-between items-center text-sm font-medium">
                <span>{lang === 'SO' ? 'Iibka guud (Subtotal)' : 'Bag Subtotal'}</span>
                <span className="font-serif font-bold text-primary">${totalBeforeDiscount.toFixed(2)}</span>
              </div>
              
              {discountApplied && (
                <div className="flex justify-between items-center text-xs font-medium text-secondary">
                  <span>{lang === 'SO' ? 'Qiimo dhimis (Save 15% - QURUX15)' : 'Ritual Promo Discount (15%)'}</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between items-center text-xs text-on-surface-variant/70 border-t border-outline-variant/20 pt-2">
                <span>{lang === 'SO' ? 'Kharashka dalka (Shipping)' : 'Domestic Shipping & Customs'}</span>
                <span className="uppercase text-[10px] tracking-wider text-[#819986] font-bold">Standard Free</span>
              </div>

              <div className="flex justify-between items-center text-base font-bold text-primary border-t border-outline-variant/30 pt-3">
                <span>{lang === 'SO' ? 'Iibka guud (Subtotal)' : 'Grand Total Subtotal'}</span>
                <span className="font-serif font-bold">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={handleCheckoutSubmit}
              className="w-full mt-4 py-4 bg-primary hover:bg-neutral-900 text-surface select-none font-sans text-xs font-bold uppercase tracking-widest transition-all shadow-md"
            >
              {lang === 'SO' ? 'Hadda iibso (Checkout)' : 'Complete Secure Checkout'}
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
