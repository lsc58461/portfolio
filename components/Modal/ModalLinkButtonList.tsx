import Link from 'next/link';
import { ModalButton } from '..';
import { Link as ILink } from '../../constants/PROJECT_CONFIG';
import { IconClip } from '../../public/svgs';

interface Props {
  Links: ILink[];
}

function ModalLinkButtonList({ Links }: Props) {
  return (
    <div className='w-modalImageSection absolute bottom-0pxr gap-14pxr bg-[linear-gradient(0deg,rgba(50,50,50,0.8)_0%,rgba(50,50,50,0.6)_29%,rgba(50,50,50,0)_100%)] py-16pxr flex-row-center'>
      <IconClip className='fill-white' />
      {Links.map((link, index) => (
        <Link
          href={link.url}
          key={index}
          target='_blank'
          rel='noopener noreferrer'
        >
          <ModalButton.primary>{link.name}</ModalButton.primary>
        </Link>
      ))}
    </div>
  );
}

export default ModalLinkButtonList;
