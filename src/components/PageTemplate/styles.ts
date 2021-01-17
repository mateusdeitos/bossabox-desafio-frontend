import styled, { css } from 'styled-components';
import { windowLargerThan500px } from '../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 auto auto;
  ${windowLargerThan500px(css`
    margin: 50px 0 auto auto;
  `)}
`;
