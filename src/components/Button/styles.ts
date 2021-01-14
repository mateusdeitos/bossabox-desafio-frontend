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
  terciary: {
    neutral: css`
      height: 35px;
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
      height: 35px;
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
      height: 35px;
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
  quartiary: {
    neutral: css`
      height: 35px;
      color: #365df0;
      background: transparent;

      &:hover {
        color: #365df0;
        background: transparent;
      }

      &:active {
        color: #365df0;
        background: transparent;
      }
      &:disabled {
        color: #b9c6fa;
        background: transparent;
      }
    `,
    danger: css`
      height: 35px;
      color: #f95e5a;
      background: transparent;

      &:hover {
        color: #f95e5a;
        background: transparent;
      }

      &:active {
        color: #f95e5a;
        background: transparent;
      }
      &:disabled {
        color: #fcaeac;
        background: transparent;
      }
    `,
    success: css`
      height: 35px;
      color: #12db89;
      background: transparent;

      &:hover {
        color: #12db89;
        background: transparent;
      }

      &:active {
        color: #12db89;
        background: transparent;
      }
      &:disabled {
        color: #88edc4;
        background: transparent;
      }
    `,
  },
};
const buttonWidth = {
  normal: 175,
  expanded: 360,
};
export type ButtonStylePropsType = {
  order: keyof typeof stylesObj;
  type: keyof typeof stylesObj[keyof typeof stylesObj];
  width?: keyof typeof buttonWidth;
};

interface ButtonStyleProps {
  classProps?: ButtonStylePropsType;
}
export const Container = styled.button<ButtonStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  img {
    margin-right: 16px;
    width: 12px;
    height: 12px;
  }
  ${({ classProps }) => {
    const order = classProps?.order || 'primary';
    const type = classProps?.type || 'neutral';
    const width = classProps?.width || 'normal';
    return css`
      ${stylesObj[order][type]};
      width: ${buttonWidth[width]}px;
    `;
  }}
`;
