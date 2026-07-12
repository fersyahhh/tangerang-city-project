import React from 'react';
import { ArrowRight, Landmark, Leaf, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-gray">
      
      {/* Improvised Stripe-like Geometric & Mesh Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft abstract blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-royal-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-green/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>
        
        {/* Diagonal Geometric Stripes */}
        <div className="absolute top-1/4 right-0 w-[120%] h-32 bg-gradient-to-r from-transparent via-pure-white/40 to-pure-white/80 transform -rotate-12 translate-x-1/4"></div>
        <div className="absolute top-1/3 right-0 w-[120%] h-1 bg-gradient-to-r from-transparent via-royal-blue/10 to-royal-blue/20 transform -rotate-12 translate-x-1/4 mt-4"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-pure-white rounded-full text-emerald-green text-[13px] font-bold tracking-wide uppercase mb-10 animate-slide-up shadow-sm border border-emerald-green/10">
          <div className="w-2 h-2 rounded-full bg-emerald-green animate-pulse"></div>
          Ekosistem Kota Pintar
        </div>
        
        {/* Giant Typography (Stripe inspired) */}
        <div className="max-w-4xl">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-dark-slate mb-6 md:mb-8 leading-[1.15] md:leading-[1.1] tracking-tight">
            Wujud Transformasi Kota <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-blue to-emerald-green">
              Modern & Melayani
            </span>
          </h1>
        
          <p className="font-body text-base md:text-xl text-muted-slate mb-10 max-w-2xl leading-relaxed mx-auto">
            Portal resmi Pemerintah Kota Tangerang yang mengintegrasikan layanan publik secara cerdas guna mewujudkan tata kelola yang transparan, responsif, dan berorientasi penuh pada kesejahteraan masyarakat.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-12 md:mb-16">
            <Link to="/profil" className="w-full md:w-auto px-8 py-4 bg-amber-yellow hover:bg-amber-yellow-hover text-dark-slate text-[15px] font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
              Jelajahi Profil Kota <ArrowRight size={18} />
            </Link>
            <Link to="/layanan" className="w-full md:w-auto px-8 py-4 bg-pure-white text-royal-blue border border-gray-200 hover:border-royal-blue text-[15px] font-bold rounded-full transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center">
              Akses Layanan Publik
            </Link>
          </div>
        </div>

        {/* Feature Micro-cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center justify-center gap-3 py-3 text-muted-slate font-medium">
            <Landmark size={20} className="text-amber-yellow" /> Pemerintahan Transparan
          </div>
          <div className="flex items-center justify-center gap-3 py-3 text-muted-slate font-medium border-t md:border-t-0 md:border-l md:border-r border-gray-200/60">
            <Leaf size={20} className="text-emerald-green" /> Inovasi Berkelanjutan
          </div>
          <div className="flex items-center justify-center gap-3 py-3 text-muted-slate font-medium border-t md:border-t-0 border-gray-200/60">
            <Users size={20} className="text-royal-blue" /> Kesejahteraan Masyarakat
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
