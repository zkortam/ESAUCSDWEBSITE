'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navigation({ language, onLanguageChange }: { language: 'en' | 'ar', onLanguageChange: (lang: 'en' | 'ar') => void }) {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-12 h-12 relative mr-3">
                <Image
                  src="/images/esa-logo.png"
                  alt="ESA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                ESA <span className="text-primary">UCSD</span>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {language === 'en' ? 'About' : 'عن الجمعية'}
              </Link>
              <Link href="#leadership" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {language === 'en' ? 'Leadership' : 'القيادة'}
              </Link>
              <Link href="#events" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {language === 'en' ? 'Events' : 'الفعاليات'}
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {language === 'en' ? 'Contact' : 'تواصل معنا'}
              </Link>
            </div>
            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(language === 'en' ? 'ar' : 'en')}
              className="ml-4 px-3 py-1 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Switch language"
            >
              {language === 'en' ? 'العربية' : 'EN'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 