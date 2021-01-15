import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
`;

export const NavButton = styled.button<{ prevOrNext: 'prev' | 'next' }>`
  display: flex;
  align-items: center;
  color: #365df0;
  background: transparent;
  border: unset;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  font-size: 18px;
  transition: all 0.4s cubic-bezier(0.1, 0.3, 1, 0.1);
  ${({ prevOrNext }) =>
    prevOrNext === 'next'
      ? css`
          flex-direction: row-reverse;
          margin-left: 8px;
          svg {
            margin-left: 12px;
          }
        `
      : css`
          flex-direction: row;
          margin-right: 8px;
          svg {
            margin-right: 12px;
          }
        `};

  &:disabled {
    color: #9aaef7;
    cursor: not-allowed;
  }
`;

export const PageButton = styled.button<{ selected: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  color: #365df0;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border-color: transparent;
  background: transparent;
  transition: all 0.4s;

  &:disabled {
    color: #9aaef7;
    cursor: not-allowed;

    &:hover {
      background: unset;
    }
  }

  &:hover {
    background: #ebeaed;
  }
  & + & {
    margin-left: 4px;
  }

  ${({ selected }) =>
    selected &&
    css`
      background: #ebeaed;
    `}
`;
