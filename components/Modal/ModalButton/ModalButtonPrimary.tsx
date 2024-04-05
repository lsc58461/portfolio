import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function ModalButtonPrimary({ children }: Props) {
  return (
    <button className='h-32pxr text-nowrap rounded-[30px] bg-[#568290] px-20pxr py-10pxr !text-13pxr text-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.15)] flex-row-center font-caption2 hover:bg-[#51b4d3] active:bg-[#81d4ee]'>
      {children}
    </button>
  );
}

export default ModalButtonPrimary;
