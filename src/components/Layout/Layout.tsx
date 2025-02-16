'use client'
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full flex flex-col justify-between min-h-screen">
    <Header />
    <main className="flex-grow container mx-auto px-6 py-12 max-w-6xl">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
