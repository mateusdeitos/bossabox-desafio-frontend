import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  box-shadow: 0px 20px 25px #0000001a;
  padding: 40px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
  }

  button {
    margin-top: 16px;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 16px;
  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  h3 {
    margin: 8px;
  }
`;
