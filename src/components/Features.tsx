import {useTranslations} from 'next-intl';
import { Compass, Clock, ClipboardList, Hash } from 'lucide-react';

export default function Features() {
  const t = useTranslations('Features');
  
  const features = [
    { icon: <ClipboardList className="w-8 h-8 text-emerald-500" />, key: 'tracking' },
    { icon: <Clock className="w-8 h-8 text-emerald-500" />, key: 'prayerTimes' },
    { icon: <Compass className="w-8 h-8 text-emerald-500" />, key: 'qibla' },
    { icon: <Hash className="w-8 h-8 text-emerald-500" />, key: 'dhikr' },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
                <div key={feature.key} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{t(`${feature.key}.title`)}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{t(`${feature.key}.desc`)}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
