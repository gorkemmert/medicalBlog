'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Örnek importlar (kendi proje dosyalarınıza göre düzenleyin)
import { logo1, menu, close } from '../../../public';

const Header = () => {
  const [open, setOpen] = useState(false); // Mobil menü aç/kapa
  const [servicesOpen, setServicesOpen] = useState(false); // Desktop "Hizmetler" menü
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false); // Mobilde "Hizmetler"

  // Gecikmeli kapanma için bir ref (zamanlayıcıyı tutmak adına)
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  // Menüyü hemen aç
  const handleMouseEnterMenu = () => {
    // Zamanlayıcı varsa iptal et
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setServicesOpen(true);
  };

  // Menüyü gecikmeli kapa
  const handleMouseLeaveMenu = () => {
    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200); // 200ms gecikme
  };

  return (
    <div
      className="
        w-full h-[120px] z-10 bg-[#ebe6df] fixed drop-shadow-lg top-0 left-0 right-0
        flex flex-col justify-between relative
      "
      // DİKKAT: Buradan onMouseLeave kaldırdık
    >
      {/* ÜST MENÜ ALANI */}
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={logo1}
            alt="logo"
            className="opacity-[100%] w-auto h-[80px]"
          />
        </div>

        {/* Desktop Menü */}
        <div className="hidden md:flex items-center space-x-12 text-base font-bold uppercase font-sans">
          <Link href="/" className="hover:text-green-800 transition">
            ANASAYFA
          </Link>
          <Link href="/about" className="hover:text-green-800 transition">
            HAKKIMIZDA
          </Link>

          {/* HİZMETLER (Dropdown) */}
          <div className="relative cursor-pointer">
            <button
              className="hover:text-green-800 transition"
              // Fare butona gelince menüyü aç
              onMouseEnter={handleMouseEnterMenu}
            >
              HİZMETLER
            </button>
          </div>

          <Link href="/faq" className="hover:text-green-800 transition">
            SIKÇA SORULAN SORULAR
          </Link>
          <Link href="/contact" className="hover:text-green-800 transition">
            İLETİŞİM
          </Link>
        </div>

        {/* Mobil Menü Aç/Kapa Butonu */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Image
            src={open ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]"
          />
        </div>
      </div>

      {/* --- DESKTOP DROPDOWN MENÜ (MEGA MENU) --- */}
      {servicesOpen && (
        <div
          className="
            absolute top-full 
            hidden md:block
            bg-white shadow-lg
            z-50
            max-w-[1200px]
            w-full
            left-1/2
            -translate-x-1/2
            mt-2
          "
          // Fare menüye girince kapanma zamanlayıcısı iptal
          onMouseEnter={handleMouseEnterMenu}
          // Fare menüden çıkınca kapanma zamanlayıcısı başlat
          onMouseLeave={handleMouseLeaveMenu}
        >
          {/* İçerik: 4 sütun, padding, vs. */}
          <div className="p-6 grid grid-cols-4 gap-6">
            {/* 1. Sütun: Beşeri Tıbbi Ürünler */}
            <div>
              <h3 className="font-semibold mb-2">Beşeri Tıbbi Ürünler</h3>
              <ul className="space-y-1 text-sm">
                <li className="hover:bg-gray-200 px-2 py-1 rounded">
                  <Link href="/services/beseri-tibbi-urunler/ilac-ruhsatlandirma">
                    İlaç Ruhsatlandırma
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1 rounded">
                  <Link href="/services/beseri-tibbi-urunler/ruhsat-devir">
                    Ruhsat Devir
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1 rounded">
                  <Link href="/services/beseri-tibbi-urunler/ruhsat-yenileme">
                    Ruhsat Yenileme
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1 rounded">
                  <Link href="/services/beseri-tibbi-urunler/varyasyon-basvurulari">
                    Varyasyon Başvuruları
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1 rounded">
                  <Link href="/services/beseri-tibbi-urunler/gmp-basvurulari">
                    GMP Başvuruları
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1 rounded">
                  <Link href="/services/beseri-tibbi-urunler/fiyat-basvurulari">
                    Fiyat Başvuruları
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1 rounded">
                  <Link href="/services/beseri-tibbi-urunler/sgk-basvuru-dosyasi">
                    SGK Başvuru Dosyası Takibi
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1 rounded">
                  <Link href="/services/beseri-tibbi-urunler/satis-izni">
                    Satış İzni
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1 rounded">
                  <Link href="/services/beseri-tibbi-urunler/kub-kt-hazirlama">
                    KÜB/KT Hazırlama
                  </Link>
                </li>
              </ul>
            </div>

            {/* 2. Sütun: Tıbbi Cihazlar */}
            <div>
              <h3 className="font-semibold mb-2">Tıbbi Cihazlar</h3>
              <ul className="space-y-1 text-sm">
                <li className="hover:bg-gray-200 px-2 py-1 rounded">
                  <Link href="/services/tibbi-cihazlar/firma-kaydi">
                    Firma Kaydı
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1 rounded">
                  <Link href="/services/tibbi-cihazlar/belge-kaydi">
                    Belge Kaydı
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1 rounded">
                  <Link href="/services/tibbi-cihazlar/tibbi-cihaz-kaydi">
                    Tıbbi Cihaz Kaydı
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1 rounded">
                  <Link href="/services/tibbi-cihazlar/mdd-mdr">MDD / MDR</Link>
                </li>
              </ul>
            </div>

            {/* 3. Sütun: Medikal Çeviri */}
            <div>
              <h3 className="font-semibold mb-2">Medikal Çeviri</h3>
              <ul className="space-y-1 text-sm">
                <li className="hover:bg-gray-200 px-2 py-1 rounded">
                  <Link href="/services/medikal-ceviri/ruhsat-dosyasi-hazirlama">
                    Ruhsat Dosyası Hazırlama ve Çevirisi
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1 rounded">
                  <Link href="/services/medikal-ceviri/talimat-dokuman-cevirisi">
                    Tıbbi cihaz kullanım talimatı ve doküman çevirisi
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1 rounded">
                  <Link href="/services/medikal-ceviri/bilimsel-tez-makale-arastirma-cevirisi">
                    Bilimsel tez, makale ve araştırma çevirisi
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4. Sütun: Diğer */}
            <div>
              <h3 className="font-semibold mb-2">Diğer</h3>
              <ul className="space-y-1 text-sm">
                <li className="hover:bg-gray-200 px-2 py-1 rounded">
                  <Link href="#">...</Link>
                </li>
                {/* Diğer öğeleri buraya ekleyebilirsiniz */}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* --- MOBİL MENÜ --- */}
      <ul
        className={`
          w-full absolute bg-[#E1D7C6] md:hidden py-4 text-center font-bold uppercase font-sans
          ${open ? 'block' : 'hidden'}
        `}
      >
        <li className="py-2">
          <Link href="/" className="hover:text-blue-700 transition">
            ANASAYFA
          </Link>
        </li>
        <li className="py-2">
          <Link href="/about" className="hover:text-blue-700 transition">
            HAKKIMIZDA
          </Link>
        </li>

        {/* Mobil Dropdown Menü: HİZMETLER */}
        <li className="py-2">
          <button
            className="hover:text-blue-700 transition"
            onClick={() => setServicesMobileOpen(!servicesMobileOpen)}
          >
            HİZMETLER
          </button>

          {servicesMobileOpen && (
            <div className="mt-2 bg-white shadow-lg rounded-md py-4 text-sm px-4 space-y-4 max-h-60 overflow-y-auto">
              {/* 1. Bölüm: Beşeri Tıbbi Ürünler */}
              <div>
                <h3 className="font-semibold mb-2">Beşeri Tıbbi Ürünler</h3>
                <ul className="space-y-1">
                  <li className="hover:bg-gray-200 px-2 py-1 rounded">
                    <Link href="/services/beseri-tibbi-urunler/ilac-ruhsatlandirma">
                      İlaç Ruhsatlandırma
                    </Link>
                  </li>
                  <li className="hover:bg-gray-200 px-2 py-1 rounded">
                    <Link href="/services/beseri-tibbi-urunler/ruhsat-devir">
                      Ruhsat Devir
                    </Link>
                  </li>
                  {/* Diğer öğeler */}
                </ul>
              </div>

              {/* 2. Bölüm: Tıbbi Cihazlar */}
              <div>
                <h3 className="font-semibold mb-2">Tıbbi Cihazlar</h3>
                <ul className="space-y-1">
                  <li className="hover:bg-gray-200 px-2 py-1 rounded">
                    <Link href="/services/tibbi-cihazlar/firma-kaydi">
                      Firma Kaydı
                    </Link>
                  </li>
                  <li className="hover:bg-gray-200 px-2 py-1 rounded">
                    <Link href="/services/tibbi-cihazlar/belge-kaydi">
                      Belge Kaydı
                    </Link>
                  </li>
                  {/* Diğer öğeler */}
                </ul>
              </div>

              {/* 3. Bölüm: Medikal Çeviri */}
              <div>
                <h3 className="font-semibold mb-2">Medikal Çeviri</h3>
                <ul className="space-y-1">
                  <li className="hover:bg-gray-200 px-2 py-1 rounded">
                    <Link href="/services/medikal-ceviri/ruhsat-dosyasi">
                      Ruhsat Dosyası Çevirisi
                    </Link>
                  </li>
                  {/* Diğer öğeler */}
                </ul>
              </div>

              {/* 4. Bölüm: Diğer */}
              <div>
                <h3 className="font-semibold mb-2">Diğer</h3>
                <ul className="space-y-1">
                  <li className="hover:bg-gray-200 px-2 py-1 rounded">
                    <Link href="/services/diger/bilimsel-tez">
                      Bilimsel Tez, Makale Çevirisi
                    </Link>
                  </li>
                  {/* Diğer öğeler */}
                </ul>
              </div>
            </div>
          )}
        </li>

        <li className="py-2">
          <Link href="/faq" className="hover:text-blue-700 transition">
            SIKÇA SORULAN SORULAR
          </Link>
        </li>
        <li className="py-2">
          <Link href="/contact" className="hover:text-blue-700 transition">
            İLETİŞİM
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
