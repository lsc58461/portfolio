'use client';

import { motion } from 'framer-motion';
import ModalButton from './ModalButton';

interface Props {
  onPrevClick: () => void;
  onNextClick: () => void;
  isButtonDisabled: boolean;
}

function ModalNavigator({ onPrevClick, onNextClick, isButtonDisabled }: Props) {
  return (
    <div className='absolute left-0pxr top-1/2 z-[9999] flex w-full -translate-y-1/2 justify-between px-30pxr mobile:fixed mobile:bottom-0pxr mobile:left-1/2 mobile:top-[initial] mobile:w-200pxr mobile:-translate-x-1/2 mobile:-translate-y-10pxr mobile:scale-[0.9] mobile:rounded-3xl mobile:bg-[#1d1d1d] mobile:p-10pxr mobile:shadow-projectCard tablet:fixed tablet:bottom-0pxr tablet:left-1/2 tablet:top-[initial] tablet:w-200pxr tablet:-translate-x-1/2 tablet:-translate-y-10pxr tablet:scale-[0.9] tablet:rounded-3xl tablet:bg-[#1d1d1d] tablet:p-10pxr tablet:shadow-projectCard'>
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <ModalButton.navigate
          direction='left'
          onButtonClick={onPrevClick}
          disabled={isButtonDisabled}
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <ModalButton.navigate
          direction='right'
          onButtonClick={onNextClick}
          disabled={isButtonDisabled}
        />
      </motion.div>
    </div>
  );
}

export default ModalNavigator;
