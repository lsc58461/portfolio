import ModalButton from './ModalButton';

interface Props {
  onPrevClick: () => void;
  onNextClick: () => void;
  isButtonDisabled: boolean;
}

function ModalNavigator({ onPrevClick, onNextClick, isButtonDisabled }: Props) {
  return (
    <div className='absolute left-0pxr top-1/2 z-[9999] flex w-full -translate-y-1/2 justify-between px-30pxr mobile:fixed mobile:bottom-0pxr mobile:left-1/2 mobile:top-[initial] mobile:w-200pxr mobile:-translate-x-1/2 mobile:-translate-y-10pxr mobile:scale-[0.9] mobile:rounded-3xl mobile:bg-[#1d1d1d] mobile:p-10pxr mobile:shadow-projectCard tablet:fixed tablet:bottom-0pxr tablet:left-1/2 tablet:top-[initial] tablet:w-200pxr tablet:-translate-x-1/2 tablet:-translate-y-10pxr tablet:scale-[0.9] tablet:rounded-3xl tablet:bg-[#1d1d1d] tablet:p-10pxr tablet:shadow-projectCard'>
      <div className=''>
        <ModalButton.navigate
          direction='left'
          onButtonClick={onPrevClick}
          disabled={isButtonDisabled}
        />
      </div>
      <div className=''>
        <ModalButton.navigate
          direction='right'
          onButtonClick={onNextClick}
          disabled={isButtonDisabled}
        />
      </div>
    </div>
  );
}

export default ModalNavigator;
