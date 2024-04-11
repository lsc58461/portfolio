import { ModalImage } from '..';

interface Props {
  imageUrls?: string[];
}

function ModalImageList({ imageUrls }: Props) {
  return (
    <section className='modalScrollBar h-487pxr overflow-hidden overflow-y-scroll'>
      <div className='flex flex-col gap-10pxr'>
        {imageUrls ? (
          imageUrls.map((url, index) => <ModalImage key={index} url={url} />)
        ) : (
          <div className='h-full w-490pxr' />
        )}
      </div>
    </section>
  );
}

export default ModalImageList;
