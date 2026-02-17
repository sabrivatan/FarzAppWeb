import {Link} from '../navigation';
import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('Navigation');
  
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm border-b border-gray-100">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="Farz App Logo" width={40} height={40} className="w-10 h-10 rounded-lg" />
        <span className="text-xl font-bold text-emerald-600">Farz App</span>
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/" className="hover:text-emerald-600 font-medium transition-colors">{t('home')}</Link>
        <Link href="#features" className="hover:text-emerald-600 font-medium transition-colors">{t('features')}</Link>
      </div>
    </nav>
  );
}
