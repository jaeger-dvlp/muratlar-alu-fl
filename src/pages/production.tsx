import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'next-i18next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Contact from '@/components/misc/Contact';
import RouteBanner from '@/components/layout/RouteBanner';

export default function Production(): React.ReactNode {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('production.meta.title')}
        description={t('production.meta.description')}
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-start justify-start">
        <RouteBanner title="production.title" />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
