import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
  isRequired: boolean;
}

interface InputProps {
  fillWidth: boolean;
}

export const Container = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & + & {
    margin-top: 20px;
  }
  ${({ fillWidth }) =>
    fillWidth &&
    css`
      width: 100%;
    `}
`;

export const Label = styled.label`
  text-align: left;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: #170c3a;
  opacity: 1;
  margin-bottom: 20.75px;
`;
export const InputContainer = styled.div<ContainerProps & InputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.4s;
  background: #f5f4f6;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  color: #170c3a;
  padding: 12.5px 20px;
  ${({ fillWidth }) =>
    fillWidth &&
    css`
      width: 100%;
    `}
  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  ${({ isFocused }) =>
    isFocused &&
    css`
      background: #ebeaed;
      border: 1px solid #dedce1;
      color: #170c3a;
    `}
  ${({ hasError }) =>
    hasError &&
    css`
      background: #feefee;
      border: 1px solid #f95e5a;
      color: #f95e5a;
    `}

    ${({ isRequired }) =>
    isRequired &&
    css`
      ${Label}::after {
        content: '*';
        margin-left: 8px;
        color: #8f8a9b;
      }
    `}


  input {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: normal;
    font-size: 20px;
    letter-spacing: 0px;
    color: #170c3a;
    background-color: transparent;
    border: unset;
    display: flex;
    width: 100%;
  }
`;

export const Error = styled.span`
  font-size: 18px;
  font-family: 'Source Sans Pro', sans-serif;
  margin-top: 8px;
  margin-left: auto;
  color: #f95e5a;
  letter-spacing: 0.36px;
`;
