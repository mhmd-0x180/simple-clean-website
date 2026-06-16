import React from 'react';
import Card from '../components/Card'; // Import the Card component
import { useLanguage } from '../contexts/LanguageContext';

const SignInPage = () => {
  const { t } = useLanguage();
  const handleSignIn = () => {
    window.location.href = "api/auth/google";
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full">
        <Card title={t('signIn')}>
          <div className="text-center">
            <p className="text-color-secondary text-xl mb-6">{t('signInToContinue')}</p>
            <button
              onClick={handleSignIn}
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg 
                         transition duration-300 ease-in-out transform  active:scale-98 
"
            >
              {t('signInWithGoogle')}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignInPage;
