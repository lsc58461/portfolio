import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
