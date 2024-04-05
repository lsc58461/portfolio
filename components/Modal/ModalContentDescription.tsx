import { ReactNode } from 'react';

interface Props {
  projectOrder: string;
  children: ReactNode;
}

function ModalContentDescription({ projectOrder, children }: Props) {
  return (
    <section className='h-487pxr w-501pxr flex-[1_0_0%] overflow-hidden overflow-y-scroll '>
      <div className='flex min-h-487pxr w-full flex-col gap-20pxr border border-[#4d4d4d] p-20pxr'>
        <h3 className='leading-[79%] font-h1-semibold'>{projectOrder}</h3>
        <p className='!font-light font-caption1-medium'>{children}</p>
      </div>
    </section>
  );
}

export default ModalContentDescription;
