"use client";

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

export const LangSwitcher = () => {
  const router = useRouter();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { 
      code: 'ar', 
      label: 'عربي',
      flag: '/assets/morocco.png'
    },
    { 
      code: 'en', 
      label: 'English',
      flag: '/assets/united-states.png'
    },
    { 
      code: 'fr', 
      label: 'Français', 
      flag: '/assets/france.png'
    }
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.push(`/${newLocale}`);
    setIsOpen(false);
  };

  const currentLang = languages.find(l => l.code === currentLocale);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-lg border border-gray-200 hover:border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
      >
        <Image
          src={currentLang?.flag || ''}
          alt={currentLocale}
          width={20}
          height={20}
          className="rounded-sm"
        />
        <span>{currentLang?.label}</span>
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors duration-150
                ${currentLocale === lang.code ? 'bg-primary/5 text-primary' : 'text-gray-700'}
              `}
            >
              <Image
                src={lang.flag}
                alt={lang.code}
                width={20}
                height={20}
                className="rounded-sm"
              />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}; 