import styled, { css, keyframes } from 'styled-components';
import { windowLargerThan500px } from '../../styles/breakpoints';
import { buttonWidth } from '../Button/styles';

const appearFromBottom = keyframes`

  from {
      opacity: 0;
      transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div<{ delayAnimation: number }>`
  width: 100%;
  min-height: 150px;
  background: ${props => props.theme.colors.cardBackground};
  box-shadow: 0px 5px 7px #0000000d;
  border: 1px solid ${props => props.theme.colors.borders};
  border-radius: 5px;
  padding: 16px;
  opacity: 0;
  transition: all 0.4s;
  & + & {
    margin-top: 16px;
  }

  &:hover {
    box-shadow: 0px 20px 25px #0000001a;
  }

  // eslint-disable-next-line prettier/prettier
  animation: ${appearFromBottom} 1s ease forwards;
  ${props => css`
    animation-delay: ${props.delayAnimation * 100}ms;
  `}
`;

export const CardTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 8px;

  button {
    width: unset;
    img {
      margin-right: unset;
    }
    span {
      display: none;
    }
  }

  ${windowLargerThan500px(
    css`
      button {
        width: ${buttonWidth.normal}px;
        img {
          margin-right: 18px;
        }
        span {
          display: initial;
        }
      }
    `,
  )}
`;
export const CardTitle = styled.a``;
export const CardDescription = styled.p`
  margin-bottom: 8px;
  overflow-wrap: break-word;
`;
export const CardTagsContainer = styled.div`
  margin-bottom: 8px;
`;
export const CardTag = styled.strong<{ highlighted: boolean }>`
  ${({ highlighted }) =>
    highlighted &&
    css`
      color: ${props => props.theme.colors.tagTextSelected};
      background-color: yellow;
    `}

  font-size: 12px;

  ${windowLargerThan500px(css`
    font-size: initial;
  `)}
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    color: ${props => props.theme.colors.tagTextSelected};
    background-color: yellow;
  }
  &:after {
    content: ' ';
  }
`;
