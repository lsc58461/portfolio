import { useEffect, useState } from 'react';

interface Props {
  prevUrl: string;
  delay: number;
}

function useDelayedCardImage({ prevUrl, delay }: Props) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (prevUrl !== imageUrl) {
      setTimeout(() => {
        setImageUrl(prevUrl);
      }, delay);
    }
  }, [prevUrl, imageUrl, delay]);

  return { imageUrl };
}

export default useDelayedCardImage;
