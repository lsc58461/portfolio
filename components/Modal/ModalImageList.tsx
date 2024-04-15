import { ModalImage } from '..';

interface Props {
  imageUrls?: string[];
}

function ModalImageList({ imageUrls }: Props) {
  return (
    <section className='modalScrollBar h-487pxr overflow-hidden overflow-y-scroll'>
      <ul className='relative flex flex-col gap-10pxr'>
        {imageUrls ? (
          imageUrls.map((url, index) => (
            <li key={index}>
              <ModalImage url={url} />
            </li>
          ))
        ) : (
          <div className='h-full w-490pxr' />
        )}
      </ul>
    </section>
  );
}

export default ModalImageList;
