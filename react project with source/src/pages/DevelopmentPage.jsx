import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

const DevelopmentPage = () => {
  const { t } = useLanguage();

  return (
    <div className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-center leading-tight mb-12 text-color-primary drop-shadow-lg">
          {t('devServices')}
        </h1>

        {/* Our Process Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-color-primary">{t('devProcess')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            <Card title={t('discovery')}>
              <p className="text-color-secondary">
                {t('discoveryDesc')}
              </p>
            </Card>
            <Card title={t('design')}>
              <p className="text-color-secondary">
                {t('designDesc')}
              </p>
            </Card>
            <Card title={t('developmentPhase')}>
              <p className="text-color-secondary">
                {t('developmentPhaseDesc')}
              </p>
            </Card>
            <Card title={t('deployment')}>
              <p className="text-color-secondary">
                {t('deploymentDesc')}
              </p>
            </Card>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-color-primary">{t('technologiesWeUse')}</h2>
          <div className="max-w-4xl mx-auto bg-surface p-8 rounded-2xl">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-16 mx-auto mb-2" />
                <p>React</p>
              </div>
              <div className="text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-16 mx-auto mb-2" />
                <p>Node.js</p>
              </div>
              <div className="text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="h-16 mx-auto mb-2" />
                <p>Tailwind CSS</p>
              </div>
              <div className="text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-16 mx-auto mb-2" />
                <p>JavaScript</p>
              </div>
              <div className="text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-16 mx-auto mb-2" />
                <p>TypeScript</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-color-primary">{t('featuredProjects')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <Card title={t('projectOne')}>
              <div className="h-48 bg-primary-dark rounded-lg mb-4 flex items-center justify-center">
                <p className="text-color-secondary">{t('projectScreenshot')}</p>
              </div>
              <p className="text-color-secondary">
                {t('projectOneDesc')}
              </p>
            </Card>
            <Card title={t('projectTwo')}>
              <div className="h-48 bg-primary-dark rounded-lg mb-4 flex items-center justify-center">
                <p className="text-color-secondary">{t('projectScreenshot')}</p>
              </div>
              <p className="text-color-secondary">
                {t('projectTwoDesc')}
              </p>
            </Card>
            <Card title={t('projectThree')}>
              <div className="h-48 bg-primary-dark rounded-lg mb-4 flex items-center justify-center">
                <p className="text-color-secondary">{t('projectScreenshot')}</p>
              </div>
              <p className="text-color-secondary">
                {t('projectThreeDesc')}
              </p>
            </Card>
          </div>
        </section>

        {/* Pricing Section */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12 text-color-primary">{t('pricing')}</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <Card title={t('basicPlan')}>
              <div className="text-center">
                <p className="text-4xl font-bold text-color-primary mb-4">{t('basicPrice')}</p>
                <ul className="text-color-secondary mb-6">
                  <li>{t('basicFeature1')}</li>
                  <li>{t('basicFeature2')}</li>
                  <li>{t('basicFeature3')}</li>
                </ul>
                <Button>{t('choosePlan')}</Button>
              </div>
            </Card>
            <Card title={t('proPlan')} className="border-2 border-accent">
              <div className="text-center">
                <p className="text-4xl font-bold text-color-primary mb-4">{t('proPrice')}</p>
                <ul className="text-color-secondary mb-6">
                  <li>{t('proFeature1')}</li>
                  <li>{t('proFeature2')}</li>
                  <li>{t('proFeature3')}</li>
                </ul>
                <Button>{t('choosePlan')}</Button>
              </div>
            </Card>
            <Card title={t('enterprisePlan')}>
              <div className="text-center">
                <p className="text-4xl font-bold text-color-primary mb-4">{t('enterprisePrice')}</p>
                <ul className="text-color-secondary mb-6">
                  <li>{t('enterpriseFeature1')}</li>
                  <li>{t('enterpriseFeature2')}</li>
                  <li>{t('enterpriseFeature3')}</li>
                </ul>
                <Button>{t('choosePlan')}</Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DevelopmentPage;

