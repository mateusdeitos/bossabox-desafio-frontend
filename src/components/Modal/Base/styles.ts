import ReactModal from 'react-modal';
import styled, { keyframes } from 'styled-components';

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
export const CustomModal = styled(ReactModal)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${appearFromBottom} 1s ease forwards;
  max-width: 100vw;
`;
