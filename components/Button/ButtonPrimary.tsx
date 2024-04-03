import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function ButtonPrimary({ children }: Props) {
  return (
    <button className='rounded-2xl border border-[#707070] bg-[#3D3D3D] px-30pxr py-20pxr leading-9 text-white font-title1'>
      {children}
    </button>
  );
}

export default ButtonPrimary;
