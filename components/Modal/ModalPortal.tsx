'use client';

import { ReactNode, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    const modalElement = document.getElementById('modal');
    setPortalElement(modalElement);
  }, []);

  if (!portalElement) {
    return null;
  }

  return ReactDOM.createPortal(children, portalElement);
};

export default ModalPortal;
