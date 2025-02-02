'use client'
import Seo from '../../components/Seo';

export default function Contact() {
  return (
    <>
      <Seo title="İletişim" description="Bize ulaşın" />
      <h1 className="text-3xl font-bold">İletişim</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-bold">Adınız</label>
          <input type="text" className="w-full border p-2" />
        </div>
        <div>
          <label className="block text-sm font-bold">Email</label>
          <input type="email" className="w-full border p-2" />
        </div>
        <div>
          <label className="block text-sm font-bold">Mesajınız</label>
          <textarea className="w-full border p-2"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          Gönder
        </button>
      </form>
    </>
  );
}
