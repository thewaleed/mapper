"use client";

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';

export const LangSwitcher = () => {
  const router = useRouter();
  const currentLocale = useLocale();
  
  const languages = [
    { 
      code: 'ar', 
      label: 'عربي',
      flag: '/flags/sa.svg'
    },
    { 
      code: 'en', 
      label: 'English',
      flag: '/flags/gb.svg'
    },
    { 
      code: 'fr', 
      label: 'Français', 
      flag: '/flags/fr.svg'
    }
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.push(`/${newLocale}`);
  };

  return (
    <div className="relative">
      <select 
        onChange={(e) => handleLanguageChange(e.target.value)}
        value={currentLocale}
        className="appearance-none w-full px-4 py-2 pl-10 pr-8 bg-white rounded-lg shadow-lg border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="flex items-center gap-2">
            {lang.label}
          </option>
        ))}
      </select>
      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5">
        <Image
          src={languages.find(l => l.code === currentLocale)?.flag || ''}
          alt={currentLocale}
          width={20}
          height={20}
        />
      </div>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}; 