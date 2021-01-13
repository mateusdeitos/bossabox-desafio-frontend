import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
  isRequired: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    text-align: left;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    letter-spacing: 0.4px;
    color: #170c3a;
    opacity: 1;
    margin-bottom: 20.75px;

    ${({ isRequired }) =>
      isRequired &&
      css`
        &::after {
          content: '*';
          margin-left: 8px;
          color: #8f8a9b;
        }
      `}
  }

  input {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: normal;
    font-size: 20px;
    letter-spacing: 0px;
    color: #170c3a;
    background: #f5f4f6;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    opacity: 1;
    min-width: 400px;
    padding: 12.5px 20px;
    transition: all 0.4s;

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
  }

  span {
    font-size: 18px;
    font-family: 'Source Sans Pro', sans-serif;
    margin-top: 8px;
    align-self: flex-end;
    color: #f95e5a;
    letter-spacing: 0.36px;
  }
`;
