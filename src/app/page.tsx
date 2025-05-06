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
      <section className="relative pt-24 pb-20 px-2 sm:pt-32 sm:pb-32 sm:px-4 lg:px-8 bg-white overflow-hidden min-h-[calc(80vh+150px)] flex items-center">
        {/* Enhanced Background Effects */}
        <ParticlesBg />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90 pointer-events-none z-0"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-60 h-60 sm:w-96 sm:h-96 bg-primary/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 sm:w-96 sm:h-96 bg-accent/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto relative w-full">
          <div className="text-center px-2 sm:px-0">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {t.heroTitle}
              <span className="block text-primary mt-2">{t.heroSubtitle}</span>
            </h1>
            <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
              {t.heroDesc}
            </p>
            <div className="flex flex-col xs:flex-row justify-center gap-4 xs:gap-4 w-full max-w-xs xs:max-w-none mx-auto">
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
      <section id="about" className="relative py-16 sm:py-24 px-2 sm:px-4 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">{t.about}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4">{t.aboutDesc}</p>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">{t.aboutDesc2}</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="flex-1 bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border-t-4 border-primary">
                  <div className="mb-2 text-2xl text-primary font-bold">{t.mission}</div>
                  <div className="text-gray-600">{t.missionDesc}</div>
                </div>
                <div className="flex-1 bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border-t-4 border-accent">
                  <div className="mb-2 text-2xl text-accent font-bold">{t.vision}</div>
                  <div className="text-gray-600">{t.visionDesc}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 bg-primary/5 rounded-xl p-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">{t.community}</div>
                  <div className="text-gray-600 text-sm">{t.communityDesc}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-accent/5 rounded-xl p-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">{t.culture}</div>
                  <div className="text-gray-600 text-sm">{t.cultureDesc}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-secondary/10 rounded-xl p-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">{t.events}</div>
                  <div className="text-gray-600 text-sm">{t.eventsDesc}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-16 sm:py-24 px-2 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">{t.leadership}</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-[100px] h-[100px] rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary shadow-lg mb-4">
                <span className="text-4xl font-bold text-primary">ZK</span>
              </div>
              <span className="block text-lg font-semibold text-gray-900 mb-1">Zakaria Kortam</span>
              <span className="text-primary text-base font-medium mb-2">{t.president}</span>
              <p className="text-gray-600 text-base leading-relaxed">{t.presidentDesc}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-[100px] h-[100px] rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary shadow-lg mb-4">
                <span className="text-4xl font-bold text-primary">OS</span>
              </div>
              <span className="block text-lg font-semibold text-gray-900 mb-1">Omar Salem</span>
              <span className="text-primary text-base font-medium mb-2">{t.vp}</span>
              <p className="text-gray-600 text-base leading-relaxed">{t.vpDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 sm:py-24 px-2 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">{t.upcomingEvents}</h2>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center max-w-xl w-full">
              <div className="w-24 h-24 mb-6 flex items-center justify-center rounded-full bg-primary/10">
                <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t.stayTuned}</h3>
              <p className="text-lg text-gray-600 mb-4">{t.eventsDesc2}</p>
              <a href="https://www.instagram.com/ucsdesa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <FaInstagram className="w-6 h-6 mr-2" />
                <span>{t.followInstagram}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-2 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">{t.contact}</h2>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center max-w-xl w-full">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.connectWithUs}</h3>
              <p className="text-gray-600 mb-8">{t.contactDesc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">{t.email}</h4>
                  <a href="mailto:zkortam@ucsd.edu" className="text-primary hover:text-primary/80 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 12H8m8 0l-8-8m8 8l-8 8" /></svg>
                    zkortam@ucsd.edu
                  </a>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">{t.social}</h4>
                  <div className="flex flex-col gap-3 items-center">
                    <a href="https://www.instagram.com/ucsdesa" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 flex items-center gap-2">
                      <FaInstagram className="w-6 h-6" />
                      <span>{t.instagram}</span>
                    </a>
                    <a href="https://chat.whatsapp.com/GCaVGPsr9um0Bykb9R6F9Q" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-[#25D366]/80 flex items-center gap-2">
                      <FaWhatsapp className="w-6 h-6" />
                      <span>{t.whatsapp}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 sm:py-12 mt-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 relative">
                  <Image src="/images/esa-logo.png" alt="ESA Logo" fill className="object-contain" />
                </div>
                <h3 className="text-xl font-bold">ESA UCSD</h3>
              </div>
              <p className="text-gray-400">{t.copyright}</p>
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
              <div className="flex flex-col gap-2">
                <a href="https://www.instagram.com/ucsdesa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <FaInstagram className="w-6 h-6" />
                  <span>{t.instagram}</span>
                </a>
                <a href="https://chat.whatsapp.com/GCaVGPsr9um0Bykb9R6F9Q" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-white transition-colors flex items-center gap-2">
                  <FaWhatsapp className="w-6 h-6" />
                  <span>{t.whatsapp}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Egyptian Student Association at UC San Diego. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
