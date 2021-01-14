import styled, { css, keyframes } from 'styled-components';

const appearFromBottom = keyframes`

  from {
      opacity: 0;
      transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div<{ delayAnimation: number }>`
  width: 100%;
  min-height: 150px;
  background: #fff;
  box-shadow: 0px 5px 7px #0000000d;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  padding: 16px;
  opacity: 0;
  & + & {
    margin-top: 16px;
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
`;
export const CardTitle = styled.a`
  font-size: 24px;
`;
export const CardDescription = styled.p`
  margin-bottom: 8px;
`;
export const CardTagsContainer = styled.div`
  margin-bottom: 8px;
`;
export const CardTag = styled.strong<{ highlighted: boolean }>`
  ${({ highlighted }) =>
    highlighted &&
    css`
      background-color: yellow;
    `}

  &:after {
    content: ' ';
  }
`;
