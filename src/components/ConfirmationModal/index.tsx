/* eslint-disable no-unused-expressions */
import React, { useCallback } from 'react';
import Button from '../Button';
import Modal from '../Modal/Base';
import { Container, ModalTitle, ModalMessage, ModalFooter } from './styles';

interface ModalData {
  title: string;
  message: string;
  confirmationButtonMessage: string;
  onConfirm(...args: unknown[]): void;
}

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  reloadList?(): void;
  options: ModalData;
}

const ConfirmationModal: React.FC<IProps> = ({
  isOpen,
  setIsOpen,
  reloadList,
  options,
}) => {
  const { onConfirm, title, message, confirmationButtonMessage } = options;
  const handleConfirm = useCallback(() => {
    onConfirm();
    setIsOpen(false);
    if (reloadList) {
      reloadList();
    }
  }, [onConfirm, reloadList, setIsOpen]);
  return (
    <Modal isOpen={isOpen}>
      <Container>
        <ModalTitle>
          <h3>{title}</h3>
        </ModalTitle>
        <ModalMessage>{message}</ModalMessage>

        <ModalFooter>
          <Button
            styleProps={{
              order: 'secondary',
              type: 'neutral',
              width: 'normal',
            }}
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button
            styleProps={{
              order: 'primary',
              type: 'neutral',
              width: 'normal',
            }}
            onClick={handleConfirm}
          >
            {confirmationButtonMessage}
          </Button>
        </ModalFooter>
      </Container>
    </Modal>
  );
};

export default ConfirmationModal;
