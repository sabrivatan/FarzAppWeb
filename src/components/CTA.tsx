import {useTranslations} from 'next-intl';
import { Download, ArrowRight } from 'lucide-react';

export default function CTA() {
  const t = useTranslations('CTA');
  
  return (
    <section className="py-32 bg-emerald-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-emerald-950">{t('title')}</h2>
        <p className="text-2xl text-emerald-800 mb-12 max-w-3xl mx-auto leading-relaxed">{t('subtitle')}</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#" className="flex items-center gap-3 px-10 py-5 bg-emerald-950 text-white rounded-2xl hover:bg-emerald-900 transition-all hover:scale-105 font-bold shadow-2xl shadow-emerald-900/20">
                <Download size={28} />
                <span className="text-xl">Google Play</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-10 py-5 bg-white text-emerald-950 rounded-2xl hover:bg-emerald-100 transition-all hover:scale-105 font-bold shadow-xl border-2 border-emerald-950/5">
                <Download size={28} />
                <span className="text-xl">App Store</span>
            </a>
        </div>
      </div>
    </section>
  );
}
