import { Navbar } from '@/components/shared';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Navbar />
      <Head />
      <body className="bg-tfp-blue-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
