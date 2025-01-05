"use client";

import { useTranslations, useLocale } from "next-intl";
import { LangSwitcher } from "@/components/LangSwitcher";
import { Users, Star, TrendingUp, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import StatsSection from "@/components/StatsSection";
import BenefitsCard from "@/components/BenefitsCard";
import ContactForm from "@/components/ContactForm";
import { MapIcon } from "@/components/MapIcon";

export default function LocalePage() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+212760067272', '_blank');
  };

  return (
    <div className={`min-h-screen ${isRTL ? "rtl" : "ltr"}`}>
      {/* Language Switcher */}
      <div className="fixed top-8 right-8 z-50">
        <LangSwitcher />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-secondary/10 via-primary/5 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-24 left-12 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-24 right-12 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-40 pt-36 pb-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 z-10"
            >
              <h1 className="text-5xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
                {t("hero.title")}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                {t("hero.description")}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-primary via-accent to-secondary text-white px-10 py-5 rounded-full text-lg font-medium shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              >
                {t("hero.cta")}
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2 relative z-10"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl transform rotate-6" />
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl">
                  <div className="p-10">
                    <MapIcon />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <BenefitsCard
              icon={<Users className="w-8 h-8" />}
              title={t("benefits.visibility.title")}
              description={t("benefits.visibility.description")}
            />
            <BenefitsCard
              icon={<Star className="w-8 h-8" />}
              title={t("benefits.trust.title")}
              description={t("benefits.trust.description")}
            />
            <BenefitsCard
              icon={<TrendingUp className="w-8 h-8" />}
              title={t("benefits.traffic.title")}
              description={t("benefits.traffic.description")}
            />
            <BenefitsCard
              icon={<MessageCircle className="w-8 h-8" />}
              title={t("benefits.engagement.title")}
              description={t("benefits.engagement.description")}
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
