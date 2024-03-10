import Hero from '@/components/shared/home/hero';
import { Navbar } from '@/components/shared/shared';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${inter.className} bg-tfp-blue-100 min-h-screen`}>
      <Navbar />
      <Hero />
    </main>
  );
}
