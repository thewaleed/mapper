"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxu0orbXXX6J5AeWU_5azuGLPF30QlHDQ5IkG_JWNqlc6Zlb7EB_v_teZb57tCgBu_qUQ/exec'; // ضع رابط Google Apps Script هنا

const ContactForm = () => {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    formDataObj.append('phone', formData.phone);
    formDataObj.append('message', formData.message);

    try {
      const response = await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataObj
      });

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {t('title')}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('namePlaceholder')}
                required
                disabled={isSubmitting}
                className="w-full p-4 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none disabled:opacity-50"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('PhonePlaceholder')}
                required
                disabled={isSubmitting}
                className="w-full p-4 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none disabled:opacity-50"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('messagePlaceholder')}
                rows={5}
                disabled={isSubmitting}
                className="w-full p-4 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none resize-none disabled:opacity-50"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 px-8 rounded-lg font-medium text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? '...' : t('submit')}
            </motion.button>
            
            {submitStatus === 'success' && (
              <p className="text-green-500 text-center">Form submitted successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;