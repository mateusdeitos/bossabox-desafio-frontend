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
  display: inline-block;
  align-items: center;
  color: #365df0;
  background: transparent;
  border: unset;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  font-size: 18px;
  transition: all 0.4s;
  ${({ prevOrNext }) =>
    prevOrNext === 'next'
      ? css`
          margin-left: 8px;
          svg {
            margin-left: 12px;
          }
        `
      : css`
          margin-right: 8px;
          svg {
            margin-right: 12px;
          }
        `};

  &:after {
    display: block;
    content: '';
    border-bottom: solid 3px #365df0;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;

    ${({ prevOrNext }) =>
      prevOrNext === 'next'
        ? css`
            transform-origin: 0% 50%;
          `
        : css`
            transform-origin: 100% 50%;
          `};
  }

  &:not([disabled]):hover:after {
    transform: scaleX(1);
  }

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
