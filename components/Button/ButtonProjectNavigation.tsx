import React from 'react';
import { IconArrowShortLeft, IconArrowShortRight } from '../../public/svgs'; // Icons 컴포넌트는 실제로 사용하는 아이콘 컴포넌트에 대한 것입니다.

interface Props {
  disabled: boolean;
  onClick: () => void;
  direction: 'prev' | 'next';
}

const ButtonProjectNavigation = ({ disabled, onClick, direction }: Props) => {
  const arrowIcon = () => {
    switch (direction) {
      case 'prev':
        return <IconArrowShortLeft className='-translate-x-1pxr fill-white' />;

      case 'next':
        return <IconArrowShortRight className='translate-x-1pxr fill-white' />;
    }
  };

  return (
    <button
      disabled={disabled}
      className='h-48pxr w-48pxr rounded-full bg-[rgba(255,255,255,0.20)] shadow-[0px_0px_30px_0px_rgba(255,255,255,0.20)] flex-row-center hover:shadow-[0px_0px_30px_0px_rgba(255,255,255,0.40)]'
      onClick={onClick}
    >
      {arrowIcon()}
    </button>
  );
};

export default ButtonProjectNavigation;
