/* eslint-disable no-unused-expressions */
import React from 'react';
import Button from '../Button';
import Modal from '../Modal/Base';
import { Container, ModalTitle, ModalMessage, ModalFooter } from './styles';

export interface ConfirmationOptions {
  catchOnCancel?: boolean;
  title: string;
  description: string;
  confirmationButtonMessage: string;
}
interface ConfirmationDialogProps extends ConfirmationOptions {
  open: boolean;
  onSubmit: () => void;
  onClose: () => void;
  onClosed: () => void;
}

const ConfirmationModal: React.FC<ConfirmationDialogProps> = ({
  open,
  title,
  description,
  onSubmit,
  onClose,
  onClosed,
  confirmationButtonMessage,
}) => {
  return (
    <Modal isOpen={open}>
      <Container>
        <ModalTitle>
          <h3>{title}</h3>
        </ModalTitle>
        <ModalMessage>{description}</ModalMessage>

        <ModalFooter>
          <Button
            styleProps={{
              order: 'secondary',
              type: 'neutral',
              width: 'normal',
            }}
            onClick={() => {
              onClosed();
              onClose();
            }}
          >
            Cancel
          </Button>
          <Button
            styleProps={{
              order: 'primary',
              type: 'neutral',
              width: 'normal',
            }}
            onClick={onSubmit}
          >
            {confirmationButtonMessage}
          </Button>
        </ModalFooter>
      </Container>
    </Modal>
  );
};

export default ConfirmationModal;
