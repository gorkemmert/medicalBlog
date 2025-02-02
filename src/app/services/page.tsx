'use client'
import Seo from '../../components/Seo';

export default function Services() {
  return (
    <>
      <Seo title="Hizmetler" description="Hizmetlerimiz hakkında bilgi" />
      <h1 className="text-3xl font-bold">Hizmetlerimiz</h1>
      <ul className="list-disc pl-5">
        <li>Medikal Çeviri</li>
        <li>İlaç Ruhsatlandırma</li>
        <li>Regülasyon Danışmanlığı</li>
      </ul>
    </>
  );
}
