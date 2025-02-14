import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'next-i18next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Contact from '@/components/misc/Contact';
import RouteBanner from '@/components/layout/RouteBanner';

export default function UsInTheSector(): React.ReactNode {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('us-in-the-sector.meta.title')}
        description={t('us-in-the-sector.meta.description')}
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-start justify-start">
        <RouteBanner title="us-in-the-sector.title" />
        <Contact />
      </main>
      <Footer />
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
