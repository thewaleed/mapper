"use client";

import { useTranslations } from 'next-intl';

const ContactForm = () => {
  const t = useTranslations('contact');
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">{t('title')}</h2>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder={t('namePlaceholder')}
              className="w-full p-3 rounded-lg border"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder={t('emailPlaceholder')}
              className="w-full p-3 rounded-lg border"
            />
          </div>
          <div>
            <textarea
              placeholder={t('messagePlaceholder')}
              rows={4}
              className="w-full p-3 rounded-lg border"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#4285F4] text-white py-3 rounded-lg hover:bg-opacity-90"
          >
            {t('submit')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm; 