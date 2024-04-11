import { ReactNode, MouseEvent } from 'react';

interface Props {
  onCloseClick: () => void;
  children: ReactNode;
}

function ModalOutside({ onCloseClick, children }: Props) {
  return (
    <div
      className='fixed bottom-0pxr right-0pxr h-screen w-screen'
      onClick={onCloseClick}
    >
      {children}
    </div>
  );
}

export default ModalOutside;
