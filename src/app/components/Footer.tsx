"use client";

import React from 'react';
import { useLanguage } from "../context/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-blue-800 border-t-4 border-black mt-auto">
      <div className="container mx-auto px-4 py-4 text-center text-sm">
        <p>{t("Footer.copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;