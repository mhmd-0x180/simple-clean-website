import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button.jsx';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import feature1 from '../assets/feature1.webp';
import feature2 from '../assets/feature2.webp';
import feature3 from '../assets/feature3.webp';


const HomePage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0 ">

            <h1 className="text-5xl title-font text-color-primary duration-300 font-extrabold text-[6rem] lg:text-[12rem]  leading-tight mb-6 drop-shadow-lg ">
              {t('homePageTitle')}
            </h1>
            <p className="text-center text-lg sm:text-2xl mb-4 lg:mb-8 text-color-secondary duration-300 font-light">
              {t('homePageSubtitle')}
            </p>
            <div className="text-center">

              <Button className={'text-5xl'}>
                {t('startNow')}
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Services Overview Section */}
      <section className="relative py-28 px-6 lg:px-16 overflow-hidden ">

        <h2 className="text-5xl font-bold text-center mb-24 text-color-primary tracking-tight">
          {t('coreServices')}
        </h2>

        <Card className="space-y-32 max-w-6xl mx-auto">
          {[
            {
              title: t('webDevelopment'),
              desc: t('webDevelopmentDesc'),
              items: [t('frontendDevelopment'), t('backendDevelopment'), t('apiIntegration')],
              imageSrc: feature1,
            },
            {
              title: t('uiUxDesign'),
              desc: t('uiUxDesignDesc'),
              items: [t('wireframingPrototyping'), t('userResearch'), t('responsiveDesign')],
              imageSrc: feature2,
            },
            {
              title: t('ecommerceSolutions'),
              desc: t('ecommerceSolutionsDesc'),
              items: [t('customStorefronts'), t('paymentGatewayIntegration'), t('inventoryManagement')],
              imageSrc: feature3,
            },
          ].map((service, i) => (
            <div
              key={i}
              className={`flex flex-col lg:flex-row items-center gap-16 mb-4 lg:mb-8 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              <div className="flex-1 ">
                <h3 className="text-3xl font-semibold mb-4 text-color-primary">
                  {service.title}
                </h3>
                <p className="text-color-secondary mb-6 leading-relaxed text-lg">
                  {service.desc}
                </p>
                <ul className="space-y-2 text-color-secondary">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1 relative">
                <img
                  src={service.imageSrc}
                  alt={service.title}
                  className="relative w-80 h-64 object-cover rounded-2xl mx-auto transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>

            </div>
          ))}
        </Card>
      </section>



      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-dark to-primary-light">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-color-primary">{t('whyChooseNimbus')}</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <Card title={t('expertTeam')}>
              <p className="text-color-secondary">
                {t('expertTeamDesc')}
              </p>
            </Card>
            <Card title={t('tailoredSolutions')}>
              <p className="text-color-secondary">
                {t('tailoredSolutionsDesc')}
              </p>
            </Card>
            <Card title={t('agileDevelopment')}>
              <p className="text-color-secondary">
                {t('agileDevelopmentDesc')}
              </p>
            </Card>
            <Card title={t('comprehensiveSupport')}>
              <p className="text-color-secondary">
                {t('comprehensiveSupportDesc')}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-color-primary">{t('whatOurClientsSay')}</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <Card>
            <p className="italic text-color-secondary mb-4">
              {t('testimonial1')}
            </p>
            <p className="font-semibold text-color-primary">{t('testimonial1Author')}</p>
          </Card>
          <Card>
            <p className="italic text-color-secondary mb-4">
              {t('testimonial2')}
            </p>
            <p className="font-semibold text-color-primary">{t('testimonial2Author')}</p>
          </Card>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-primary-dark">
        <h2 className="text-4xl font-bold mb-6 text-color-primary">{t('readyToBuild')}</h2>
        <p className="text-xl text-color-secondary mb-8">
          {t('letsBuildSomethingGreat')}
        </p>
        <Button >
          {t('contactUsToday')}
        </Button>
      </section>
    </div>
  );
};

export default HomePage;
