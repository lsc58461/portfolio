'use client';

import { useState } from 'react';
import { IconArrowShortLeft, IconArrowShortRight } from '../../public/svgs';
import ProjectCard from './ProjectCard';

function ProjectCardList() {
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(false);

  const handlePrevClick = () => {
    setIsPrevActive(true);
    setTimeout(() => {
      setIsPrevActive(false);
    }, 300);
  };

  const handleNextClick = () => {
    setIsNextActive(true);
    setTimeout(() => {
      setIsNextActive(false);
    }, 300);
  };

  const animationClassName = `${isPrevActive ? 'projectCardChangePrev' : ''} ${isNextActive ? 'projectCardChangeNext' : ''}`;
  const CardsAnimationClassName = `${isPrevActive ? 'projectCardsChangePrev' : ''} ${isNextActive ? 'projectCardsChangeNext' : ''}`;

  return (
    <div className='gap-117pxr py-120pxr flex-center'>
      <button
        className='h-48pxr w-48pxr rounded-full bg-[rgba(255,255,255,0.20)] shadow-[0px_0px_30px_0px_rgba(255,255,255,0.20)] flex-center hover:shadow-[0px_0px_30px_0px_rgba(255,255,255,0.40)]'
        onClick={handlePrevClick}
      >
        <IconArrowShortLeft className='-translate-x-1pxr' />
      </button>
      <div className='relative'>
        <ProjectCard animationClassName={animationClassName} />
        <div className={`${CardsAnimationClassName}`}>
          <div className='absolute left-18pxr top-61pxr -z-10 h-352pxr w-264pxr rounded-[14px] border border-[rgba(248,248,248,0.30)] bg-[rgba(181,181,181,0.50)] p-35pxr shadow-projectCards backdrop-blur-[5px]'>
            <div className='h-124pxr w-194pxr rounded-[14px] bg-white'></div>
          </div>
          <div className='absolute left-18pxr top-70pxr -z-20 h-352pxr w-264pxr rounded-[14px] border border-[rgba(248,248,248,0.30)] bg-[rgba(181,181,181,0.50)] p-35pxr shadow-projectCards backdrop-blur-[5px]'>
            <div className='h-124pxr w-194pxr rounded-[14px] bg-white'></div>
          </div>
          <div className='absolute left-18pxr top-79pxr -z-30 h-352pxr w-264pxr rounded-[14px] border border-[rgba(248,248,248,0.30)] bg-[rgba(181,181,181,0.50)] p-35pxr shadow-projectCards backdrop-blur-[5px]'>
            <div className='h-124pxr w-194pxr rounded-[14px] bg-white'></div>
          </div>
        </div>
      </div>
      <button
        className='h-48pxr w-48pxr rounded-full bg-[rgba(255,255,255,0.20)] shadow-[0px_0px_30px_0px_rgba(255,255,255,0.20)] flex-center hover:shadow-[0px_0px_30px_0px_rgba(255,255,255,0.40)]'
        onClick={handleNextClick}
      >
        <IconArrowShortRight className='translate-x-2pxr' />
      </button>
    </div>
  );
}

export default ProjectCardList;
