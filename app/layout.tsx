import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { Header, NavBar, SideBar } from '@/index';
import { NAVBAR_CONFIG, SIDEBAR_CONFIG } from '../constants';
import '../styles/global.css';
import '../styles/snow.css';
import 'react-toastify/dist/ReactToastify.css';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'JeongYun Portfolio',
  description: '이정윤의 포트폴리오입니다.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='ko'>
      <body className='bg-[#181818]'>
        <Header />
        {children}
        <ToastContainer position='top-right' theme='dark' />
        <div id='modal' />
      </body>
    </html>
  );
}
