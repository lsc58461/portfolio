import { ReactNode } from 'react';

interface Props {
  type: 'submit' | 'button';
  children: ReactNode;
}

function ButtonPrimary({ type, children }: Props) {
  return (
    <button
      type={type}
      className='w-fit rounded-[14px] border border-[#707070] bg-[#323232] px-25pxr py-15pxr font-title3-medium hover:border-[#69dcff]'
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
