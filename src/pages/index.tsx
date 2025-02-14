import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'next-i18next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Banner from '@/components/homepage/Banner';
import Counts from '@/components/homepage/Counts';
import VisionMision from '@/components/homepage/VisionMision';
import Companies from '@/components/homepage/Companies';
import Contact from '@/components/misc/Contact';

export default function Home(): React.ReactNode {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('home.meta.title')}
        description={t('home.meta.description')}
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-start justify-center">
        <Banner />
        <Counts />
        <VisionMision />
        <Companies />
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
