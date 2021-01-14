/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { CustomModal } from './styles';

interface IModalProps {
  isOpen: boolean;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen }) => {
  return (
    <CustomModal
      shouldCloseOnOverlayClick
      isOpen={isOpen}
      ariaHideApp={false}
      style={{
        content: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1',
        },
        overlay: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1',
          background: 'rgba(255,255,255,0.8)',
        },
      }}
    >
      {children}
    </CustomModal>
  );
};

export default Modal;