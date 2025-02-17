import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { usePopup } from '@/contexts/Popup.context';

type FormFields = {
  name: string;
  surname: string;
  email: string;
  message: string;
};

function ErrorLabel({
  message,
}: {
  message: string | undefined;
}): React.ReactNode {
  const { t } = useTranslation();
  if (!message) return null;

  return <span className="text-xs font-light text-red-500">{t(message)}</span>;
}

function ContactForm() {
  const { activateAlertPopup } = usePopup();

  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onFormSubmit = async (data: {
    name: string;
    surname: string;
    email: string;
    message: string;
  }) => {
    activateAlertPopup(t('contact.response.sending'), 'loading');
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      activateAlertPopup(t('contact.response.success'), 'success');
    } else {
      activateAlertPopup(t('contact.response.error'), 'error');
    }
  };

  return (
    <section className="m-0 flex w-full items-start justify-center gap-0 bg-white p-0">
      <section
        data-aos="fade-in"
        data-aos-delay="750"
        className="max-w-theme font-theme flex w-full flex-col items-start justify-start gap-14 px-5 py-20"
      >
        <section className="flex flex-col items-start justify-start gap-5 text-left">
          <h3 className="text-4xl font-medium text-zinc-900">
            {t('contact.form.title')}
          </h3>
          <p className="text-sm font-light text-zinc-700">
            {t('contact.form.content')}
          </p>
        </section>
        <section className="m-0 flex w-full flex-wrap items-start justify-start gap-12 p-0">
          <form
            className="grid w-full max-w-xl grid-cols-1 place-content-start items-stretch gap-x-5 gap-y-2.5 lg:grid-cols-2"
            onSubmit={handleSubmit(onFormSubmit)}
          >
            <label
              htmlFor="name"
              className="relative col-span-full flex w-full flex-col items-start justify-start gap-2 lg:col-span-1"
            >
              <span className="text-sm font-light text-zinc-500 group-focus-within:text-zinc-900">
                {t('contact.form.inputs.name')}
              </span>
              <input
                className="w-full rounded-sm p-2 text-sm font-normal outline-2 outline-zinc-300 transition-all duration-150 focus:outline-zinc-500"
                type="text"
                {...register('name', {
                  required: 'contact.form.inputs.errors.required',
                })}
              />
              <ErrorLabel message={errors.name?.message as any} />
            </label>
            <label
              htmlFor="SURNAME"
              className="group relative col-span-full flex w-full flex-col items-start justify-start gap-2 lg:col-span-1"
            >
              <span className="text-sm font-light text-zinc-500 group-focus-within:text-zinc-900">
                {t('contact.form.inputs.surname')}
              </span>
              <input
                className="w-full rounded-sm p-2 text-sm font-normal outline-2 outline-zinc-300 transition-all duration-150 focus:outline-zinc-500"
                type="text"
                {...register('surname', {
                  required: 'contact.form.inputs.errors.required',
                })}
              />
              <ErrorLabel message={errors.surname?.message as any} />
            </label>
            <label
              htmlFor="email"
              className="group relative col-span-full flex w-full flex-col items-start justify-start gap-2"
            >
              <span className="text-sm font-light text-zinc-500 group-focus-within:text-zinc-900">
                {t('contact.form.inputs.email')}
              </span>
              <input
                className="w-full rounded-sm p-2 text-sm font-normal outline-2 outline-zinc-300 transition-all duration-150 focus:outline-zinc-500"
                type="text"
                {...register('email', {
                  required: 'contact.form.inputs.errors.required',
                  validate: (value) => {
                    const emailRegex =
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                    return (
                      emailRegex.test(value) ||
                      'contact.form.inputs.errors.invalid-email'
                    );
                  },
                })}
              />
              <ErrorLabel message={errors.email?.message as any} />
            </label>
            <label
              htmlFor="message"
              className="group relative col-span-full flex w-full flex-col items-start justify-start gap-2"
            >
              <span className="text-sm font-light text-zinc-500 group-focus-within:text-zinc-900">
                {t('contact.form.inputs.message')}
              </span>
              <textarea
                className="min-h-16 w-full rounded-sm p-2 text-sm font-normal outline-2 outline-zinc-300 transition-all duration-150 focus:outline-zinc-500"
                {...register('message', {
                  required: 'contact.form.inputs.errors.required',
                })}
              />
              <ErrorLabel message={errors.message?.message as any} />
            </label>
            <section className="col-span-full mt-2.5 w-full">
              <button
                className="cursor-pointer rounded-sm border border-zinc-900 bg-zinc-900 px-8 py-2 text-white transition-all duration-150 hover:bg-white hover:text-black active:scale-90"
                type="submit"
              >
                {t('contact.form.inputs.submit')}
              </button>
            </section>
          </form>
          <section className="flex max-w-sm flex-col items-start justify-start gap-7.5">
            <section className="flex flex-col items-start justify-start gap-2.5">
              <h4 className="text-lg font-medium text-zinc-600">
                {t('contact.map-details.address.0.title')}
              </h4>
              <p className="text-sm text-zinc-500">
                İsdök Sanayi Sitesi 9.Blok No:10 Başakşehir / İstanbul
              </p>
            </section>
            <section className="flex flex-col items-start justify-start gap-2.5">
              <h4 className="text-lg font-medium text-zinc-600">
                {t('contact.map-details.address.1.title')}
              </h4>
              <p className="text-sm text-zinc-500">
                İ.O.S.B. Pik Dökümcüler Sanayi Sitesi B4 Blok, No:15 Başakşehir
                / İstanbul
              </p>
            </section>
            <section className="flex flex-col items-start justify-start gap-2.5">
              <a
                href="mailto:info@muratgeridonusum.com"
                className="text-sm text-zinc-500 hover:underline"
              >
                info@muratgeridonusum.com
              </a>
              <a
                href="tel:+902124863773"
                className="text-sm text-zinc-500 hover:underline"
              >
                +90 (212) 486 37 73
              </a>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default ContactForm;
