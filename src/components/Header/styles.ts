import styled, { css } from 'styled-components';
import { windowLargerThan500px } from '../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  background-color: ${props => props.theme.colors.background};
`;
export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  button {
    width: unset;
    svg {
      color: ${props => props.theme.colors.colorModeButton.icon};
      margin-right: unset;
    }
    span {
      display: none;
    }

    ${windowLargerThan500px(css`
      width: initial;
      span {
        display: initial;
      }
      svg {
        margin-right: 8px;
      }
    `)}
  }
`;
export const HeaderTitle = styled.h1`
  text-transform: uppercase;
  ${windowLargerThan500px(css`
    margin-bottom: 16px;
  `)}
`;
export const HeaderDescription = styled.h2`
  ${windowLargerThan500px(css`
    margin-bottom: 40px;
  `)}
`;
