import styled, { css } from 'styled-components';
import { windowLargerThan500px } from '../../../styles/breakpoints';

export const Container = styled.div`
  position: fixed;
  z-index: 9999;
  bottom: 0;
  overflow: hidden;
  left: 0;
  right: 0;
  ${windowLargerThan500px(css`
    padding: 30px;
    width: 100%;
    max-width: 752px;
    margin: 0 auto;
    left: unset;
    right: unset;
  `)}
`;
