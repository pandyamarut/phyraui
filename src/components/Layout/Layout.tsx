// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => (
//   <div className="flex flex-col min-h-screen">
//     <Header />
//     <main className="flex-grow">{children}</main>
//     <Footer />
//   </div>
// );

// export default Layout;



// src/components/Layout/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default Layout;