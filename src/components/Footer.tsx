import {useTranslations} from 'next-intl';
import {Link} from '../navigation';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');
  
  return (
    <footer className="bg-emerald-950 text-white py-12 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="Farz App" width={48} height={48} className="rounded-xl" />
                <span className="text-2xl font-bold text-emerald-50">Farz App</span>
            </div>
            
            <div className="flex gap-8 text-emerald-200/80">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">{tNav('privacy')}</Link>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">{tNav('terms')}</Link>
                <Link href="/delete-account" className="hover:text-white transition-colors">{t('deleteAccount')}</Link>
            </div>
            
            <p className="text-emerald-400/60 text-sm">
                &copy; {new Date().getFullYear()} Farz App. {t('rights')}
            </p>
        </div>
      </div>
    </footer>
  );
}
