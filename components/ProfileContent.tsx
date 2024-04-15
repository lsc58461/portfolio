import { ReactNode } from 'react';
import {
  IconClip,
  IconContact,
  IconGithub,
  IconMessage,
  IconPeople,
} from '../public/svgs';
import Link from 'next/link';

interface Props {
  type: 'name' | 'phoneNumber' | 'email' | 'github' | 'blog';
  children: ReactNode;
}

function ProfileContent({ type, children }: Props) {
  const ProfileContentConfig = () => {
    switch (type) {
      case 'name':
        return { icon: <IconPeople fill='#868686' />, title: '이름' };
      case 'phoneNumber':
        return { icon: <IconContact fill='#868686' />, title: '전화번호' };
      case 'email':
        return { icon: <IconMessage fill='#868686' />, title: '이메일' };
      case 'github':
        return { icon: <IconGithub fill='#868686' />, title: '깃헙' };
      case 'blog':
        return { icon: <IconClip fill='#868686' />, title: '블로그' };
    }
  };

  return (
    <div className='flex font-light leading-6 font-body2 mobile:flex-col '>
      <div className='flex w-111pxr gap-9pxr !text-20pxr font-body2'>
        {ProfileContentConfig().icon}
        {ProfileContentConfig().title}
      </div>
      {type === 'github' || type === 'blog' ? (
        <Link href={children as string}>
          <p className='hover:underline mobile:text-18pxr'>{children}</p>
        </Link>
      ) : (
        <p className='mobile:text-18pxr'>{children}</p>
      )}
    </div>
  );
}

export default ProfileContent;
