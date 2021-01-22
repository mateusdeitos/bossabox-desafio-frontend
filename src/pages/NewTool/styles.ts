import styled, { css } from 'styled-components';
import { windowLargerThan500px } from '../../styles/breakpoints';

export const Container = styled.div`
  height: 95vh;
  width: 100vw;
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  box-shadow: 0px 20px 25px #0000001a;
  padding: 8px;
  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
  }

  button {
    margin-top: 16px;
  }

  ${windowLargerThan500px(css`
    padding-top: 40px;
    height: initial;
    width: 100%;
  `)}
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 16px;
  svg {
    color: ${props => props.theme.colors.textColor};
    margin-right: 8px;
  }
  h3 {
    margin: 8px;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: auto;
  margin-bottom: 16px;
  width: 100%;
  button {
    margin-left: 4px;
  }
  ${windowLargerThan500px(css`
    flex-direction: column;
    margin-bottom: 0;

    button {
      margin-left: 0;
    }
  `)}
`;
