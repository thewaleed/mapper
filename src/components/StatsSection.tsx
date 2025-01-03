"use client";

import { useTranslations } from 'next-intl';

const StatsSection = () => {
  const t = useTranslations('stats');
  
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#4285F4]">1000+</h3>
            <p className="text-gray-600">{t('activeUsers')}</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#4285F4]">50+</h3>
            <p className="text-gray-600">{t('cities')}</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#4285F4]">95%</h3>
            <p className="text-gray-600">{t('satisfaction')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 