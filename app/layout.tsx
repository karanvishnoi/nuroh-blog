import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.nuroh.in'),
  title: { default: 'Nuroh Cafe Blog — Coffee, Food & Jaipur Guide', template: '%s | Nuroh Cafe Blog' },
  description: 'Stories from Nuroh Cafe Jaipur — specialty coffee, brunch guides, Jaipur hidden gems, community events, and cafe culture.',
  openGraph: {
    siteName: 'Nuroh Cafe Blog',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://nuroh.in/assets/logo/nuroh-logo-cream.png', width: 800, height: 400 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://blog.nuroh.in' },
  other: { 'google-site-verification': '' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="font-body bg-cream text-coffee min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
