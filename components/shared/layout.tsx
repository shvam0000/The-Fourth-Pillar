import React from 'react';
import { Navbar, Footer } from './';
import { LayoutProps } from '@/utils/props/props';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
