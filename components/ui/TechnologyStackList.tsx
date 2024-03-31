import { TechnologyStack } from '..';
import TECHNOLOGY_STACK_CONFIG from '../../constants/TECHNOLOGY_STACK_CONFIG';

function TechnologyStackList() {
  return (
    <div className='flex gap-20pxr pb-120pxr pt-80pxr'>
      {TECHNOLOGY_STACK_CONFIG.map((stack, index) => (
        <TechnologyStack
          key={index}
          stackImage={stack.icon}
          stackName={stack.text}
        />
      ))}
    </div>
  );
}

export default TechnologyStackList;
