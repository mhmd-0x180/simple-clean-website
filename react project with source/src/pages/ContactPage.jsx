import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Card title={t('contactInfo')} >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary-light">{t('address')}</h3>
                <p className="text-color-secondary">{t('addressValue')}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-light">{t('email')}</h3>
                <p className="text-color-secondary">{t('emailValue')}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-light">{t('phone')}</h3>
                <p className="text-color-secondary">{t('phoneValue')}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-light">{t('workingHours')}</h3>
                <p className="text-color-secondary">{t('workingHoursValue')}</p>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-color-secondary hover:text-accent transition-colors duration-300 text-2xl">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-color-secondary hover:text-accent transition-colors duration-300 text-2xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-color-secondary hover:text-accent transition-colors duration-300 text-2xl">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <Card title={t('sendMessage')}>
            <form className="grid grid-cols-1 gap-6">
              <input 
                type="text" 
                placeholder={t('yourName')} 
                className="dark:bg-background border border-border rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-accent  text-color-primary"
              />
              <input 
                type="email" 
                placeholder={t('yourEmail')} 
                className="dark:bg-background border border-border rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-accent  text-color-primary"
              />
              <input 
                type="text" 
                placeholder={t('subject')} 
                className="dark:bg-background border border-border rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-accent  text-color-primary"
              />
              <textarea 
                placeholder={t('yourMessage')} 
                rows="6" 
                className="dark:bg-background border border-border rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-accent  text-color-primary"
              ></textarea>
              <Button 
                type="submit" 
              >
                {t('sendMessageBtn')}
              </Button>
            </form>
          </Card>
        </div>
      </div>
      
    </div>
  );
};

export default ContactPage;
