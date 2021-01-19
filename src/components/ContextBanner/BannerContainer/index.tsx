/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/prop-types */
import React from 'react';
import ContextBanner from '../index';
import { Container } from './styles';
import { IContextBannerProps } from '../dtos/IContextBannerProps';

interface ContextBannerContainerProps {
  messages: IContextBannerProps[];
}

const ContextBannerContainer: React.FC<ContextBannerContainerProps> = ({
  messages,
}) => {
  if (!messages || messages.length === 0) {
    return <></>;
  }
  return (
    <Container>
      {messages.map(({ id, message, customButtom, type, duration }) => (
        <ContextBanner
          key={id}
          message={{ id, message, customButtom, type, duration }}
        />
      ))}
    </Container>
  );
};

export default ContextBannerContainer;
