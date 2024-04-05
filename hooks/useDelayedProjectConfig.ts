import { useEffect, useState } from 'react';
import { PROJECT_CONFIG } from '../constants';

type AnimationStateType = 'Prev' | 'Next' | 'None';

interface Props {
  currentPage: number;
  delay: number;
  animationDelay?: number;
  initialAnimationState?: AnimationStateType;
}

function useDelayedProjectConfig({
  currentPage,
  delay,
  animationDelay = 0,
  initialAnimationState = 'None',
}: Props) {
  const [delayedName, setDelayedName] = useState('');
  const [delayedType, setDelayedType] = useState('');
  const [animationState, setAnimationState] = useState<AnimationStateType>(
    initialAnimationState,
  );

  useEffect(() => {
    const projectName = PROJECT_CONFIG[currentPage].name;
    const projectType = PROJECT_CONFIG[currentPage].type;

    const nameTimer = setTimeout(() => {
      setDelayedName(projectName);
    }, delay);

    const typeTimer = setTimeout(() => {
      setDelayedType(projectType);
    }, delay);

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
  }, [currentPage, delay, animationDelay, initialAnimationState]);

  return { delayedName, delayedType, animationState, setAnimationState };
}

export default useDelayedProjectConfig;
