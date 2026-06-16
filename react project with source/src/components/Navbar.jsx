import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

import { useUser } from '../contexts/UserContext';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useUser();
  const { language, changeLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function Sun() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="36px"
        viewBox="0 -960 960 960"
        width="36px"
        fill="#e3e3e3"
      >
        <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
      </svg>
    )
  }
  function Moon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="36px"
        viewBox="0 -960 960 960"
        width="36px"
        fill="#232323"
      >
        <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
      </svg>
    )
  }
  function Settings() {

    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      height="40px"
      viewBox="0 -960 960 960"
      width="40px"
      fill="#e3e3e3">
      <path d="m382-80-18.67-126.67q-17-6.33-34.83-16.66-17.83-10.34-32.17-21.67L178-192.33 79.33-365l106.34-78.67q-1.67-8.33-2-18.16-.34-9.84-.34-18.17 0-8.33.34-18.17.33-9.83 2-18.16L79.33-595 178-767.67 296.33-715q14.34-11.33 32.34-21.67 18-10.33 34.66-16L382-880h196l18.67 126.67q17 6.33 35.16 16.33 18.17 10 31.84 22L782-767.67 880.67-595l-106.34 77.33q1.67 9 2 18.84.34 9.83.34 18.83 0 9-.34 18.5Q776-452 774-443l106.33 78-98.66 172.67-118-52.67q-14.34 11.33-32 22-17.67 10.67-35 16.33L578-80H382Zm55.33-66.67h85l14-110q32.34-8 60.84-24.5T649-321l103.67 44.33 39.66-70.66L701-415q4.33-16 6.67-32.17Q710-463.33 710-480q0-16.67-2-32.83-2-16.17-7-32.17l91.33-67.67-39.66-70.66L649-638.67q-22.67-25-50.83-41.83-28.17-16.83-61.84-22.83l-13.66-110h-85l-14 110q-33 7.33-61.5 23.83T311-639l-103.67-44.33-39.66 70.66L259-545.33Q254.67-529 252.33-513 250-497 250-480q0 16.67 2.33 32.67 2.34 16 6.67 32.33l-91.33 67.67 39.66 70.66L311-321.33q23.33 23.66 51.83 40.16 28.5 16.5 60.84 24.5l13.66 110Zm43.34-200q55.33 0 94.33-39T614-480q0-55.33-39-94.33t-94.33-39q-55.67 0-94.5 39-38.84 39-38.84 94.33t38.84 94.33q38.83 39 94.5 39ZM480-480Z" />
    </svg>
    )
  }
  const baseLink = "px-3 py-2 rounded-full transition duration-300 ease-in-out transform active:scale-95";
  const defaultLinkClass = `${baseLink} text-color-primary hover:text-purple-400 dark:hover:text-accent`;
  const activeLinkClass = ` ${baseLink} bg-[#707070] dark:bg-zinc-700 `;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 space-x-6 ">
      <div className="flex justify-center items-center ">

        <nav className="hidden md:block rounded-full bg-gradient-to-tr from-surface-light to-background-light dark:from-surface dark:to-background transition duration-300
                        px-3 py-2 shadow-lg border-2 border-border-light dark:border-border">
          <div className="text-xl flex ">
            <NavLink draggable={false} to="/" className={({ isActive }) => isActive ? activeLinkClass : defaultLinkClass}>
              {t('home')}
            </NavLink>
            <NavLink draggable={false} to="/development" className={({ isActive }) => isActive ? activeLinkClass : defaultLinkClass}>{t('development')}</NavLink>
            <NavLink draggable={false} to="/about" className={({ isActive }) => isActive ? activeLinkClass : defaultLinkClass}>{t('about')}</NavLink>
            <NavLink draggable={false} to="/contact" className={({ isActive }) => isActive ? activeLinkClass : defaultLinkClass}>{t('contact')}</NavLink>
            {user ? (
              <NavLink draggable={false} to="/profile" className={({ isActive }) => isActive ? activeLinkClass : defaultLinkClass}>{t('profile')}</NavLink>
            ) : (
              <NavLink draggable={false} to="/signin" className={({ isActive }) => isActive ? activeLinkClass : defaultLinkClass}>{t('signIn')}</NavLink>
            )}
          </div>
        </nav>
        <div className="hidden md:flex absolute right-20 space-x-4">
          <button onClick={() => changeLanguage(language === 'en' ? 'ar' : 'en')} className=" cursor-pointer flex items-center justify-center bg-gradient-to-tl from-surface-light to-background-light dark:from-surface dark:to-background
                                                    hover:bg-opacity-90 text-background dark:text-background-light font-bold w-16 h-16 border-2 border-border-light dark:border-border rounded-full text-2xl
                                                    transition duration-300 ease-in-out transform hover:scale-105 active:scale-100 shadow-lg">
            {language === 'en' ? 'عربي' : 'EN'}
          </button>
          <button onClick={toggleTheme} className=" cursor-pointer flex items-center justify-center bg-gradient-to-tl from-surface-light to-background-light dark:from-surface dark:to-background
                                                    hover:bg-opacity-90 text-background font-bold w-16 h-16 border-2 border-border-light dark:border-border rounded-full text-3xl
                                                    transition duration-300 ease-in-out transform hover:scale-105 active:scale-100 shadow-lg">
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="absolute right-4 flex md:hidden ">
        <button
          onClick={toggleMenu} type="button"
          className="inline-flex  items-center justify-center p-2 rounded-xl border  text-color-primary hover:text-accent hover:bg-surface focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent backdrop-blur-md"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
            <svg className="block h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={`
        fixed inset-0 z-50 md:hidden
        ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
      `}
      >
        <div
          onClick={toggleMenu}
          className={`
          absolute inset-0 bg-black transition-opacity duration-300 ease-out
          ${isOpen ? "opacity-50" : "opacity-0"}
          `}
        >
        </div>
        <div
          className={`
          text-3xl space-y-3
          absolute right-0 top-0 h-full w-[65vw] p-5 z-50
          transition duration-300 ease-in-out
          bg-gradient-to-tr from-surface-light to-background-light dark:from-surface dark:to-background
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          ${language === 'ar' ? 'rtl text-right' : 'ltr text-left'}
        `}
        >
          <div className="flex justify-end">

            <button
              onClick={toggleMenu}
              type="button"
              className=" p-2 rounded-md text-color-primary hover:text-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
            >
              <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <NavLink to="/" onClick={toggleMenu} className={({ isActive }) =>
            `block px-3 py-2 rounded-md  ${isActive ? activeLinkClass : defaultLinkClass}`
          }>{t('home')}</NavLink>
          <NavLink to="/development" onClick={toggleMenu} className={({ isActive }) =>
            `block px-3 py-2 rounded-md ${isActive ? activeLinkClass : defaultLinkClass}`
          }>{t('development')}</NavLink>
          <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) =>
            `block px-3 py-2 rounded-md ${isActive ? activeLinkClass : defaultLinkClass}`
          }>{t('about')}</NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) =>
            `block px-3 py-2 rounded-md ${isActive ? activeLinkClass : defaultLinkClass}`
          }>{t('contact')}</NavLink>
          {user ? (
            <NavLink to="/profile" onClick={toggleMenu} className={({ isActive }) =>
              `block px-3 py-2 rounded-md ${isActive ? activeLinkClass : defaultLinkClass}`
            }>{t('profile')}</NavLink>
          ) : (
            <NavLink to="/signin" onClick={toggleMenu} className={({ isActive }) =>
              `block px-3 py-2 rounded-md ${isActive ? activeLinkClass : defaultLinkClass}`
            }>{t('signIn')}</NavLink>
          )}
          <div className="flex justify-center items-center space-x-4">
            <button onClick={() => changeLanguage(language === 'en' ? 'ar' : 'en')} className="cursor-pointer flex items-center justify-center bg-gradient-to-tl from-surface-light to-background-light dark:from-surface dark:to-background
                                                      hover:bg-opacity-90 text-background dark:text-background-light font-bold w-16 h-16 border-2 border-border-light dark:border-border rounded-full text-2xl
                                                      transition duration-300 ease-in-out transform hover:scale-105 active:scale-100 shadow-lg">
              {language === 'en' ? 'عربي' : 'EN'}
            </button>
            <button onClick={toggleTheme} className="cursor-pointer flex items-center justify-center bg-gradient-to-tl from-surface-light to-background-light dark:from-surface dark:to-background
                                                    hover:bg-opacity-90 text-background font-bold w-16 h-16 border-2 border-border-light dark:border-border rounded-full text-3xl
                                                    transition duration-300 ease-in-out transform hover:scale-105 active:scale-100 shadow-lg">
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
