import { useField } from '@unform/core';
import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Container, InputContainer, Label, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  disableBrowserAutoComplete?: boolean;
  isRequired?: boolean;
  fillWidth?: boolean;
}

const TagInput: React.FC<InputProps> = ({
  name,
  label,
  isRequired = false,
  fillWidth = false,
  disableBrowserAutoComplete = false,
  children,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (disableBrowserAutoComplete) {
        event.target.setAttribute('autocomplete', 'off');
      }

      // Seta o cursor para iniciar após a string atual ao invés de selecionar tudo.
      event.currentTarget.setSelectionRange(
        event.currentTarget.value.length,
        event.currentTarget.value.length,
      );
    },
    [disableBrowserAutoComplete],
  );

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: HTMLInputElement) => {
        return Array.from(
          new Set(
            ref.value
              .trim()
              .split(',')
              .map(tag => tag.trim().toLowerCase())
              .filter(tag => !!tag),
          ),
        ).join(',');
      },
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
        <input
          id={name}
          name={name}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      </InputContainer>
      <Error hidden={!error}>{error}</Error>
    </Container>
  );
};

export default TagInput;
