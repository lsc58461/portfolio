import { ReactNode } from 'react';
import { ModalButton } from '..';
import { IconClose } from '../../public/svgs';

interface Props {
  onNextClick: () => void;
  onPrevClick: () => void;
  onCloseClick: () => void;
  isButtonDisabled: boolean;
  children: ReactNode;
}

function ModalWrapper({ onCloseClick, children }: Props) {
  return (
    <div
      className='absolute left-1/2 top-1/2 w-full max-w-1240pxr -translate-x-1/2 -translate-y-1/2 rounded-[14px] bg-[#323232] px-70pxr py-40pxr shadow-[0px_0px_250px_0px_rgba(0,0,0,0.80)] mobile:left-0pxr mobile:top-0pxr mobile:h-svh mobile:w-screen mobile:-translate-x-0pxr mobile:-translate-y-0pxr mobile:rounded-none mobile:px-20pxr mobile:py-55pxr tablet:left-0pxr tablet:top-0pxr tablet:h-svh tablet:w-screen tablet:-translate-x-0pxr tablet:-translate-y-0pxr tablet:rounded-none tablet:p-55pxr tablet:px-20pxr'
      onClick={(e) => e.stopPropagation()}
    >
      {children}

      <button
        type='button'
        onClick={onCloseClick}
        className='absolute right-15pxr top-15pxr'
      >
        <IconClose className='scale-[0.7] fill-white' />
      </button>
    </div>
  );
}

export default ModalWrapper;
