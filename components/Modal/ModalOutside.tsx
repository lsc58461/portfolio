import { ReactNode, MouseEvent } from 'react';

interface Props {
  onCloseClick: () => void;
  children: ReactNode;
}

function ModalOutside({ onCloseClick, children }: Props) {
  return (
    <div
      className='fixed bottom-0pxr right-0pxr z-[9999] h-screen w-screen mobile:h-svh tablet:h-svh'
      onClick={onCloseClick}
    >
      {children}
    </div>
  );
}

export default ModalOutside;
