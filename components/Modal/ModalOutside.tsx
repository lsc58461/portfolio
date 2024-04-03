import { ReactNode } from 'react';

interface Props {
  onClose: () => void;
  children: ReactNode;
}

function ModalOutside({ onClose, children }: Props) {
  return (
    <div
      className='fixed bottom-0pxr right-0pxr z-10 h-screen w-screen'
      onClick={onClose}
    >
      {children}
    </div>
  );
}

export default ModalOutside;
