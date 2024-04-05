'use client';

import { useState } from 'react';
import { Button, ModalProject, ProjectAnimationCard, ProjectCard } from '.';
import { PROJECT_ANIMATION_CARD_CONFIG, PROJECT_CONFIG } from '../constants';
import '../styles/projectCardAnimation.css';
import { usePagination, useModal, useDelayedProjectConfig } from '../hooks';

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
      delay: 125,
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

  return (
    <div className='gap-117pxr py-120pxr flex-row-center'>
      <Button.ProjectNavigation
        direction='prev'
        disabled={isButtonDisabled}
        onClick={handlePrevClick}
      />
      <div className='relative h-404pxr w-300pxr'>
        <button type='button' onClick={modalOpen}>
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
      <Button.ProjectNavigation
        direction='next'
        disabled={isButtonDisabled}
        onClick={handleNextClick}
      />
      {isModalOpen && (
        <ModalProject
          onCloseClick={modalClose}
          onNextClick={handleNextClick}
          onPrevClick={handlePrevClick}
          isButtonDisabled={isButtonDisabled}
          title={PROJECT_CONFIG[currentPage].name}
          projectCategory={PROJECT_CONFIG[currentPage].type}
          period={PROJECT_CONFIG[currentPage].period}
          projectOrder={String(currentPage + 1).padStart(2, '0')}
          projectDescription={PROJECT_CONFIG[currentPage].description}
          Links={PROJECT_CONFIG[currentPage].links}
          technologyStacks={PROJECT_CONFIG[currentPage].technologyStacks}
        />
      )}
    </div>
  );
}

export default ProjectCardList;
