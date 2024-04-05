import { ReactNode } from 'react';
import { ModalButton } from '..';

interface Props {
  onNextClick: () => void;
  onPrevClick: () => void;
  isButtonDisabled: boolean;
  children: ReactNode;
}

function ModalWrapper({
  onNextClick,
  onPrevClick,
  isButtonDisabled,
  children,
}: Props) {
  return (
    <div
      className='absolute left-1/2 top-1/2 z-50 flex w-1220pxr -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-20pxr rounded-[14px] bg-[#323232] px-80pxr py-40pxr shadow-[0px_0px_250px_0px_rgba(0,0,0,0.80)]'
      onClick={(e) => e.stopPropagation()}
    >
      {children}
      <div className='absolute left-20pxr top-1/2 -translate-y-1/2'>
        <ModalButton.navigate
          direction='left'
          onButtonClick={onPrevClick}
          disabled={isButtonDisabled}
        />
      </div>
      <div className='absolute right-20pxr top-1/2 -translate-y-1/2'>
        <ModalButton.navigate
          direction='right'
          onButtonClick={onNextClick}
          disabled={isButtonDisabled}
        />
      </div>
    </div>
  );
}

export default ModalWrapper;
