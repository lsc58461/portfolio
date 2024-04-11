import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function StackBadge({ children }: Props) {
  return (
    <div className='p-8 rounded-[30px] border border-white'>{children}</div>
  );
}

export default StackBadge;
