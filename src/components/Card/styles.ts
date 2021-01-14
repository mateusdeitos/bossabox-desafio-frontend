import styled from 'styled-components';

export const Container = styled.div<{ delayAnimation: number }>`
  width: 100%;
  min-height: 150px;
  background: #fff;
  box-shadow: 0px 5px 7px #0000000d;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  padding: 16px;
  & + & {
    margin-top: 16px;
  }
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
export const CardTag = styled.strong``;
