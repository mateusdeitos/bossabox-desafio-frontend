import { FaTimes } from 'react-icons/fa';
import styled, { css, keyframes, SimpleInterpolation } from 'styled-components';
import { windowLargerThan500px } from '../../styles/breakpoints';
import { contextTypes } from './dtos/EContextTypes';

const appearFromBottom = keyframes`

  from {
      opacity: 0;
      transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const propByType: { [key in contextTypes]: SimpleInterpolation } = {
  SUCCESS: css`
    background-color: #12db89;
    button {
      color: #12db89;
    }
  `,
  ERROR: css`
    background-color: #f95e5a;
    button {
      color: #f95e5a;
    }
  `,
  INFO: css`
    background-color: #b1adb9;
    button {
      color: #b1adb9;
    }
  `,
  WARNING: css`
    background-color: #ffbb43;
    button {
      color: #ffbb43;
    }
  `,
};

export const Container = styled.div<{
  type: keyof typeof contextTypes;
}>`
  display: flex;
  max-height: 80px;
  width: 100%;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  border-radius: 5px;
  animation: ${appearFromBottom} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  margin-bottom: 4px;
  svg {
    margin: 0 15px;
  }

  ${({ type }) => propByType[type]}

  ${windowLargerThan500px(css`
    max-width: 650px;
    padding: 20px 30px;
    svg {
      margin: 0 30px;
    }
  `)}
`;
export const Content = styled.div`
  margin-top: auto;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  button {
    background-color: #fff;
    padding: 3px 9px;
    font-size: 12px;
    font-weight: 600;
    width: unset;
    &:hover {
      background-color: #fff;
    }
  }
  ${windowLargerThan500px(css`
    min-width: 26px;
    button {
      padding: 6px 18px;
      font-size: 18px;
      font-weight: 600;
      width: unset;
    }
  `)}
`;
export const Message = styled.span`
  font-size: 20px;
  color: #fff;
  flex: 1;
  ${windowLargerThan500px(css`
    min-width: 26px;
  `)}
`;

export const CloseButton = styled(FaTimes)`
  color: #fff;
  cursor: pointer;
`;
