import {useTranslations} from 'next-intl';
import PolicyLayout from '@/components/PolicyLayout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  const t = useTranslations('TermsOfService');
  
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <PolicyLayout title={t('title')}>
         <p>{t('lastUpdated')}: {new Date().toLocaleDateString()}</p>
        <section className="mt-8 space-y-4">
            <p>{t('intro')}</p>
             <h2>1. {t('section1.title')}</h2>
            <p>{t('section1.content')}</p>
        </section>
      </PolicyLayout>
      <Footer />
    </main>
  );
}
