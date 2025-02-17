import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'next-i18next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import RouteBanner from '@/components/layout/RouteBanner';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage(): React.ReactNode {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('contact.meta.title')}
        description={t('contact.meta.description')}
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-start justify-start">
        <RouteBanner title="contact.title" />
        <ContactForm />
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
