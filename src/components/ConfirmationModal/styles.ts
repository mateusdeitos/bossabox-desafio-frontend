import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  box-shadow: 0px 20px 25px #0000001a;
  padding: 20px;
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
`;

export const ModalMessage = styled.p`
  width: 100%;
  text-align: left;
  word-wrap: break-word;
`;
export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 16px;
  width: 100%;
`;
