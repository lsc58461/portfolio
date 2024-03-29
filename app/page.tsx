import Header from '@/ui/Header';
import SideBar from '@/ui/SideBar';
import { SIDEBAR_CONFIG } from '../constants';

function Home() {
  return (
    <div>
      <Header />
      <div className='flex'>
        <SideBar iconConfig={SIDEBAR_CONFIG} />
      </div>
    </div>
  );
}

export default Home;
