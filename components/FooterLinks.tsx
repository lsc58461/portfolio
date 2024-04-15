import Link from 'next/link';
import { IconGithubLarge, IconVelog } from '../public/svgs';

function FooterLinks() {
  const icons = [
    { icon: IconGithubLarge, link: 'https://github.com/lsc58461' },
    { icon: IconVelog, link: 'https://velog.io/@lsc58461' },
  ];

  return (
    <ul className='gap-10pxr flex-row-center'>
      {icons.map((item, index) => (
        <li key={index}>
          <Link href={item.link} target='_blank' rel='noopener noreferrer'>
            <button className='focus:outline-none'>
              <item.icon className='fill-[#9e9e9e]' />
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FooterLinks;
