import ModalImage from './ModalImage';

interface Props {
  imageUrls?: string[];
}

function ModalImageList({ imageUrls }: Props) {
  return (
    <section className='modalScrollBar h-487pxr overflow-hidden overflow-y-scroll'>
      <div className='flex flex-col gap-10pxr'>
        <ModalImage />
        <ModalImage />
        <ModalImage />
      </div>
    </section>
  );
}

export default ModalImageList;
