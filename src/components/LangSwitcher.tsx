"use client";

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export const LangSwitcher = () => {
  const router = useRouter();
  const currentLocale = useLocale();
  
  const languages = [
    { code: 'ar', label: 'عربي' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' }
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.push(`/${newLocale}`);
  };

  return (
    <select 
      onChange={(e) => handleLanguageChange(e.target.value)}
      value={currentLocale}
      className="px-4 py-2 bg-white rounded-md shadow-sm"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}; 