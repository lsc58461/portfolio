import Image from 'next/image';

interface Props {
  url: string;
}

function ModalImage({ url }: Props) {
  return (
    <Image
      className='mobile:w-full tablet:w-full'
      height={266}
      width={490}
      src={url}
      alt='프로젝트 사이트 이미지'
      quality={100}
    />
  );
}

export default ModalImage;
