/* eslint-disable jsx-a11y/label-has-associated-control */
import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import { Container, Checkmark } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Checkbox: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <p>{label}</p>
      <input
        type="checkbox"
        name={name}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      <Checkmark />
    </Container>
  );
};

export default Checkbox;
