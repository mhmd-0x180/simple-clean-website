import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { useUser } from '../contexts/UserContext';
import { useLanguage } from '../contexts/LanguageContext';

const ProfilePage = () => {
  const { user, logout, loading } = useUser();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (window.confirm(t('areYouSureLogout'))) {
      await logout();
      navigate('/');
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        {t('loading')}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <Card title={t('accessDenied')}>
            <div className="text-center">
              <p className="text-red-400 mb-6">
                {t('mustBeLoggedIn')}
              </p>

              <div className="transition duration-300 ease-in-out transform active:scale-98">
                <Link
                  to="/signin"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                >
                  {t('goToSignIn')}
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <Card title={t('userProfile')}>
          <div className="flex flex-col items-center">
            <img
              src={user.profilePicture}
              alt="Profile"
              crossOrigin="anonymous"
              className="rounded-full w-24 h-24 mb-4 border-2 border-border-light dark:border-border"
            />
            <div className="text-lg text-center mb-6">
              <p className="text-color-primary font-semibold">
                {user.displayName}
              </p>
              <p className="text-color-secondary">{user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="text-xl cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl
                         transition duration-300 ease-in-out transform  active:scale-98 "
            >
              {t('logout')}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
