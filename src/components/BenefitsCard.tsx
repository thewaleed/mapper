"use client";

import { ReactNode } from 'react';

interface BenefitsCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const BenefitsCard = ({ icon, title, description }: BenefitsCardProps) => {
  return (
    <div className="card">
      <div className="text-[#4285F4] mb-4 text-3xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default BenefitsCard; 