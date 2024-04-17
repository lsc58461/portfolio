'use client';

import Image from 'next/image';
import { useDelayedCardImage } from '../hooks';

interface Props {
  name: string;
  type: string;
  animationClassName?: string;
  imageSrc: string;
}

function ProjectCard({ name, type, animationClassName, imageSrc }: Props) {
  const { imageUrl } = useDelayedCardImage({ prevUrl: imageSrc, delay: 500 });
  return (
    <div
      className={`${animationClassName} relative flex h-404pxr w-300pxr flex-col items-center gap-50pxr rounded-[14px] border border-[rgba(248,248,248,0.30)] bg-[rgba(124,124,124,0.60)] px-38pxr py-40pxr shadow-projectCard backdrop-blur-[5px] mobile:h-280pxr mobile:w-200pxr mobile:gap-30pxr mobile:px-18pxr mobile:py-20pxr`}
    >
      <div className='relative h-154pxr w-full overflow-hidden rounded-[14px] mobile:h-100pxr'>
        <Image fill src={imageUrl} alt='카드 이미지' />
      </div>
      <div className='w-220pxr text-center'>
        <h2 className='truncate !text-32pxr font-body1' title={name}>
          {name}
        </h2>
        <p className='font-body2'>{type}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
