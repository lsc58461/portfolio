import React from 'react';
import {
  IconArrowLeft,
  IconArrowRight,
  IconLogo,
  IconReadingGlasses,
} from '../public/svgs';
import Link from 'next/link';

function Header() {
  return (
    <header className='flex h-46pxr w-full items-center justify-between gap-40pxr border-b border-b-[#2B2B2B] px-12pxr'>
      <Link href={'/'}>
        <IconLogo />
      </Link>
      <div className='flex w-full max-w-432pxr items-center gap-16pxr'>
        <div className='flex gap-14pxr mobile:hidden'>
          <button>
            <IconArrowLeft fill='#868686' />
          </button>
          <button>
            <IconArrowRight fill='#868686' />
          </button>
        </div>
        <div className='w-full gap-10pxr rounded-[10px] border border-[#454545] bg-[#242424] px-10pxr py-4pxr flex-row-center'>
          <IconReadingGlasses fill='#868686' />
          <h1 className=' whitespace-nowrap leading-6 font-body2 mobile:text-14pxr'>
            이정윤의 포트폴리오
          </h1>
        </div>
      </div>
      <div />
    </header>
  );
}

export default Header;
