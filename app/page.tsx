import Header from '@/ui/Header';
import SideBar from '@/ui/SideBar';
import NavBar from '@/ui/NavBar';
import { NAVBAR_CONFIG, SIDEBAR_CONFIG } from '../constants';

function Home() {
  return (
    <div>
      <Header />
      <div className='flex'>
        <SideBar iconConfig={SIDEBAR_CONFIG} />
        <NavBar categoryConfig={NAVBAR_CONFIG} />
      </div>
    </div>
  );
}

export default Home;
