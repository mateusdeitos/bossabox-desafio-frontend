import styled, { css } from 'styled-components';
import { windowLargerThan500px } from '../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  background-color: #fff;
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
