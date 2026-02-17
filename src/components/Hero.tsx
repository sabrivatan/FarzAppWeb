import {useTranslations} from 'next-intl';
import { Download } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('Hero');
  
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 px-4 md:px-8 max-w-7xl mx-auto gap-12 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-[3rem] mt-8 shadow-2xl shadow-emerald-100/50 border border-emerald-50">
      <div className="flex-1 space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-emerald-950 leading-tight">
          {t('title')}
        </h1>
        <p className="text-xl text-emerald-800/80 leading-relaxed max-w-lg">
          {t('subtitle')}
        </p>
        <div className="flex gap-4 pt-4 flex-col sm:flex-row">
            <a href="#" className="flex items-center gap-3 px-8 py-4 bg-emerald-950 text-emerald-50 rounded-2xl hover:bg-emerald-900 transition-all hover:scale-105 shadow-xl shadow-emerald-900/20">
                <Download size={28} className="text-emerald-200" />
                <div className="flex flex-col items-start leading-none">
                    <span className="text-xs text-emerald-200/80 mb-1">{t('googlePlay')}</span>
                    <span className="font-bold text-lg">Google Play</span>
                </div>
            </a>
            <a href="#" className="flex items-center gap-3 px-8 py-4 bg-white text-emerald-950 border-2 border-emerald-100 rounded-2xl hover:border-emerald-200 transition-all hover:scale-105 shadow-xl shadow-emerald-900/5">
                <Download size={28} className="text-emerald-600" />
                 <div className="flex flex-col items-start leading-none">
                    <span className="text-xs text-emerald-800/60 mb-1">{t('appStore')}</span>
                    <span className="font-bold text-lg">App Store</span>
                </div>
            </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center py-8">
        <div className="relative w-[320px] h-[640px] bg-emerald-950 rounded-[3rem] border-8 border-emerald-950 shadow-2xl shadow-emerald-500/20 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-all duration-500">
            <img 
              src="/dashboard-preview.jpg" 
              alt="Farz App Dashboard" 
              className="w-full h-full object-cover"
            />
        </div>
      </div>
    </section>
  );
}
