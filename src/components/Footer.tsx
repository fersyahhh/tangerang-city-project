import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-gray text-dark-slate pt-24 pb-12 border-t-4 border-royal-blue relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 md:pr-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-wider text-muted-slate uppercase leading-none mb-1">Pemerintah Kota</span>
                <span className="font-display font-extrabold text-2xl text-royal-blue leading-none tracking-tight">TANGERANG</span>
              </div>
            </div>
            <p className="mb-6 font-body text-[15px] leading-relaxed text-muted-slate font-medium">
              Pusat informasi dan layanan digital resmi Pemerintah Kota Tangerang. Dedikasi kami untuk memberikan pelayanan prima yang transparan, inovatif, dan berpusat pada kesejahteraan masyarakat.
            </p>
            <div className="flex items-center gap-4 text-sm font-bold text-emerald-green">
              <span>Jam Operasional Layanan:</span>
              <span className="text-dark-slate">Senin - Jumat (08:00 - 16:00 WIB)</span>
            </div>
          </div>

          {/* Links Cols */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-[14px] font-black tracking-widest uppercase text-muted-slate mb-6">Peta Situs (Sitemap)</h4>
            <ul className="space-y-4 font-medium text-[15px] text-dark-slate">
              <li><a href="https://tangerangkota.go.id/profil" target="_blank" rel="noopener noreferrer" className="hover:text-royal-blue transition-colors block">Profil Pimpinan Daerah</a></li>
              <li><a href="https://tangerangkota.go.id/direktori/opd" target="_blank" rel="noopener noreferrer" className="hover:text-royal-blue transition-colors block">Organisasi Perangkat Daerah (OPD)</a></li>
              <li><a href="https://tangerangkota.go.id/direktori/kecamatan" target="_blank" rel="noopener noreferrer" className="hover:text-royal-blue transition-colors block">Daftar Kecamatan & Kelurahan</a></li>
              <li><a href="https://jdih.tangerangkota.go.id/" target="_blank" rel="noopener noreferrer" className="hover:text-royal-blue transition-colors block">JDIH (Jaringan Dokumentasi Hukum)</a></li>
              <li><a href="https://lpse.tangerangkota.go.id/" target="_blank" rel="noopener noreferrer" className="hover:text-royal-blue transition-colors block">Portal Layanan Pengadaan (LPSE)</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-[14px] font-black tracking-widest uppercase text-muted-slate mb-6">Kontak Resmi & Darurat</h4>
            <ul className="space-y-6 text-[15px] text-dark-slate font-medium">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pure-white border border-gray-200 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-royal-blue" />
                </div>
                <div className="mt-1 leading-relaxed">
                  <span className="block font-bold text-dark-slate mb-1">Pusat Pemerintahan Kota Tangerang</span>
                  <span className="text-muted-slate">Jl. Satria Sudirman No. 1, Sukaasih<br />Kecamatan Tangerang, Kota Tangerang<br/>Banten 15111</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-pure-white border border-gray-200 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-royal-blue" />
                </div>
                <div>
                  <span className="block font-bold text-dark-slate mb-0.5">Call Center Darurat</span>
                  <span className="text-amber-yellow font-black text-lg">112</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-pure-white border border-gray-200 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-royal-blue" />
                </div>
                <div>
                  <span className="block font-bold text-dark-slate mb-0.5">Email Pengaduan & Informasi</span>
                  <span className="text-muted-slate">humas@tangerangkota.go.id</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-slate font-medium">
          <p>&copy; {new Date().getFullYear()} Pemerintah Kota Tangerang. Dikelola oleh Diskominfo Kota Tangerang.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="hover:text-royal-blue transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-royal-blue transition-colors">Syarat & Ketentuan Layanan</a>
            <a href="#" className="hover:text-royal-blue transition-colors">Keterbukaan Informasi Publik (KIP)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
