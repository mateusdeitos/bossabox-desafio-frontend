import styled, { css } from 'styled-components';
import { windowLargerThan500px } from '../../styles/breakpoints';
import { buttonWidth } from '../../components/Button/styles';
import Button from '../../components/Button/index';

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchButton = styled(Button)`
  ${windowLargerThan500px(
    css`
      display: none;
    `,
  )}
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 16px 0;
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  button {
    flex: 1;
  }

  position: sticky;
  top: 0;
  z-index: 2;

  ${windowLargerThan500px(
    css`
      flex-direction: column;
      flex-wrap: unset;
      margin-bottom: unset;
      button {
        width: ${buttonWidth.normal}px;
      }
    `,
  )}

  ${windowLargerThan500px(css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 16px;
    form {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
    }
  `)}
`;
