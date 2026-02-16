import {useTranslations} from 'next-intl';
import {Link} from '../navigation';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
             <Image src="/logo.png" alt="Farz App Logo" width={32} height={32} className="w-8 h-8 rounded-lg" />
             <span className="font-bold text-lg">Farz App</span>
        </div>
        <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Farz App. {t('rights')}.
        </div>
        <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400">{tNav('privacy')}</Link>
            <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400">{tNav('terms')}</Link>
        </div>
      </div>
    </footer>
  );
}
