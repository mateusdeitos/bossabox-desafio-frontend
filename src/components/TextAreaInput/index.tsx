/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-param-reassign */
import { useField } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import TextAreaAutosize, {
  TextareaAutosizeProps,
} from 'react-textarea-autosize';
import {
  Container,
  InputContainer,
  Label,
  Error,
  CurrentLength,
  Helpers,
} from './styles';

interface InputProps extends TextareaAutosizeProps {
  name: string;
  label?: string;
  disableBrowserAutoComplete?: boolean;
  isRequired?: boolean;
  fillWidth?: boolean;
  minLength?: number;
}

const TextArea: React.FC<InputProps> = ({
  name,
  label,
  isRequired = false,
  fillWidth = false,
  disableBrowserAutoComplete = false,
  minLength = 0,
  maxLength = 0,
  children,
  ...rest
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [currentLength, setCurrentLength] = useState(0);
  const {
    fieldName,
    defaultValue,
    error,
    registerField,
    clearError,
  } = useField(name);

  const handleInputFocus = useCallback(
    (event: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      if (disableBrowserAutoComplete) {
        event.target.setAttribute('autocomplete', 'off');
      }

      // Seta o cursor para iniciar após a string atual ao invés de selecionar tudo.
      event.currentTarget.setSelectionRange(
        event.currentTarget.value.length,
        event.currentTarget.value.length,
      );
      clearError();
    },
    [clearError, disableBrowserAutoComplete],
  );

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);
  const handleChangeTextContent = () => {
    setCurrentLength(inputRef.current?.value?.length || 0);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container fillWidth={fillWidth}>
      {label && (
        <Label isRequired={isRequired} htmlFor={name}>
          {label}
        </Label>
      )}
      <InputContainer
        isFilled={isFilled}
        isFocused={isFocused}
        hasError={!!error}
        fillWidth={fillWidth}
      >
        {children}
        <TextAreaAutosize
          id={name}
          name={name}
          rows={2}
          maxLength={maxLength}
          onChange={handleChangeTextContent}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      </InputContainer>
      <Helpers>
        <CurrentLength hasError={currentLength < minLength}>
          {currentLength}/{maxLength}
        </CurrentLength>
        <Error hidden={!error}>{error}</Error>
      </Helpers>
    </Container>
  );
};

export default TextArea;
