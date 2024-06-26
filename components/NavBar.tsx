'use client';

import { useScrollRefStore } from '../hooks/index';
import { useEffect, useRef, useState } from 'react';

interface Props {
  categoryConfig: string[];
}

function NavBar({ categoryConfig }: Props) {
  const navRef = useRef<(HTMLButtonElement | null)[]>([]);
  const { refs } = useScrollRefStore();
  const [navIndex, setNavIndex] = useState<number | null>(null);

  useEffect(() => {
    if (navIndex !== null) {
      refs[navIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
    setNavIndex(null);
  }, [refs, navIndex]);

  useEffect(() => {
    if (!refs) return;

    const changeNavBtnStyle = () => {
      refs.forEach((ref, index) => {
        if (ref && ref.offsetTop - window.innerHeight / 2 < window.scrollY) {
          navRef.current.forEach((nav, navIndex) => {
            if (!nav) return;
            nav.classList.remove('text-white');

            if (navIndex === index) {
              nav.classList.add('text-white');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', changeNavBtnStyle);

    return () => {
      window.removeEventListener('scroll', changeNavBtnStyle);
    };
  }, [refs]);

  return (
    <nav className='z-[9999] w-195pxr border-r border-r-[#2b2b2b] bg-[#181818] px-20pxr pt-37pxr mobile:sticky mobile:top-0pxr mobile:w-full mobile:border mobile:border-l-0 mobile:border-r-0 mobile:border-t-0 mobile:border-b-[#2b2b2b] mobile:px-15pxr mobile:py-20pxr'>
      <div className='sticky top-40pxr flex flex-col items-start gap-32pxr mobile:relative mobile:top-0pxr mobile:flex-row mobile:gap-20pxr'>
        {categoryConfig.map((category, index) => (
          <button
            key={index}
            ref={(ref) => (navRef.current[index] = ref)}
            className='leading-6 text-[#868686] font-title3-medium mobile:!text-16pxr'
            onClick={() => setNavIndex(index)}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
