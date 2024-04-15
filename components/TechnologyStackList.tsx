'use client';
import { motion } from 'framer-motion';
import { TechnologyStack } from '.';
import TECHNOLOGY_STACK_CONFIG from '../constants/TECHNOLOGY_STACK_CONFIG';

function TechnologyStackList() {
  return (
    <div className='flex flex-wrap justify-center gap-20pxr'>
      {TECHNOLOGY_STACK_CONFIG.map((stack, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 600, damping: 10 }}
        >
          <TechnologyStack stackImage={stack.icon} stackName={stack.text} />
        </motion.div>
      ))}
    </div>
  );
}

export default TechnologyStackList;
