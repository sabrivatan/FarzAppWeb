import {useTranslations} from 'next-intl';
import { Download } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('Hero');
  
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-8 max-w-7xl mx-auto gap-12">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {t('subtitle')}
        </p>
        <div className="flex gap-4 pt-4">
            <a href="#" className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                <Download size={20} />
                <div className="flex flex-col items-start leading-none">
                    <span className="text-xs">Get it on</span>
                    <span className="font-bold text-lg">Google Play</span>
                </div>
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                <Download size={20} />
                 <div className="flex flex-col items-start leading-none">
                    <span className="text-xs">Download on the</span>
                    <span className="font-bold text-lg">App Store</span>
                </div>
            </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-64 h-[500px] bg-gray-200 dark:bg-gray-800 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden flex items-center justify-center">
            <span className="text-gray-400">App Screenshot</span>
        </div>
      </div>
    </section>
  );
}
