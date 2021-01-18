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
