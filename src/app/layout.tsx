'use client'
import '@/app/globals.css';
import Layout from '../components/Layout/Layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}