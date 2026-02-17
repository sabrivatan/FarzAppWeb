import {useTranslations} from 'next-intl';
import { Ban, Layout, MousePointerClick } from 'lucide-react';

export default function WhyFarz() {
  const t = useTranslations('WhyFarz');
  
  const items = [
    { icon: <Layout className="w-12 h-12 text-emerald-600 mb-4" />, key: 'modern' },
    { icon: <MousePointerClick className="w-12 h-12 text-emerald-600 mb-4" />, key: 'easy' },
    { icon: <Ban className="w-12 h-12 text-emerald-600 mb-4" />, key: 'allInOne' },
  ];

  return (
    <section className="py-32 bg-emerald-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-emerald-950">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {items.map((item) => (
                <div key={item.key} className="flex flex-col items-center text-center group bg-white p-8 rounded-[2rem] shadow-xl shadow-emerald-900/5 hover:-translate-y-2 transition-all duration-300 border border-emerald-100">
                    <div className="bg-emerald-50 p-6 rounded-2xl mb-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-emerald-900">{t(`items.${item.key}.title`)}</h3>
                    <p className="text-emerald-800/70 text-lg leading-relaxed">{t(`items.${item.key}.desc`)}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
