"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const t = useTranslations('stats');
  
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-5xl font-bold text-[#4285F4] mb-3">1000+</h3>
            <p className="text-gray-600 text-lg font-medium">{t('activeUsers')}</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-5xl font-bold text-[#4285F4] mb-3">50+</h3>
            <p className="text-gray-600 text-lg font-medium">{t('cities')}</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-5xl font-bold text-[#4285F4] mb-3">95%</h3>
            <p className="text-gray-600 text-lg font-medium">{t('satisfaction')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection; 