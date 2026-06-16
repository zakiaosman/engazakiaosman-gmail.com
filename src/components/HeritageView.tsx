import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Recycle, Leaf, Send } from 'lucide-react';

interface HeritageViewProps {
  lang: 'SO' | 'EN';
  onShopClick: () => void;
}

export default function HeritageView({ lang, onShopClick }: HeritageViewProps) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4500);
  };

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* Ancient/Science Ethereal Hero */}
      <section className="relative min-h-[85vh] flex items-center px-container-margin-mobile md:px-container-margin-desktop overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-60 mix-blend-multiply" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF_Y0_BCP-NMdDPCglYrguJ3fJPdczpAIQK12Dy0wNRl1O71aFLkJHVbq4izcw6tfKyzTJH_3tMvtwL3qsvehTnxTrpZ9Di86ApLqw7UR7UJgH6Oe612yBADI6a2YO448SF8yBzui7m7CJt-TEf7pE1LX8MFxVWgrBVCPPQd9pzP8shS9IqTG8c08jh9VCZ1E-1G3mRKvFjqTk-_J4hQOwW2hdcB9B8tSKT6JPYD0PGhg1Ds3QHL9HCekCeT4mcz4EvW8gnnZzvbw" 
            alt="Ancient raw Somalian cosmetic components background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/20"></div>
        </div>

        <div className="relative z-10 max-w-4xl animate-fade-in mt-16 sm:mt-0">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-primary font-bold mb-6 leading-tight">
            {lang === 'SO' ? 'Halkii Hiddaha Iyo Saynisku Isaga Kalmadaan.' : 'Where Heritage and Bio-Science Convene.'}
          </h1>
          <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-xl mb-8 leading-relaxed">
            {lang === 'SO'
              ? 'Som Skin Glow waxay ku dhalatay jacayl aan u qabno dhulkayaga. Waxaan isku darnay siraha quruxda ee Soomaalidu qarniyada soo adeegsanaysay iyo aqoonta casriga ah ee daryeelka maqaarka.'
              : 'Our formulas represent a labor of absolute love for the natural world. We pair pure wildcrafted components with rigorous, evidence-based green cosmetic science to deliver outstanding luxury rituals.'}
          </p>
          <button 
            onClick={onShopClick}
            className="bg-primary hover:bg-neutral-900 border border-primary text-white font-sans font-bold text-xs uppercase tracking-widest px-10 py-4 transition-all active:scale-95"
          >
            {lang === 'SO' ? 'Hadda Iibso' : 'Shop Collections'}
          </button>
        </div>
      </section>

      {/* Narrative philosophy & portrait */}
      <section className="py-20 px-container-margin-mobile md:px-container-margin-desktop bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="p-8 sm:p-12 bg-surface-container-low rounded relative overflow-hidden border border-outline-variant/10 shadow-sm">
              <span className="absolute -top-10 -right-4 text-primary/5 font-serif text-[180px] select-none font-bold">S</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-primary font-bold mb-6">
                {lang === 'SO' ? 'Aragtideena Gaarka Ah' : 'Our Pure Promise'}
              </h2>
              <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
                {lang === 'SO'
                  ? 'Waxaan aaminsanahay in maqaarkaagu mudan yahay daryeel dabiici ah oo aan waxyeello lahayn. Laga soo bilaabo geedka fooxa ee buuraha Cal Madow ilaa caleenta Qasilka ee barwaaqada ah, waxaan keenaa nuxurka dhulka Soomaaliyeed.'
                  : 'We hold a fierce conviction that your skin temperaments deserve gentle, protective nourishment devoid of synthetic fillers. Sourcing directly from certified fields, we bring the unmodified potency of local botanicals directly to your dressing table.'}
              </p>
              <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed">
                {lang === 'SO'
                  ? 'Shaqadayadu maaha kaliya inaan maqaarkaaga daryeelno, ee waa inaan dib u soo celinnaa kalsoonidaada dabiiciga ah annaga oo adeegsanayna waxyaabo dabiici ah oo aan waligood lagu tijaabin xayawaanka.'
                  : 'Our task extends far beyond superficial hydration—it is about restoring deep skin confidence and celebrating Somalian botanical heritage through formulas that are completely cruelty-free, vegan, and certified clean.'}
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <div className="absolute inset-0 rounded-full bg-[#fdaf7e]/15 -rotate-6 scale-105 pointer-events-none"></div>
              <img 
                className="w-full h-full object-cover rounded-full shadow-2xl relative z-10 border border-outline-variant/20" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqXginN4gRp2C1CHOHoFl36B5awnMdTifmiGPwb628HkQZ2XMCwDhzbEgmRUo_uBe4FLsSouYMmwo-Kdg9B4qiV7JczWbxFzU2iy0fV5OLHtLl7A-Q-I9TviP0ETt6_4mVKcclZfTORm1pFnti1yPas0NzAOodVYKRfJQ7BySuVjxa35lgp9LISs3GUyCgIK6euYRizP-1ZCaYuO4LJVBmcdvHP-TP_8h4ClCGPFJ5AtGt_6kWja61rwtD57DL2p-KEPCJ64VKqe0" 
                alt="Portrait Somali Radiant Woman"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Heritage Bento Grid */}
      <section className="py-20 px-container-margin-mobile md:px-container-margin-desktop bg-surface-container-low">
        <div className="text-center mb-16 max-w-lg mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-primary font-bold mb-4">
            {lang === 'SO' ? 'Hiddaha Iyo Dhaqanka' : 'Ancient Heritage Bento Grid'}
          </h2>
          <div className="w-24 h-1 bg-[#8b4f27] mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-grid-gutter h-auto md:h-[650px]">
          {/* Box 1 sun silhouette */}
          <div className="md:col-span-8 md:row-span-1 relative group overflow-hidden rounded border border-outline-variant/10 shadow-sm min-h-[220px]">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfN7AJgfBHOnGhdxLMcnpJ-pX4svOzbfcDd0rG8v5JpsFFxqF5GdHCVhjaQqwd29PKR6C-lAIUbsb9a-lH41C5PVrnwhrG1oQyCWaaxUIphpYUtPSdIwgdYjU1QC50-OtlIqw60fYe9tqqCa4HYpQ9aNCE2z2ntD5ZG2mt1VxX6jvsboW-CN1c_QGBbSsUn56mdFJDIZyzby3eHAMMMp2K1oZx-siswvsNqV7n34XHlm2zTin9WFvoRegyoYqQ_eWw3LKZvgX7Uk0" 
              alt="Acacia tree Sunset Somalia Drylands"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-2 font-bold">{lang === 'SO' ? 'Dhulka Hooyo' : 'The Motherland'}</h3>
              <p className="text-white/80 font-sans text-sm">{lang === 'SO' ? 'Macdanta iyo dhirta aan isticmaalno waxay ka yimaadaan dhulka barwaaqada ah ee Soomaaliyeed.' : 'The premium organic clays and leaves we infuse are ethically grown inside mineral-rich Somali soils.'}</p>
            </div>
          </div>

          {/* Box 2 Mortar and pestle (tall box) */}
          <div className="md:col-span-4 md:row-span-2 relative group overflow-hidden rounded border border-outline-variant/10 shadow-sm min-h-[300px]">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA653qbnJiL402GOF8mbcp2xI7gfic-Mx991_Cs8C6ZvmAxOd7n-3JjrKEJAw-JT1o87SDkCxRkzouxxKkFs7xLG-cwin2IH1_tu8L2-UqL6UL7N6yLjlwKSsT8iqBWrzqiSjr0wfjjoQhJM9OCEYMItO0IB-XEvt-vkZLuEeIwJ9RbQZ00m01gAGL1QR_X1DrErA5-cppBo7LI_U2VXkoF-joXEAmPEI6PSoeNHisfjrY_BI67Vqlv8c49lo47kz0R3GzKNJKidNA" 
              alt="Qasil Bowl Wooden Mortar"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-2 font-bold">{lang === 'SO' ? 'Sirta Qasilka' : 'The Secret of Qasil'}</h3>
              <p className="text-white/80 font-sans text-sm">{lang === 'SO' ? 'Caleenta Qasilka waa sirtii quruxda ee hooyooyinkeenu nooga tageen si maqaarku u dhalalo.' : 'Wild-harvested leaves filtered into fine lathering powder to wash away modern dust and impurities.'}</p>
            </div>
          </div>

          {/* Box 3 extractor */}
          <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded border border-outline-variant/10 shadow-sm min-h-[220px]">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWGBCnDOYT3dSQYiX4SvlpqS1Xm9wN-HaMSOiK88ET_YSvytcYB4JwTDGQAQr6AQsONM_kNq7DUPSE2gcd0Rmo5MkaVLysM_M2GX0v1D_9O-lHWjA-B3sX-eS4qcm7I7jYHU1qCb4uiHtiLk37rOiQDrlV_kWrg4yJMLGU1mF66D9H_D-6W_ShSM1YNyOq9W2lcDV0H_VE3QVmkz3zwk81tiG21KZns3QrN6vNPhXjvUBVjjrJdReeSGwFG7jlsaKfpfHBHiduyms" 
              alt="Oil extract science laboratory"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-2 font-bold">{lang === 'SO' ? 'Saynis Casri ah' : 'Modern Clean Science'}</h3>
              <p className="text-white/80 font-sans text-sm">{lang === 'SO' ? 'Waxaan isticmaalnaa teknoolajiyada daryeelka si aan u ilaalino tayada dabiiciga ee hiddaha.' : 'Precision drop distillation preserves molecular viability, guaranteeing premium skincare standards.'}</p>
            </div>
          </div>

          {/* Box 4 purely stylistic text */}
          <div className="md:col-span-4 md:row-span-1 bg-secondary text-white rounded p-8 flex flex-col items-center justify-center text-center shadow-lg transition-transform hover:scale-102">
            <Leaf className="w-12 h-12 text-surface-container-low mb-4 animate-bounce" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">{lang === 'SO' ? '100% Dabiici' : '100% Organic'}</h3>
            <p className="text-surface-container-low/80 font-sans text-xs sm:text-sm">{lang === 'SO' ? 'Ma isticmaalno kimiko waxyeello leh (Certified Clean).' : 'Hypoallergenic botanical standards with zero artificial fragrances.'}</p>
          </div>
        </div>
      </section>

      {/* Sustainable Environment Protection Block */}
      <section className="py-24 px-container-margin-mobile md:px-container-margin-desktop bg-surface">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary font-bold mb-8">
              {lang === 'SO' ? 'Ilaalinta Deegaanka' : 'Sustainability in Action'}
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary" style={{ backgroundColor: '#d0e9d4' }}>
                  <Recycle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-primary font-semibold mb-2">{lang === 'SO' ? 'Baakado La Isticmaali Karo' : 'Circular Glass Packaging'}</h4>
                  <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {lang === 'SO'
                      ? 'Dhammaan quraasadaheenna iyo baakadaheennu waa kuwo dib loo isticmaali karo oo lagu dhisay dhalooyin eco-friendly ah.'
                      : 'All serum dropper vials and mask arrays utilize 100% infinitely recyclable high-tensile custom pharmaceutical amber glass.'}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary" style={{ backgroundColor: '#ffdbc8' }}>
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-primary font-semibold mb-2">{lang === 'SO' ? 'Taageerada Beeralayda' : 'Fair Sourcing Co-ops'}</h4>
                  <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {lang === 'SO'
                      ? 'Waxaan si toos ah ula shaqaynaa beeralayda maxalliga ah annaga oo siinayna mushahar cadaalad ah si bulshada loo xoojiyo.'
                      : 'Direct and transparent procurement links our operations to traditional growers, investing right back into Somali agricultural progress.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square relative z-10 overflow-hidden rounded border border-outline-variant/30 shadow-xl">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN32mB51PB76jhN86EiUXbyiOm3Vj8RjRei6dw8n-lv3quLAp7Ph_Wnk-BwHTH0rgl2wNmeMYNYYIX_IOtznW0GUQp852KRW_MFm_znmK7HRGC41GLJXfs5sv-ESWTCk3BBjSSP8uKSReNcbNi8w4IMHujrgBsRAzHS-gPslD3ZgaaH2mgGTFlgHp4IHKYjom02Fl7DRHF7RDPlXb4PY4kWu5gcTV2RxLYPQFGU2ZhIOoaNC1_5OonxiDpMjYTnudC4kIVxEazMAY" 
                alt="Young green sprout farming details"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-44 h-44 rounded-full pointer-events-none" style={{ backgroundColor: '#ffdea5', opacity: 0.15 }}></div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Form Block */}
      <section className="py-24 px-container-margin-mobile md:px-container-margin-desktop bg-surface-container-highest">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-surface shadow-2xl rounded overflow-hidden border border-outline-variant/30">
          
          {/* Left Details sidebar */}
          <div className="w-full md:w-1/3 bg-primary p-12 text-surface flex flex-col justify-between min-h-[350px]">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">{lang === 'SO' ? 'Nala Soo Xiriir' : 'Connect With Us'}</h2>
              <p className="font-sans text-sm sm:text-base text-surface-container-low opacity-85 leading-relaxed mb-10">
                {lang === 'SO' 
                  ? 'Wixii su\'aalo ah ama faallooyin ah, fadlan foomkan buuxi. Waxaan kuugu soo jawaabi doonaa 24 saac gudahood.'
                  : 'For personal ritual consulting, custom gifting, or wholesale inquiries, leave our team a card here.'}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm font-sans">
                <MapPin className="w-5 h-5 text-secondary-container" style={{ color: '#e9c176' }} />
                <span>Muqdisho, Soomaaliya</span>
              </div>
              <div className="flex items-center gap-4 text-sm font-sans">
                <Phone className="w-5 h-5 text-secondary-container" style={{ color: '#e9c176' }} />
                <span>+252 61 000 000</span>
              </div>
              <div className="flex items-center gap-4 text-sm font-sans">
                <Mail className="w-5 h-5 text-secondary-container" style={{ color: '#e9c176' }} />
                <span>hello@somskinglow.com</span>
              </div>
            </div>
          </div>

          {/* Right actual input form container */}
          <div className="w-full md:w-2/3 p-8 sm:p-12 relative">
            {formSubmitted ? (
              <div className="absolute inset-0 bg-surface flex flex-col items-center justify-center p-8 text-center animate-fade-in z-20">
                <div className="w-16 h-16 rounded-full bg-primary-container text-white flex items-center justify-center mb-6" style={{ backgroundColor: '#1b3022' }}>
                  <Send className="w-8 h-8 text-[#819986]" />
                </div>
                <h3 className="font-serif text-2xl text-primary font-bold mb-2">
                  {lang === 'SO' ? 'Farriintaada waa la diray!' : 'Message Safely Received!'}
                </h3>
                <p className="font-sans text-on-surface-variant text-sm max-w-xs leading-relaxed">
                  {lang === 'SO'
                    ? 'Mahadsanid! Qabiiradayada daryeelka ayaa kula soo xiriiri doona sida ugu dhaqsiyaha badan.'
                    : 'Thank you for reaching out. A client specialist will evaluate your skin temperament request within 24 hours.'}
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="font-sans font-bold text-xs uppercase tracking-wider text-primary mb-2">
                    {lang === 'SO' ? 'Magacaaga' : 'Your Name'}
                  </label>
                  <input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-primary py-2 px-0 text-sm font-sans" 
                    placeholder={lang === 'SO' ? "Geli magacaaga" : "Amina Elmi"}
                    type="text" 
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-sans font-bold text-xs uppercase tracking-wider text-primary mb-2">
                    {lang === 'SO' ? 'Iimaylkaaga' : 'Email Address'}
                  </label>
                  <input 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-primary py-2 px-0 text-sm font-sans" 
                    placeholder="example@email.com" 
                    type="email" 
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="font-sans font-bold text-xs uppercase tracking-wider text-primary mb-2">
                  {lang === 'SO' ? 'Mawduuca' : 'Subject'}
                </label>
                <input 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-primary py-2 px-0 text-sm font-sans" 
                  placeholder={lang === 'SO' ? "Sideen ku caawin karnaa?" : "Custom botanical matching consultation"} 
                  type="text" 
                />
              </div>

              <div className="flex flex-col">
                <label className="font-sans font-bold text-xs uppercase tracking-wider text-primary mb-2">
                  {lang === 'SO' ? 'Farriintaada' : 'Your Message'}
                </label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-primary py-2 px-0 text-sm font-sans resize-none" 
                  placeholder={lang === 'SO' ? "Halkaan ku qor farriintaada..." : "Write your questions or notes here..."} 
                />
              </div>

              <button 
                type="submit"
                className="w-full md:w-auto bg-secondary text-white font-sans font-bold text-xs uppercase tracking-widest px-12 py-4 hover:shadow-lg transition-all active:scale-95 border border-secondary"
              >
                {lang === 'SO' ? 'Farriinta Dir' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
