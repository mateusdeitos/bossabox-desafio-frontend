/* eslint-disable no-unused-expressions */
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Input from '../../components/TextInput';
import Button from '../../components/Button';
import Modal from '../../components/Modal/Base';
import { Container, ModalTitle } from './styles';
import CustomIcon from '../../components/Icon';
import api from '../../services/api';
import { INewToolFormData } from './dto/INewToolFormData';
import { validationSchema } from './validation';
import getValidationErrors from '../../utils/getValidationErrors';

interface Tool {
  id: number;
  title: string;
  description: string;
  url: string;
  tags: string;
}

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit(): void;
}

const NewToolModal: React.FC<IProps> = ({ isOpen, setIsOpen, onSubmit }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: INewToolFormData) => {
      try {
        await validationSchema.validate(data, { abortEarly: false });
        Object.assign(data, {
          tags: data.tags.split(',').map(tag => tag.trim().toLowerCase()),
        });
        await api.post('/v1/tools', data);
        onSubmit();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        } else {
          // TODO: exibir erro
        }
      }
    },
    [onSubmit],
  );

  return (
    <Modal isOpen={isOpen}>
      <Container>
        <ModalTitle>
          <CustomIcon icon="add" />
          <h3>Add new Tool</h3>
        </ModalTitle>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="title"
            label="Tool Name"
            isRequired
            fillWidth
            disableBrowserAutoComplete
          />
          <Input
            name="url"
            label="Tool Link"
            isRequired
            fillWidth
            disableBrowserAutoComplete
          />
          <Input
            name="description"
            label="Tool Description"
            isRequired
            fillWidth
            disableBrowserAutoComplete
          />
          <Input
            name="tags"
            label="Tags (comma separated)"
            isRequired
            fillWidth
            disableBrowserAutoComplete
          />
          <Button
            styleProps={{
              order: 'primary',
              type: 'neutral',
              width: 'expanded',
            }}
          >
            Salvar
          </Button>
          <Button
            styleProps={{
              order: 'terciary',
              type: 'danger',
              width: 'expanded',
            }}
            onClick={() => setIsOpen(false)}
          >
            Cancelar
          </Button>
        </Form>
      </Container>
    </Modal>
  );
};

export default NewToolModal;
