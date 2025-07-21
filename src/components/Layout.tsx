import React, { memo } from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
}

const Layout = memo(({ children, showHeader = true }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {showHeader && <Header />}
      <main className={`${showHeader ? 'pt-20' : ''} animate-fade-in`}>
        {children}
      </main>
    </div>
  );
});

Layout.displayName = 'Layout';

export default Layout;
