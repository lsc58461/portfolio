'use client';

import { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import { NAVBAR_CONFIG, SIDEBAR_CONFIG } from '../constants';
import {
  ContactForm,
  Footer,
  Header,
  NavBar,
  Profile,
  ProjectCardList,
  SideBar,
  StarAnimation,
  TechnologyStackList,
} from '@/index';

function Home() {
  const scrollRef = useRef<(HTMLElement | null)[]>([]);

  return (
    <>
      <Header />
      <div className='flex mobile:flex-col'>
        <SideBar iconConfig={SIDEBAR_CONFIG} />
        <NavBar categoryConfig={NAVBAR_CONFIG} scrollRef={scrollRef} />
        <main className='relative flex h-full w-full flex-col items-center overflow-hidden px-40pxr py-120pxr mobile:py-80pxr'>
          <section ref={(refundRef) => (scrollRef.current[0] = refundRef)}>
            <Profile />
          </section>
          <section
            ref={(refundRef) => (scrollRef.current[1] = refundRef)}
            className='pb-120pxr pt-80pxr'
          >
            <TechnologyStackList />
          </section>
          <section
            ref={(refundRef) => (scrollRef.current[2] = refundRef)}
            className='py-120pxr'
          >
            <ProjectCardList />
          </section>
          <section
            ref={(refundRef) => (scrollRef.current[3] = refundRef)}
            className='w-full max-w-767pxr py-120pxr'
          >
            <ContactForm />
          </section>
          <footer className='py-120pxr'>
            <Footer />
          </footer>
          <StarAnimation />
        </main>
      </div>
      <ToastContainer position='top-right' theme='dark' />
    </>
  );
}

export default Home;
