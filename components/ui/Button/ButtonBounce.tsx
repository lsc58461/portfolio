import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function ButtonBounce({ children }: Props) {
  return (
    <button className='animated-scale rounded-[30px] bg-[#568290] px-20pxr py-10pxr text-white shadow-button font-body2 hover:bg-[#51B4D3] active:bg-[#81D4EE]'>
      {children}
    </button>
  );
}

export default ButtonBounce;
