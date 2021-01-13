import styled, { css } from 'styled-components';

const stylesObj = {
  primary: {
    neutral: css`
      background: #365df0;

      &:hover {
        background: #2f55cc;
      }

      &:active {
        background: #244aa8;
      }
      &:disabled {
        background: #b9c6fa;
        color: #e1e7fd;
      }
    `,
    danger: css`
      background: #f95e5a;

      &:hover {
        background: #cc4c4c;
      }

      &:active {
        background: #a53f3f;
      }
      &:disabled {
        background: #fcaeac;
        color: #feefee;
      }
    `,
    success: css`
      background: #0dcb7d;

      &:hover {
        background: #10b26c;
      }

      &:active {
        background: #0e995d;
      }
      &:disabled {
        background: #88edc4;
        color: #e7fbf3;
      }
    `,
  },

  secondary: {
    neutral: css`
      background: #e1e7fd;
      color: #365df0;

      &:hover {
        background: #cad6fc;
        color: #365df0;
      }

      &:active {
        background: #b9c6fa;
        color: #365df0;
      }
      &:disabled {
        background: #e1e7fd;
        color: #b9c6fa;
      }
    `,
    danger: css`
      background: #feefee;
      color: #f95e5a;

      &:hover {
        background: #fcd7d6;
        color: #f95e5a;
      }

      &:active {
        background: #fcc6c5;
        color: #f95e5a;
      }
      &:disabled {
        background: #feefee;
        color: #fcaeac;
      }
    `,
    success: css`
      background: #e7fbf3;
      color: #12db89;

      &:hover {
        background: #cff9e6;
        color: #12db89;
      }

      &:active {
        background: #b7f7d8;
        color: #12db89;
      }
      &:disabled {
        background: #e7fbf3;
        color: #88edc4;
      }
    `,
  },
};
export type ButtonStylePropsType = {
  order: keyof typeof stylesObj;
  type: keyof typeof stylesObj[keyof typeof stylesObj];
};
interface ButtonStyleProps {
  classProps?: ButtonStylePropsType;
}
export const Container = styled.button<ButtonStyleProps>`
  width: 175px;
  padding: 13.5px 26px;
  text-align: center;
  font-family: 'Source Sans Pro';
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.36px;
  color: #ffffff;
  opacity: 1;
  border-radius: 5px;
  border-color: transparent;
  transition: all 0.4s;
  svg {
    margin-right: 8px;
  }
  ${({ classProps }) => {
    const order = classProps?.order || 'primary';
    const type = classProps?.type || 'neutral';
    return `${stylesObj[order][type]}`;
  }}
`;
