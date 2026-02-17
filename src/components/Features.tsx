import {useTranslations} from 'next-intl';
import { Calculator, Palette, TrendingUp, Shield } from 'lucide-react';

export default function Features() {
  const t = useTranslations('Features');
  
  const features = [
    { icon: <Calculator className="w-8 h-8 text-emerald-500" />, key: 'smartCalculation' },
    { icon: <Palette className="w-8 h-8 text-emerald-500" />, key: 'design' },
    { icon: <TrendingUp className="w-8 h-8 text-emerald-500" />, key: 'dashboard' },
    { icon: <Shield className="w-8 h-8 text-emerald-500" />, key: 'privacy' },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-emerald-950">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
                <div key={feature.key} className="bg-emerald-50/30 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-emerald-100/50 hover:border-emerald-200 group">
                    <div className="mb-6 p-4 bg-white rounded-2xl inline-block shadow-sm group-hover:scale-110 transition-transform">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-emerald-900">{t(`${feature.key}.title`)}</h3>
                    <p className="text-emerald-800/70 leading-relaxed">{t(`${feature.key}.desc`)}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
