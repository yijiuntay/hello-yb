"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="bg-blue-800 border-b-4 border-black">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1
            className="text-xl md:text-2xl text-yellow-300 cursor-pointer"
            style={{ textShadow: "2px 2px 0px #000" }}
          >
            {t("Header.title")}
          </h1>
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;