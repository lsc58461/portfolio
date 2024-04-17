'use client';

import { useEffect, useState } from 'react';
import { Button, ModalProject, ProjectAnimationCard, ProjectCard } from '.';
import { PROJECT_ANIMATION_CARD_CONFIG, PROJECT_CONFIG } from '../constants';
import { usePagination, useModal, useDelayedProjectConfig } from '../hooks';
import '../styles/projectCardAnimation.css';

function ProjectCardList() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { modalOpen, modalClose, isModalOpen } = useModal();
  const { currentPage, goToPrevPage, goToNextPage } = usePagination({
    initialPage: 0,
    totalPages: PROJECT_CONFIG.length,
  });
  const { delayedName, delayedType, animationState, setAnimationState } =
    useDelayedProjectConfig({
      currentPage,
      prevDelay: 0,
      nextDelay: 125,
      animationDelay: 500,
      initialAnimationState: 'None',
    });

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

  const {
    name,
    type,
    period,
    imageUrls,
    description,
    technologyStacks,
    links,
  } = PROJECT_CONFIG[currentPage];

  const formattedProjectOrder = String(currentPage + 1).padStart(2, '0');

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <div className='relative gap-80pxr py-120pxr flex-row-center mobile:flex-col mobile:gap-30pxr mobile:py-80pxr'>
      <div className='relative z-10 h-404pxr w-300pxr mobile:flex mobile:h-280pxr mobile:items-start mobile:justify-center'>
        <button type='button' onClick={modalOpen}>
          <ProjectCard
            name={delayedName}
            type={delayedType}
            animationClassName={animationClassName()}
            imageSrc={imageUrls[0]}
          />
        </button>
        <div
          className={`projectCardsChange${animationState} mobile:absolute mobile:left-50pxr`}
        >
          {PROJECT_ANIMATION_CARD_CONFIG.map((card, index) => (
            <ProjectAnimationCard
              key={index}
              order={card.order}
              customStyle={card.customStyle}
              name={name}
              type={type}
              imageSrc={
                PROJECT_CONFIG[
                  PROJECT_CONFIG.length < currentPage + 2 ? 0 : currentPage + 1
                ]?.imageUrls[0]
              }
            />
          ))}
        </div>
      </div>
      <div className='absolute flex justify-between gap-400pxr mobile:top-430pxr mobile:gap-20pxr'>
        <div className=''>
          <Button.ProjectNavigation
            direction='prev'
            disabled={isButtonDisabled}
            onClick={handlePrevClick}
          />
        </div>
        <div className=''>
          <Button.ProjectNavigation
            direction='next'
            disabled={isButtonDisabled}
            onClick={handleNextClick}
          />
        </div>
      </div>
      {isModalOpen && (
        <ModalProject
          onCloseClick={modalClose}
          onNextClick={handleNextClick}
          onPrevClick={handlePrevClick}
          isButtonDisabled={isButtonDisabled}
          title={name}
          projectCategory={type}
          period={period}
          projectOrder={formattedProjectOrder}
          projectDescription={description}
          Links={links}
          technologyStacks={technologyStacks}
          imageUrls={imageUrls}
        />
      )}
    </div>
  );
}

export default ProjectCardList;
