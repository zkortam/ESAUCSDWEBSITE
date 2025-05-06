"use client";
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import ParticlesBg from '@/components/ParticlesBg';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const translations = {
  en: {
    heroTitle: 'Egyptian Student Association',
    heroSubtitle: 'UC San Diego',
    heroDesc: 'Celebrating Egyptian culture and heritage at UCSD since May 2025',
    followInstagram: 'Follow us on Instagram',
    joinWhatsapp: 'Join our WhatsApp Group',
    about: 'About Us',
    aboutDesc: 'The Egyptian Student Association at UC San Diego is dedicated to promoting Egyptian culture, heritage, and community on campus. We aim to create a welcoming environment for all students interested in Egyptian culture and provide opportunities for cultural exchange and learning.',
    aboutDesc2: 'Our organization hosts various events throughout the year, including cultural celebrations, educational workshops, and social gatherings. We welcome students of all backgrounds to join us in celebrating the rich history and traditions of Egypt.',
    mission: 'Our Mission',
    missionDesc: 'Promote Egyptian culture and create a strong community at UCSD',
    vision: 'Our Vision',
    visionDesc: 'Be the hub for Egyptian culture and heritage at UCSD',
    community: 'Community',
    communityDesc: 'Join our growing community of Egyptian culture enthusiasts',
    culture: 'Culture',
    cultureDesc: 'Experience the rich heritage of Egypt',
    events: 'Events',
    eventsDesc: 'Participate in exciting cultural events and activities',
    leadership: 'Our Leadership',
    president: 'President',
    vp: 'Vice President',
    presidentDesc: 'Leading the ESA with a vision to promote Egyptian culture and create a strong community at UCSD. With a passion for cultural exchange and community building.',
    vpDesc: 'Supporting the organization\'s mission and helping to coordinate events and activities. Dedicated to fostering cultural understanding and community engagement.',
    upcomingEvents: 'Upcoming Events',
    stayTuned: 'Stay Tuned!',
    eventsDesc2: 'We\'re planning some exciting events to celebrate Egyptian culture at UCSD. Follow us on Instagram to be the first to know about our upcoming activities!',
    contact: 'Get in Touch',
    connectWithUs: 'Connect With Us',
    contactDesc: 'We\'d love to hear from you! Reach out to us through any of the channels below.',
    email: 'Email',
    social: 'Social Media',
    instagram: 'Instagram',
    whatsapp: 'WhatsApp',
    quickLinks: 'Quick Links',
    connect: 'Connect',
    aboutLink: 'About',
    leadershipLink: 'Leadership',
    eventsLink: 'Events',
    contactLink: 'Contact',
    copyright: '© ' + new Date().getFullYear() + ' Egyptian Student Association at UC San Diego. All rights reserved.'
  },
  ar: {
    heroTitle: 'جمعية الطلاب المصريين',
    heroSubtitle: 'جامعة كاليفورنيا سان دييغو',
    heroDesc: 'نحتفل بالثقافة والتراث المصري في جامعة كاليفورنيا سان دييغو منذ مايو 2025',
    followInstagram: 'تابعنا على إنستجرام',
    joinWhatsapp: 'انضم إلى مجموعة واتساب',
    about: 'عن الجمعية',
    aboutDesc: 'جمعية الطلاب المصريين في جامعة كاليفورنيا سان دييغو تهدف إلى تعزيز الثقافة والتراث المصري وبناء مجتمع قوي في الحرم الجامعي. نسعى لخلق بيئة ترحيبية لجميع الطلاب المهتمين بالثقافة المصرية وتوفير فرص للتبادل الثقافي والتعلم.',
    aboutDesc2: 'تنظم جمعيتنا فعاليات متنوعة على مدار العام، بما في ذلك الاحتفالات الثقافية وورش العمل التعليمية والتجمعات الاجتماعية. نرحب بجميع الطلاب من مختلف الخلفيات للانضمام إلينا للاحتفال بتاريخ مصر الغني وتقاليدها.',
    mission: 'مهمتنا',
    missionDesc: 'تعزيز الثقافة المصرية وبناء مجتمع قوي في جامعة كاليفورنيا سان دييغو',
    vision: 'رؤيتنا',
    visionDesc: 'أن نكون مركز الثقافة والتراث المصري في الجامعة',
    community: 'المجتمع',
    communityDesc: 'انضم إلى مجتمعنا المتنامي من محبي الثقافة المصرية',
    culture: 'الثقافة',
    cultureDesc: 'اكتشف التراث المصري الغني',
    events: 'الفعاليات',
    eventsDesc: 'شارك في فعاليات وأنشطة ثقافية ممتعة',
    leadership: 'القيادة',
    president: 'الرئيس',
    vp: 'نائب الرئيس',
    presidentDesc: 'يقود الجمعية برؤية لتعزيز الثقافة المصرية وبناء مجتمع قوي في الجامعة. شغوف بالتبادل الثقافي وبناء المجتمع.',
    vpDesc: 'يدعم مهمة الجمعية ويساعد في تنسيق الفعاليات والأنشطة. ملتزم بتعزيز التفاهم الثقافي والمشاركة المجتمعية.',
    upcomingEvents: 'الفعاليات القادمة',
    stayTuned: 'ترقبوا!',
    eventsDesc2: 'نخطط لفعاليات مثيرة للاحتفال بالثقافة المصرية في الجامعة. تابعنا على إنستجرام لتكون أول من يعرف عن أنشطتنا القادمة!',
    contact: 'تواصل معنا',
    connectWithUs: 'تواصل معنا',
    contactDesc: 'يسعدنا التواصل معكم! تواصلوا معنا عبر أي من القنوات أدناه.',
    email: 'البريد الإلكتروني',
    social: 'وسائل التواصل',
    instagram: 'إنستجرام',
    whatsapp: 'واتساب',
    quickLinks: 'روابط سريعة',
    connect: 'تواصل',
    aboutLink: 'عن الجمعية',
    leadershipLink: 'القيادة',
    eventsLink: 'الفعاليات',
    contactLink: 'تواصل معنا',
    copyright: '© ' + new Date().getFullYear() + ' جمعية الطلاب المصريين في جامعة كاليفورنيا سان دييغو. جميع الحقوق محفوظة.'
  }
};

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const t = translations[language];

  return (
    <main className="min-h-screen">
      <Navigation language={language} onLanguageChange={setLanguage} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden min-h-[calc(80vh+150px)] flex items-center">
        {/* Enhanced Background Effects */}
        <ParticlesBg />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90 pointer-events-none z-0"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {t.heroTitle}
              <span className="block text-primary mt-2">{t.heroSubtitle}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t.heroDesc}
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/ucsdesa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg space-x-2"
              >
                <FaInstagram className="w-6 h-6 mr-2" />
                <span>{t.followInstagram}</span>
              </a>
              <a
                href="https://chat.whatsapp.com/GCaVGPsr9um0Bykb9R6F9Q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-[#25D366] hover:bg-[#25D366]/90 transition-all duration-300 transform hover:scale-105 shadow-lg space-x-2"
              >
                <FaWhatsapp className="w-6 h-6 mr-2" />
                <span>{t.joinWhatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">{t.about}</h2>
          <div className="flex justify-center mb-6">
            <span className="text-2xl font-bold text-primary mr-2">UC San Diego</span>
          </div>
          <p className="text-xl text-gray-600 text-center mb-8">{t.aboutDesc}</p>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                {t.aboutDesc2}
              </p>
              <div className="flex space-x-4 mt-8">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary">{t.mission}</h3>
                  <p className="text-gray-600">{t.missionDesc}</p>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-accent">{t.vision}</h3>
                  <p className="text-gray-600">{t.visionDesc}</p>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{t.community}</h3>
                    <p className="text-gray-600">{t.communityDesc}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{t.culture}</h3>
                    <p className="text-gray-600">{t.cultureDesc}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{t.events}</h3>
                    <p className="text-gray-600">{t.eventsDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{t.leadership}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary shadow-lg">
                  <span className="text-4xl font-bold text-primary">ZK</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{t.president}</h3>
                  <p className="text-primary text-lg">{t.presidentDesc}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {t.vpDesc}
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary shadow-lg">
                  <span className="text-4xl font-bold text-primary">OS</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{t.vp}</h3>
                  <p className="text-primary text-lg">{t.vpDesc}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {t.vpDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{t.upcomingEvents}</h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="w-24 h-24 mx-auto mb-6">
                  <svg className="w-full h-full text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{t.stayTuned}</h3>
                <p className="text-xl text-gray-600">
                  {t.eventsDesc2}
                </p>
                <div className="pt-4">
                  <a
                    href="https://www.instagram.com/ucsdesa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <FaInstagram className="w-6 h-6 mr-2" />
                    <span>{t.followInstagram}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{t.contact}</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.connectWithUs}</h3>
                  <p className="text-gray-600">{t.contactDesc}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">{t.email}</h4>
                    <a href="mailto:zkortam@ucsd.edu" className="text-primary hover:text-primary/80">
                      zkortam@ucsd.edu
                    </a>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">{t.social}</h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.instagram.com/ucsdesa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 flex items-center space-x-2"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span>{t.instagram}</span>
                      </a>
                      <a
                        href="https://chat.whatsapp.com/GCaVGPsr9um0Bykb9R6F9Q"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] hover:text-[#25D366]/80 flex items-center space-x-2"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.298.446-.446.149-.148.223-.297.074-.446-.15-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span>{t.whatsapp}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 relative">
                  <Image
                    src="/images/esa-logo.png"
                    alt="ESA Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">ESA UCSD</h3>
              </div>
              <p className="text-gray-400">
                {t.copyright}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t.quickLinks}</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">{t.aboutLink}</a></li>
                <li><a href="#leadership" className="text-gray-400 hover:text-white transition-colors">{t.leadershipLink}</a></li>
                <li><a href="#events" className="text-gray-400 hover:text-white transition-colors">{t.eventsLink}</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t.contactLink}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t.connect}</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/ucsdesa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t.instagram}
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Egyptian Student Association at UC San Diego. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
