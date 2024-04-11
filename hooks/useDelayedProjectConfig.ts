import { useEffect, useState } from 'react';
import { PROJECT_CONFIG } from '../constants';

type AnimationStateType = 'Prev' | 'Next' | 'None';

interface Props {
  currentPage: number;
  prevDelay: number;
  nextDelay: number;
  animationDelay?: number;
  initialAnimationState?: AnimationStateType;
}

function useDelayedProjectConfig({
  currentPage,
  prevDelay,
  nextDelay,
  animationDelay = 0,
  initialAnimationState = 'None',
}: Props) {
  const [delayedName, setDelayedName] = useState('');
  const [delayedType, setDelayedType] = useState('');
  const [animationState, setAnimationState] = useState<AnimationStateType>(
    initialAnimationState,
  );

  useEffect(() => {
    const { name: projectName, type: projectType } =
      PROJECT_CONFIG[currentPage];

    const nameTimer = setTimeout(
      () => {
        setDelayedName(projectName);
      },
      animationState === 'Prev' ? prevDelay : nextDelay,
    );

    const typeTimer = setTimeout(() => {
      setDelayedType(projectType);
    }, nextDelay);

    if (initialAnimationState && animationDelay) {
      const animationTimer = setTimeout(() => {
        setAnimationState('None');
        setDelayedName(projectName);
        setDelayedType(projectType);
      }, animationDelay);

      return () => {
        clearTimeout(nameTimer);
        clearTimeout(typeTimer);
        clearTimeout(animationTimer);
      };
    }

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(typeTimer);
    };
  }, [
    animationDelay,
    animationState,
    currentPage,
    initialAnimationState,
    nextDelay,
    prevDelay,
  ]);

  return { delayedName, delayedType, animationState, setAnimationState };
}

export default useDelayedProjectConfig;
