import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/view/NavBar';
import Providers from '@/providers/provider';

export const metadata: Metadata = {
  title: 'Everlink',
  description: 'Description about Everlink',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
