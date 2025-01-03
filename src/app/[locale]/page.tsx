import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import { LangSwitcher } from '@/components/LangSwitcher';
import { MapPin, Users, Star, TrendingUp, MessageCircle } from 'lucide-react';
import StatsSection from '@/components/StatsSection';
import BenefitsCard from '@/components/BenefitsCard';
import ContactForm from '@/components/ContactForm';

export default function LocalePage() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Language Switcher */}
      <div className="fixed top-4 right-4">
        <LangSwitcher />
      </div>

      {/* Hero Section */}
      <section className="bg-[#4285F4] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl mb-8">{t('hero.description')}</p>
              <button className="bg-white text-[#4285F4] px-8 py-3 rounded-full font-bold hover:bg-opacity-90">
                {t('hero.cta')}
              </button>
            </div>
            <div className="md:w-1/2">
              <MapPin className="w-64 h-64 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitsCard
              icon={<Users className="w-8 h-8" />}
              title={t('benefits.visibility.title')}
              description={t('benefits.visibility.description')}
            />
            <BenefitsCard
              icon={<Star className="w-8 h-8" />}
              title={t('benefits.trust.title')}
              description={t('benefits.trust.description')}
            />
            <BenefitsCard
              icon={<TrendingUp className="w-8 h-8" />}
              title={t('benefits.traffic.title')}
              description={t('benefits.traffic.description')}
            />
            <BenefitsCard
              icon={<MessageCircle className="w-8 h-8" />}
              title={t('benefits.engagement.title')}
              description={t('benefits.engagement.description')}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
} 