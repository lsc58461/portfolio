'use client';

import { useEffect, useState } from 'react';
import { IconArrowShortLeft, IconArrowShortRight } from '../public/svgs';
import {
  ModalContentDescription,
  ModalContentsSection,
  ModalImageList,
  ModalOutside,
  ModalPortal,
  ModalTitle,
  ModalWrapper,
  ProjectAnimationCard,
  ProjectCard,
} from '.';
import { PROJECT_ANIMATION_CARD_CONFIG, PROJECT_CONFIG } from '../constants';
import '../styles/projectCardAnimation.css';
import { usePagination, useModal } from '../hooks';

type AnimationStateType = 'Prev' | 'Next' | 'None';

function ProjectCardList() {
  const [animationState, setAnimationState] =
    useState<AnimationStateType>('None');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { currentPage, goToPrevPage, goToNextPage } = usePagination({
    initialPage: 0,
    totalPages: PROJECT_CONFIG.length,
  });
  const [delayedName, setDelayedName] = useState('');
  const [delayedType, setDelayedType] = useState('');
  const { open, close, toggle, isOpen } = useModal();

  const handlePrevClick = () => {
    setAnimationState('Prev');
    goToPrevPage();
    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 500);
  };

  const handleNextClick = () => {
    setAnimationState('Next');
    goToNextPage();
    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 500);
  };

  const animationClassName = () => {
    switch (animationState) {
      case 'Prev':
        return 'projectCardChangePrev';

      case 'Next':
        return 'projectCardChangeNext';

      case 'None':
        return '';
    }
  };

  const handleProjectCardClick = () => {
    open();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState('None');
      setDelayedName(PROJECT_CONFIG[currentPage].name);
      setDelayedType(PROJECT_CONFIG[currentPage].type);
    }, 500);

    const nameTimer = setTimeout(() => {
      setDelayedName(PROJECT_CONFIG[currentPage].name);
    }, 150);

    const typeTimer = setTimeout(() => {
      setDelayedType(PROJECT_CONFIG[currentPage].type);
    }, 150);

    return () => {
      clearTimeout(timer);
      clearTimeout(nameTimer);
      clearTimeout(typeTimer);
    };
  }, [currentPage]);

  return (
    <div className='gap-117pxr py-120pxr flex-row-center'>
      <button
        disabled={isButtonDisabled}
        className='h-48pxr w-48pxr rounded-full bg-[rgba(255,255,255,0.20)] shadow-[0px_0px_30px_0px_rgba(255,255,255,0.20)] flex-row-center hover:shadow-[0px_0px_30px_0px_rgba(255,255,255,0.40)]'
        onClick={handlePrevClick}
      >
        <IconArrowShortLeft className='-translate-x-1pxr fill-white' />
      </button>
      <div className='relative h-404pxr w-300pxr'>
        <button type='button' onClick={handleProjectCardClick}>
          <ProjectCard
            name={delayedName}
            type={delayedType}
            animationClassName={animationClassName()}
          />
        </button>
        <div className={`projectCardsChange${animationState}`}>
          {PROJECT_ANIMATION_CARD_CONFIG.map((card, index) => (
            <ProjectAnimationCard
              key={index}
              order={card.order}
              customStyle={card.customStyle}
              name={PROJECT_CONFIG[currentPage].name}
              type={PROJECT_CONFIG[currentPage].type}
            />
          ))}
        </div>
      </div>
      <button
        disabled={isButtonDisabled}
        className='h-48pxr w-48pxr rounded-full bg-[rgba(255,255,255,0.20)] shadow-[0px_0px_30px_0px_rgba(255,255,255,0.20)] flex-row-center hover:shadow-[0px_0px_30px_0px_rgba(255,255,255,0.40)]'
        onClick={handleNextClick}
      >
        <IconArrowShortRight className='translate-x-2pxr fill-white' />
      </button>
      {isOpen && (
        <ModalPortal>
          <ModalOutside onClose={close}>
            <ModalWrapper>
              <ModalTitle />
              <ModalContentsSection>
                <ModalImageList />
                <ModalContentDescription
                  projectOrder={String(currentPage + 1).padStart(2, '0')}
                >
                  {PROJECT_CONFIG[currentPage].description}
                </ModalContentDescription>
              </ModalContentsSection>
            </ModalWrapper>
          </ModalOutside>
        </ModalPortal>
      )}
    </div>
  );
}

export default ProjectCardList;
