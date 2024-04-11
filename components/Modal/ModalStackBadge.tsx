import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function ModalStackBadge({ children }: Props) {
  return (
    <div className='text-nowrap rounded-[30px] border border-[#4d4d4d] p-8pxr text-[#c3c3c3] font-caption2'>
      {children}
    </div>
  );
}

export default ModalStackBadge;
