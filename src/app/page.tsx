'use client'
import Seo from '../components/Seo';

export default function Home() {
  return (
    <>
      <Seo
        title="Anasayfa"
        description="Medikal çeviri ve ilaç ruhsatlandırma hizmetleri"
      />
      <h1 className="text-3xl font-bold">Hoşgeldiniz!</h1>
      <p>Medikal çeviri ve ruhsatlandırma alanında uzman kadromuzla hizmetinizdeyiz.</p>
    </>
  );
}