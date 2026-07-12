import React from 'react';
import { PieChart, Download, ExternalLink } from 'lucide-react';

const TransparencySection: React.FC = () => {
  return (
    <section className="py-24 bg-pure-white border-t border-gray-100 relative overflow-hidden">
      {/* Decorative abstract mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-green/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-5/12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-green/10 rounded-full text-emerald-green text-[13px] font-bold tracking-wide uppercase mb-6">
              Transparansi Publik
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-dark-slate mb-6 tracking-tight leading-tight">
              Akuntabilitas Tata <br className="hidden md:block" /> Kelola Pemerintahan
            </h2>
            <p className="text-muted-slate text-base md:text-lg leading-relaxed mb-8">
              Pemerintah Kota Tangerang berkomitmen penuh dalam menyajikan data keterbukaan informasi publik, mulai dari realisasi anggaran daerah hingga laporan kekayaan pejabat.
            </p>
            
            <div className="flex flex-col gap-4">
              <a href="https://ppid.tangerangkota.go.id/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 rounded-xl border border-gray-200 hover:border-royal-blue hover:shadow-md transition-all group bg-pure-white w-full text-left">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-gray flex items-center justify-center text-royal-blue group-hover:bg-royal-blue group-hover:text-pure-white transition-colors">
                    <Download size={18} />
                  </div>
                  <span className="font-bold text-[15px] text-dark-slate">Laporan Keterangan Pertanggungjawaban (LKPJ)</span>
                </div>
              </a>
              <a href="https://elhkpn.kpk.go.id/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 rounded-xl border border-gray-200 hover:border-royal-blue hover:shadow-md transition-all group bg-pure-white w-full text-left">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-gray flex items-center justify-center text-royal-blue group-hover:bg-royal-blue group-hover:text-pure-white transition-colors">
                    <ExternalLink size={18} />
                  </div>
                  <span className="font-bold text-[15px] text-dark-slate">Akses LHKPN Pejabat Kota (KPK RI)</span>
                </div>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="bg-slate-gray p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm relative">
              <div className="absolute top-8 right-8 text-royal-blue/20">
                <PieChart size={64} />
              </div>
              <h3 className="font-display text-2xl font-bold text-dark-slate mb-4">Pilar Akuntabilitas Kota</h3>
              <p className="text-sm font-medium text-muted-slate mb-8 leading-relaxed">
                Sebagai wujud tata kelola pemerintahan yang baik (Good Corporate Governance), Pemerintah Kota Tangerang secara konsisten menerapkan prinsip transparansi dalam setiap aspek pembangunan.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-pure-white border border-gray-200 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-emerald-green font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-slate mb-1">Opini WTP 10x Berturut-turut</h4>
                    <p className="text-sm text-muted-slate font-medium">Penghargaan Wajar Tanpa Pengecualian dari BPK RI atas laporan keuangan daerah yang akuntabel.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-pure-white border border-gray-200 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-amber-yellow font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-slate mb-1">Pengadaan Barang & Jasa Terbuka</h4>
                    <p className="text-sm text-muted-slate font-medium">Seluruh proses lelang proyek daerah dilakukan secara elektronik melalui LPSE yang dapat diakses publik.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-pure-white border border-gray-200 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-royal-blue font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-slate mb-1">Keterlibatan Masyarakat (Musrenbang)</h4>
                    <p className="text-sm text-muted-slate font-medium">Perencanaan pembangunan selalu melibatkan elemen masyarakat dari tingkat kelurahan hingga kota.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
