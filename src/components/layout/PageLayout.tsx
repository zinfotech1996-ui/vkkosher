// components/layout/PageLayout.tsx
import React from 'react';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;