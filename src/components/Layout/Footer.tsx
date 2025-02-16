'use client'
const Footer = () => (
  <footer className="bg-gray-900 text-white py-6">
    <div className="container mx-auto max-w-6xl text-center">
      <p>&copy; {new Date().getFullYear()} Medikal Blog. Tüm hakları saklıdır.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="#" className="hover:text-gray-400">Facebook</a>
        <a href="#" className="hover:text-gray-400">Twitter</a>
        <a href="#" className="hover:text-gray-400">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
