import Header from '@/Header';
import SideBar from '@/SideBar';
import NavBar from '@/NavBar';
import { NAVBAR_CONFIG, SIDEBAR_CONFIG } from '../constants';
import { Profile, TechnologyStackList } from '@/index';
import ProjectCardList from '@/ProjectCardList';

function Home() {
  return (
    <div>
      <Header />
      <div className='flex'>
        <SideBar iconConfig={SIDEBAR_CONFIG} />
        <NavBar categoryConfig={NAVBAR_CONFIG} />
        <div className='relative flex w-full flex-col items-center overflow-hidden overflow-x-hidden pt-120pxr'>
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
          <ProjectCardList />
        </div>
      </div>
    </div>
  );
}

export default Home;
