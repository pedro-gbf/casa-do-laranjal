import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';

const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-casca">
      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900"
      >
        <MapPin className="w-6 h-6" />
      </a>

      <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="pt">PT</option>
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="fr">FR</option>
      </select>
    </header>
  );
};

export default Header;
