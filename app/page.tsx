'use client';
import Header from '@/Header';
import SideBar from '@/SideBar';
import NavBar from '@/NavBar';
import { NAVBAR_CONFIG, SIDEBAR_CONFIG } from '../constants';
import { Profile, TechnologyStackList } from '@/index';
import ProjectCardList from '@/ProjectCardList';
import { useRef } from 'react';

function Home() {
  const scrollRef = useRef<(HTMLElement | null)[]>([]);

  return (
    <div>
      <Header />
      <div className='flex'>
        <SideBar iconConfig={SIDEBAR_CONFIG} />
        <NavBar categoryConfig={NAVBAR_CONFIG} scrollRef={scrollRef} />
        <div className='relative flex h-2000pxr w-full flex-col items-center overflow-hidden pt-120pxr'>
          <div className='contentContainer absolute -left-100pxr -top-120pxr -z-10'>
            <div className='stars'></div>
            <div className='stars2'></div>
            <div className='stars3'></div>
          </div>
          <section ref={(refundRef) => (scrollRef.current[0] = refundRef)}>
            <Profile />
          </section>
          <section ref={(refundRef) => (scrollRef.current[1] = refundRef)}>
            <TechnologyStackList />
          </section>
          <section ref={(refundRef) => (scrollRef.current[2] = refundRef)}>
            <ProjectCardList />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
