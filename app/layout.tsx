import type { Metadata } from 'next';
import '../styles/global.css';
import '../styles/snow.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'JeongYun Portfolio',
  description: '이정윤의 포트폴리오입니다.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='ko'>
      <body className='bg-[#181818]'>{children}</body>
    </html>
  );
}
