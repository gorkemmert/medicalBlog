'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { logo1, menu, close } from '../../../public';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="w-full h-[120px] z-10 bg-[#ebe6df] fixed drop-shadow-lg relative">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo1} alt="logo" className="opacity-[100%] w-auto h-[80px]" />
        </div>

        {/* Desktop Menü */}
        <div className="hidden md:flex items-center space-x-12 text-base font-bold uppercase font-sans">
          <Link href="/" className="hover:text-green-800 transition">ANASAYFA</Link>
          <Link href="/about" className="hover:text-green-800 transition">HAKKIMIZDA</Link>

          {/* Dropdown Menü */}
          <div 
            className="relative group"
            onMouseOver={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="hover:text-green-800 transition">HİZMETLER</button>
            {servicesOpen && (
              <ul 
                className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2"
                onMouseOver={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/services/beseri-tibbi-urunler">Beşeri Tıbbi Ürünler</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/services/tibbi-cihazlar">Tıbbi Cihazlar</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/services/medikal-ceviri">Medikal Çeviri</Link>
                </li>
              </ul>
            )}
          </div>

          <Link href="/" className="hover:text-green-800 transition">SIKÇA SORULAN SORULAR</Link>
          <Link href="/contact" className="hover:text-green-800 transition">İLETİŞİM</Link>
        </div>

        {/* Mobil Menü Açma/Kapatma Butonu */}
        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          <Image src={open ? close : menu} alt="menu" className="w-[28px] h-[28px]" />
        </div>
      </div>

      {/* Mobil Menü */}
      <ul className={`w-full absolute bg-[#E1D7C6] md:hidden py-4 text-center font-bold uppercase font-sans ${open ? "block" : "hidden"}`}>
        <li className="py-2"><Link href="/" className="hover:text-blue-700 transition">ANASAYFA</Link></li>
        <li className="py-2"><Link href="/about" className="hover:text-blue-700 transition">HAKKIMIZDA</Link></li>
        
        {/* Mobil Dropdown Menü */}
        <li className="py-2">
          <button 
            className="hover:text-blue-700 transition"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            HİZMETLER
          </button>
          {servicesOpen && (
            <ul className="mt-2 bg-white shadow-lg rounded-md py-2">
              <li className="block px-4 py-2 hover:bg-gray-200">
                <Link href="/services/beseri-tibbi-urunler">Beşeri Tıbbi Ürünler</Link>
              </li>
              <li className="block px-4 py-2 hover:bg-gray-200">
                <Link href="/services/tibbi-cihazlar">Tıbbi Cihazlar</Link>
              </li>
              <li className="block px-4 py-2 hover:bg-gray-200">
                <Link href="/services/medikal-ceviri">Medikal Çeviri</Link>
              </li>
            </ul>
          )}
        </li>

        <li className="py-2"><Link href="/" className="hover:text-blue-700 transition">SIKÇA SORULAN SORULAR</Link></li>
        <li className="py-2"><Link href="/contact" className="hover:text-blue-700 transition">İLETİŞİM</Link></li>
      </ul>
    </div>
  );
};

export default Header;
