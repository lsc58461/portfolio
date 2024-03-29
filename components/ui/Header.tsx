import React from 'react';
import {
  IconArrowLeft,
  IconArrowRight,
  IconLogo,
  IconReadingGlasses,
} from '../../public/svgs';
import Link from 'next/link';

function Header() {
  return (
    <header className='flex h-46pxr w-full items-center justify-between border-b border-b-[#2B2B2B] px-12pxr'>
      <Link href={'/'}>
        <IconLogo />
      </Link>
      <div className='flex items-center gap-16pxr'>
        <div className='flex gap-14pxr'>
          <button>
            <IconArrowLeft />
          </button>
          <button>
            <IconArrowRight />
          </button>
        </div>
        <div className='w-432pxr gap-10pxr rounded-[10px] border border-[#454545] bg-[#242424] py-4pxr flex-center'>
          <IconReadingGlasses />
          <h1 className='leading-6 text-white font-body2'>
            이정윤의 포트폴리오
          </h1>
        </div>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
