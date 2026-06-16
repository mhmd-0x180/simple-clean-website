import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border py-12 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Link to="/" className="impact-font text-4xl bg-clip-text hover:opacity-80 transition duration-300">
              Clean Website

            </Link>
            <p className="mt-4 text-sm">
              {t('footerSubtitle')}
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons */}
              <a href="#" className=" hover:text-accent transition-colors duration-300">
                <i className="fab fa-facebook-f"></i> {/* Placeholder for actual icon */}
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                <i className="fab fa-twitter"></i> {/* Placeholder for actual icon */}
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i> {/* Placeholder for actual icon */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">{t('quickLinks')}</h3>
            <ul>
              <li className="mb-2"><Link to="/about" className="hover:text-accent transition-colors duration-300">{t('aboutUs')}</Link></li>
              <li className="mb-2"><Link to="/contact" className="hover:text-accent transition-colors duration-300">{t('contact')}</Link></li>
              <li className="mb-2"><Link to="/" className="hover:text-accent transition-colors duration-300">{t('blog')}</Link></li> {/* Placeholder */}
              <li className="mb-2"><Link to="/" className="hover:text-accent transition-colors duration-300">{t('careers')}</Link></li> {/* Placeholder */}
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">{t('ourServices')}</h3>
            <ul>
              <li className="mb-2"><Link to="/development" className="hover:text-accent transition-colors duration-300">{t('webDevelopment')}</Link></li>
              <li className="mb-2"><Link to="/development" className="hover:text-accent transition-colors duration-300">{t('uiUxDesignFooter')}</Link></li>
              <li className="mb-2"><Link to="/" className="hover:text-accent transition-colors duration-300">{t('seoOptimization')}</Link></li> {/* Placeholder */}
              <li className="mb-2"><Link to="/" className="hover:text-accent transition-colors duration-300">{t('ecommerceSolutionsFooter')}</Link></li> {/* Placeholder */}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">{t('contactUs')}</h3>
            <p className="mb-2">{t('addressValue')}</p>
            <p className="mb-2">{t('email')}: {t('emailValue')}</p>
            <p className="mb-2">{t('phone')}: {t('phoneValue')}</p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Clean Website. {t('allRightsReserved')}</p>
          <div className="flex justify-center space-x-6 mt-2">
            <Link to="/" className="hover:text-accent transition-colors duration-300">{t('privacyPolicy')}</Link>
            <Link to="/" className="hover:text-accent transition-colors duration-300">{t('termsOfService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;