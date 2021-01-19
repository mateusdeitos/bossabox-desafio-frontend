import styled, { css } from 'styled-components';
import { windowLargerThan500px } from '../../styles/breakpoints';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

interface InputProps {
  fillWidth: boolean;
}

export const Container = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 12px;
  ${({ fillWidth }) =>
    fillWidth
      ? css`
          width: 100%;
        `
      : windowLargerThan500px(
          css`
            width: initial;
          `,
        )}
`;

export const Label = styled.label<{ isRequired: boolean }>`
  text-align: left;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  letter-spacing: 0.4px;
  opacity: 1;
  margin-bottom: 4px;
  ${windowLargerThan500px(
    css`
      margin-bottom: 16px;
    `,
  )}

  ${({ isRequired }) =>
    isRequired &&
    css`
      &:after {
        content: '*';
        margin-left: 4px;
        color: #8f8a9b;
      }
    `}
`;
export const InputContainer = styled.div<ContainerProps & InputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.4s;
  background: #f5f4f6;
  min-height: 32px;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  color: #170c3a;
  padding-left: 5px;
  width: 100%;

  textarea {
    font-family: 'Source Sans Pro', sans-serif;
    color: #170c3a;
    background-color: transparent;
    border: unset;
    display: flex;
    width: 100%;
    resize: vertical;
  }

  img {
    margin-right: 8px;
  }

  ${windowLargerThan500px(
    css`
      padding-left: 12.5px;
      min-height: 50px;
      img {
        width: 20px;
        height: 20px;
      }
    `,
  )}

  ${({ fillWidth }) =>
    fillWidth &&
    css`
      width: 100%;
    `}

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
`;

export const Helpers = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Error = styled.span`
  font-size: 12px;
  font-family: 'Source Sans Pro', sans-serif;
  margin-top: 4px;
  margin-left: auto;
  color: #f95e5a;
  letter-spacing: 0.36px;
  ${windowLargerThan500px(
    css`
      font-size: 18px;
    `,
  )}
`;
export const CurrentLength = styled.span<{ hasError: boolean }>`
  font-size: 12px;
  font-family: 'Source Sans Pro', sans-serif;
  margin-top: 4px;
  margin-right: auto;
  color: ${({ hasError }) => (hasError ? '#f95e5a' : '#170c3a')};
  letter-spacing: 0.36px;
  ${windowLargerThan500px(
    css`
      font-size: 18px;
    `,
  )}
`;
