import { Footer, NavBar, Sections, SideBar, StarAnimation } from '@/index';
import { NAVBAR_CONFIG, SIDEBAR_CONFIG } from '../constants';

function Home() {
  return (
    <>
      <div className='flex h-full mobile:flex-col'>
        <SideBar iconConfig={SIDEBAR_CONFIG} />
        <NavBar categoryConfig={NAVBAR_CONFIG} />
        <main className='relative flex h-full w-full flex-col items-center overflow-hidden px-40pxr py-120pxr mobile:py-80pxr'>
          <Sections />
          <footer className='py-120pxr'>
            <Footer />
          </footer>
          <StarAnimation />
        </main>
      </div>
    </>
  );
}

export default Home;
