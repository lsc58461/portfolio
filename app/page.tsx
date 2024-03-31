import Header from '@/ui/Header';
import SideBar from '@/ui/SideBar';
import NavBar from '@/ui/NavBar';
import { NAVBAR_CONFIG, SIDEBAR_CONFIG } from '../constants';
import { Profile, TechnologyStackList } from '@/index';

function Home() {
  return (
    <div>
      <Header />
      <div className='flex'>
        <SideBar iconConfig={SIDEBAR_CONFIG} />
        <NavBar categoryConfig={NAVBAR_CONFIG} />
        <div className='relative flex w-full flex-col items-center overflow-x-hidden pt-120pxr'>
          <div className='contentContainer absolute -top-120pxr -z-10 h-full w-full'>
            <div className='stars'></div>
            <div className='stars2'></div>
            <div className='stars3'></div>
          </div>
          <section>
            <Profile />
          </section>
          <section>
            <TechnologyStackList />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
