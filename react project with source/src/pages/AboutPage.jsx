import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-48 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-color-primary drop-shadow-lg">
            {t('aboutPageTitle')}
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-color-secondary font-light">
            {t('aboutPageSubtitle')}
          </p>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-color-primary">{t('ourPhilosophy')}</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title={t('designFirst')}>
            <p className="text-color-secondary">
              {t('designFirstDesc')}
            </p>
          </Card>
          <Card title={t('technologyDriven')}>
            <p className="text-color-secondary">
              {t('technologyDrivenDesc')}
            </p>
          </Card>
          <Card title={t('clientCentric')}>
            <p className="text-color-secondary">
              {t('clientCentricDesc')}
            </p>
          </Card>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-auto rounded-lg overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Our team" className="absolute inset-0 w-full h-full object-cover"/>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 ">{t('ourStory')}</h2>
            <p className="text-lg  mb-4">
              {t('ourStoryDesc1')}
            </p>
            <p className="text-lg ">
              {t('ourStoryDesc2')}
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-color-primary">{t('meetTheTeam')}</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <div>
            <img className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" alt="Team member"/>
            <h3 className="text-xl font-bold text-color-primary">{t('alexDoe')}</h3>
            <p className="text-color-secondary">{t('leadDeveloper')}</p>
          </div>
          <div>
            <img className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop" alt="Team member"/>
            <h3 className="text-xl font-bold text-color-primary">{t('janeSmith')}</h3>
            <p className="text-color-secondary">{t('leadDesigner')}</p>
          </div>
          <div>
            <img className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop" alt="Team member"/>
            <h3 className="text-xl font-bold text-color-primary">{t('samWilson')}</h3>
            <p className="text-color-secondary">{t('projectManager')}</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-primary-dark to-primary-light">
        <h2 className="text-4xl font-bold mb-6 text-color-primary">{t('readyToBuildAmazing')}</h2>
        <p className="text-xl text-color-secondary mb-8">
          {t('letsChat')}
        </p>
        <Button>
          {t('getInTouch')}
        </Button>
      </section>
    </div>
  );
};

export default AboutPage;