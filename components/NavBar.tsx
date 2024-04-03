import React from 'react';

interface Props {
  categoryConfig: string[];
}

function NavBar({ categoryConfig }: Props) {
  return (
    <div className='w-195pxr border-r border-r-[#2B2B2B] px-20pxr pt-37pxr'>
      <div className='sticky top-40pxr flex flex-col items-start gap-32pxr'>
        {categoryConfig.map((category, index) => (
          <button
            key={index}
            className='leading-6 text-[#868686] font-title3-medium'
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
