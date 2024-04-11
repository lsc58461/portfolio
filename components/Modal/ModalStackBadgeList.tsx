import { ModalStackBadge } from '..';

interface Props {
  technologyStacks: string[];
}

function ModalStackBadgeList({ technologyStacks }: Props) {
  return (
    <ul className='flex w-full scroll-m-1pxr flex-wrap gap-x-12pxr gap-y-6pxr'>
      {technologyStacks.map((technologyStack, index) => (
        <li key={index}>
          <ModalStackBadge>{technologyStack}</ModalStackBadge>
        </li>
      ))}
    </ul>
  );
}

export default ModalStackBadgeList;
