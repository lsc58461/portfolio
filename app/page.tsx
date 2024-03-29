'use client';
import Header from '@/ui/Header';
import SideBar from '@/ui/SideBar';
import NavBar from '@/ui/NavBar';
import { NAVBAR_CONFIG, SIDEBAR_CONFIG } from '../constants';
import { Profile } from '@/index';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const contentContainerEl = document.querySelector('.contentContainer');
    const snowCount = 100;

    const addSnow = () => {
      const snowDiv = document.createElement('div');
      snowDiv.className = 'snow';
      if (contentContainerEl) {
        contentContainerEl.appendChild(snowDiv);
      }
    };

    for (let i = 0; i < snowCount; i++) {
      addSnow();
    }

    return () => {
      const snowDivs = document.querySelectorAll('.snow');
      snowDivs.forEach((snowDiv) => snowDiv.remove());
    };
  }, []);

  return (
    <div>
      <Header />
      <div className='flex'>
        <SideBar iconConfig={SIDEBAR_CONFIG} />
        <NavBar categoryConfig={NAVBAR_CONFIG} />
        <div className='relative flex w-full justify-center overflow-x-hidden pt-120pxr'>
          <div className='contentContainer absolute -top-120pxr -z-10 h-full w-full'></div>
          <section>
            <Profile />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
