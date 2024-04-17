'use client';

import { useDelayedCardImage } from '../hooks';
import Image from 'next/image';

interface Props {
  order: number;
  customStyle?: string;
  name: string;
  type: string;
  imageSrc: string;
}

function ProjectAnimationCard({
  order,
  customStyle,
  name,
  type,
  imageSrc,
}: Props) {
  const { imageUrl } = useDelayedCardImage({ prevUrl: imageSrc, delay: 500 });

  const orderByClassName = () => {
    switch (order) {
      case 1:
        return '-z-10 top-61pxr mobile:top-40pxr';

      case 2:
        return '-z-20 top-70pxr mobile:top-49pxr';

      case 3:
        return '-z-30 top-79pxr mobile:top-58pxr';
    }
  };

  return (
    <div
      className={`${orderByClassName()} ${customStyle} absolute left-18pxr flex h-352pxr w-264pxr flex-col items-center justify-start gap-60pxr rounded-[14px] border border-[rgba(248,248,248,0.30)] bg-[rgba(181,181,181,0.50)] p-35pxr shadow-projectCards  backdrop-blur-[5px] mobile:h-252pxr mobile:w-164pxr mobile:gap-30pxr mobile:px-18pxr mobile:py-20pxr`}
    >
      <div className='firstBox relative h-124pxr w-full overflow-hidden rounded-[14px] bg-white mobile:h-90pxr'>
        {order === 1 && <Image fill src={imageUrl} alt='카드 이미지' />}
      </div>
      <div className='w-220pxr text-center'>
        <h2 className='secondBox truncate text-28pxr font-body1' title={name}>
          {name}
        </h2>
        <p className='font-body2'>{type}</p>
      </div>
    </div>
  );
}

export default ProjectAnimationCard;
