import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function ModalContentsSection({ children }: Props) {
  return <section className='flex h-487pxr gap-60pxr'>{children}</section>;
}

export default ModalContentsSection;
