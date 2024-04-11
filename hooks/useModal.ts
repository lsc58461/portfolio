import { useState } from 'react';

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalOpen = () => setIsModalOpen(true);

  const modalClose = () => setIsModalOpen(false);

  const modalToggle = () => setIsModalOpen(!isModalOpen);

  return { modalOpen, modalClose, modalToggle, isModalOpen };
}

export default useModal;
