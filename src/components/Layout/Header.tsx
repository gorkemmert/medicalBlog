'use client'
import Link from 'next/link';

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <nav className="container mx-auto flex justify-between">
      <div className="text-xl font-bold">Medikal Blog</div>
      <ul className="flex space-x-4">
        <li><Link href="/">Anasayfa</Link></li>
        <li><Link href="/about">Hakkımızda</Link></li>
        <li><Link href="/services">Hizmetler</Link></li>
        <li><Link href="/contact">İletişim</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
