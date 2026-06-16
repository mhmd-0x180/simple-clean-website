import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider, useUser } from './contexts/UserContext';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components (Lazy Loaded)
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const DevelopmentPage = lazy(() => import('./pages/DevelopmentPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

const AppContent = () => {
  const { fetchUser } = useUser();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Router>
      <div className="bg-background-light dark:bg-background  transition duration-300  min-h-screen flex flex-col">
        <Navbar />
        <main className="grow ">
          <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/development" element={<DevelopmentPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
