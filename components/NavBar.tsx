import { MutableRefObject, useEffect, useRef, useState } from 'react';

interface Props {
  categoryConfig: string[];
  scrollRef: MutableRefObject<(HTMLElement | null)[]>;
}

function NavBar({ categoryConfig, scrollRef }: Props) {
  const navRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [navIndex, setNavIndex] = useState<number | null>(null);

  useEffect(() => {
    if (navIndex !== null) {
      scrollRef.current[navIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
    setNavIndex(null);
  }, [scrollRef, navIndex]);

  useEffect(() => {
    if (!scrollRef.current) return;

    const changeNavBtnStyle = () => {
      scrollRef.current.forEach((ref, index) => {
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
  }, [scrollRef]);

  return (
    <div className='w-195pxr border-r border-r-[#2B2B2B] px-20pxr pt-37pxr'>
      <div className='sticky top-40pxr flex flex-col items-start gap-32pxr'>
        {categoryConfig.map((category, index) => (
          <button
            key={index}
            ref={(ref) => (navRef.current[index] = ref)}
            className='leading-6 text-[#868686] font-title3-medium'
            onClick={() => setNavIndex(index)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
