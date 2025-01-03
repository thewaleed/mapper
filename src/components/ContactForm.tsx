"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const t = useTranslations('contact');
  
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] to-[#34A853]">
            {t('title')}
          </h2>
          <form className="space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder={t('namePlaceholder')}
                className="w-full p-4 rounded-lg border border-gray-200 focus:border-[#4285F4] focus:ring-2 focus:ring-[#4285F4]/20 transition-all duration-300 outline-none"
              />
              <input
                type="Phone"
                placeholder={t('PhonePlaceholder')}
                className="w-full p-4 rounded-lg border border-gray-200 focus:border-[#4285F4] focus:ring-2 focus:ring-[#4285F4]/20 transition-all duration-300 outline-none"
              />
              <textarea
                placeholder={t('messagePlaceholder')}
                rows={5}
                className="w-full p-4 rounded-lg border border-gray-200 focus:border-[#4285F4] focus:ring-2 focus:ring-[#4285F4]/20 transition-all duration-300 outline-none resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white py-4 px-8 rounded-lg font-medium text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
            >
              {t('submit')}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm; 