import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function ModalContentDescriptionTitle({ children }: Props) {
  return <h4 className='pb-8pxr !font-title3-medium'>| {children} |</h4>;
}

export default ModalContentDescriptionTitle;
