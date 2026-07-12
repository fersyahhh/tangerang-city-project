import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import imgSachrudin from '../assets/h-sachrudin.png';

const VisionMissionSection: React.FC = () => {
  return (
    <section className="py-24 bg-pure-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Sisi Kiri: Foto Kepala Daerah */}
          <div className="w-full lg:w-5/12 relative">
            {/* Latar Belakang Geometris Halus */}
            <div className="absolute inset-0 bg-slate-gray rounded-tr-[100px] rounded-bl-[100px] transform translate-x-4 translate-y-4 -z-10"></div>
            <div className="w-full h-[400px] md:h-[600px] bg-slate-gray rounded-tr-[100px] rounded-bl-[100px] overflow-hidden border border-gray-100 shadow-sm">
              <img 
                src={imgSachrudin} 
                alt="Wakil Wali Kota Tangerang" 
                className="w-full h-full object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="absolute bottom-4 left-4 md:bottom-8 md:-left-6 bg-pure-white p-5 md:p-6 shadow-xl border border-gray-100 max-w-[240px] md:max-w-[280px]">
              <p className="font-display font-bold text-base md:text-lg text-dark-slate leading-tight mb-1">Drs. H. Sachrudin</p>
              <p className="text-xs md:text-sm text-emerald-green font-semibold">Wakil Wali Kota Tangerang</p>
            </div>
          </div>

          {/* Sisi Kanan: Teks & Visi Misi */}
          <div className="w-full lg:w-7/12">
            <div className="inline-block px-4 py-1.5 bg-royal-blue/10 rounded-full text-royal-blue text-[13px] font-bold tracking-wide uppercase mb-6">
              Profil Pimpinan Daerah
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-dark-slate mb-8 tracking-tight leading-tight">
              Membangun Kota, <br className="hidden md:block"/> Mengayomi Warga
            </h2>
            
            <div className="prose prose-lg text-muted-slate mb-10 leading-relaxed max-w-none">
              <p>
                "Selamat datang di portal resmi Pemerintah Kota Tangerang. Kami berkomitmen menghadirkan tata kelola pemerintahan yang responsif dan inklusif untuk melayani seluruh lapisan masyarakat. Di era digital ini, inovasi tiada henti adalah kunci untuk mewujudkan kesejahteraan yang merata dan berkelanjutan."
              </p>
            </div>

            <div className="bg-slate-gray p-8 rounded-2xl border border-gray-100">
              <h3 className="font-display text-xl font-bold text-dark-slate mb-4">Visi Kota Tangerang</h3>
              <p className="text-royal-blue font-semibold text-lg md:text-xl leading-relaxed mb-6 italic">
                "Terwujudnya Kota Tangerang yang Sejahtera, Berakhlakul Karimah, dan Berdaya Saing."
              </p>
              
              <h3 className="font-display text-xl font-bold text-dark-slate mb-4">Misi Utama</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-emerald-green shrink-0 mt-0.5" />
                  <span className="text-muted-slate font-medium">Meningkatkan kualitas sumber daya manusia yang berakhlakul karimah.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-emerald-green shrink-0 mt-0.5" />
                  <span className="text-muted-slate font-medium">Mewujudkan tata kelola pemerintahan yang baik (Good Governance).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-emerald-green shrink-0 mt-0.5" />
                  <span className="text-muted-slate font-medium">Membangun infrastruktur perkotaan yang modern dan berkelanjutan.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
