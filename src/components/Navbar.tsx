import {Link} from '../navigation';
import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('Navigation');
  
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="Farz App Logo" width={40} height={40} className="w-10 h-10 rounded-lg" />
        <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">Farz App</span>
      </Link>
      <div className="flex gap-4 items-center">
        <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400">{t('home')}</Link>
        <Link href="#features" className="hover:text-emerald-600 dark:hover:text-emerald-400">{t('features')}</Link>
        <Link href="#download" className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors">{t('download')}</Link>
      </div>
    </nav>
  );
}
