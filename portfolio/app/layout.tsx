import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ليان ستوديو | بورتفوليو مصممة جرافيك',
  description: 'بورتفوليو عربي متكامل لمصممة جرافيك مع عرض أعمال وخدمات وصفحة تواصل.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-slate-950 text-white">
        <Navbar />
        <main className="mx-auto min-h-[80vh] max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
