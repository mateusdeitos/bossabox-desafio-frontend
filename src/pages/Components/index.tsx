/* eslint-disable no-alert */
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef, useState } from 'react';
import Input from '../../components/TextInput';
import Button from '../../components/Button/index';
import Card from '../../components/ToolCard';
import CustomIcon from '../../components/Icon';

const ComponentsPage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [isButtonDisabled, setDisableButtons] = useState(true);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const handleSubmit = (data: { input: string }) => {
    alert(JSON.stringify(data));
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '500px',
        width: '100%',
        margin: '0 auto',
      }}
    >
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <p>Olá</p>
      {/* <Card /> */}
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="input" label="label" type="text">
          <CustomIcon icon="search" />
        </Input>
        <Button
          styleProps={{ order: 'primary', type: 'neutral' }}
          type="submit"
          loading={isButtonLoading}
          onClick={() => {
            setIsButtonLoading(true);
            setTimeout(() => {
              setIsButtonLoading(false);
            }, 3000);
          }}
        >
          LoadingButton
        </Button>
      </Form>
      <span
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          margin: '8px 0',
        }}
      >
        <input
          type="checkbox"
          name=""
          id=""
          defaultChecked={isButtonDisabled}
          onChange={() => setDisableButtons(() => !isButtonDisabled)}
        />
        <p>{isButtonDisabled ? 'Habilita botões' : 'Desabilita botões'}</p>
      </span>
      <Button
        styleProps={{ order: 'primary', type: 'neutral' }}
        type="submit"
        disabled={isButtonDisabled}
      >
        PrimaryNeutral
      </Button>
      <Button
        styleProps={{ order: 'primary', type: 'danger' }}
        type="submit"
        disabled={isButtonDisabled}
      >
        PrimaryDanger
      </Button>
      <Button
        styleProps={{ order: 'primary', type: 'success' }}
        type="submit"
        disabled={isButtonDisabled}
      >
        PrimarySuccess
      </Button>
      <Button
        styleProps={{ order: 'secondary', type: 'neutral' }}
        type="submit"
        disabled={isButtonDisabled}
      >
        PrimaryNeutral
      </Button>
      <Button
        styleProps={{ order: 'secondary', type: 'danger' }}
        type="submit"
        disabled={isButtonDisabled}
      >
        PrimaryDanger
      </Button>
      <Button
        styleProps={{ order: 'secondary', type: 'success' }}
        type="submit"
        disabled={isButtonDisabled}
      >
        PrimarySuccess
      </Button>
    </div>
  );
};

export default ComponentsPage;
