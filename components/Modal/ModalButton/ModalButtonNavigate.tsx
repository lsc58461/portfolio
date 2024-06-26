import { IconArrowShortLeft, IconArrowShortRight } from '../../../public/svgs';

interface Props {
  direction: 'left' | 'right';
  onButtonClick: () => void;
  disabled?: boolean;
}
function ModalButtonNavigate({ direction, onButtonClick, disabled }: Props) {
  const typeOfIcon = () => {
    switch (direction) {
      case 'left':
        return <IconArrowShortLeft className='-translate-x-1pxr' />;

      case 'right':
        return <IconArrowShortRight className='translate-x-1pxr' />;
    }
  };

  return (
    <button
      className='h-35pxr w-35pxr rounded-full bg-white flex-row-center'
      onClick={onButtonClick}
      disabled={disabled}
    >
      {typeOfIcon()}
    </button>
  );
}

export default ModalButtonNavigate;
