// In App.tsx - add useEffect to handle scrolling when coming from another page
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import StatsStrip from './components/sections/StatsSection';
import Footer from './components/layout/Footer';
import JobOpportunitiesPage from './components/sections/JobOpportunitiesPage';
import YoshonList from './components/sections/YoshonList';
import GoogleAnalytics from './components/GoogleAnalytics';

function HomePage() {
  // Handle scrolling to section when coming from another page
  useEffect(() => {
    const scrollToSection = (sectionId: string) => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    };

    // Check if we need to scroll to a specific section
    const sectionToScroll = sessionStorage.getItem('scrollToSection');
    if (sectionToScroll) {
      scrollToSection(sectionToScroll);
      // Clear the stored section
      sessionStorage.removeItem('scrollToSection');
    }
  }, []);

  return (
    <>
     <GoogleAnalytics />
      <Header />
      <main>
        <Hero />
        <Services />
        <StatsStrip />
        <About />
        <FAQ />
        {/* <AnalyticsDashboard /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job-opportunities" element={<JobOpportunitiesPage />} />
        <Route path="/yoshon-list" element={<YoshonList />} />
      </Routes>
    </Router>
  );
}

export default App;