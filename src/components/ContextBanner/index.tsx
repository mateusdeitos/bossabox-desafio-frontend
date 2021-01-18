import React, { useEffect } from 'react';
import { IconType } from 'react-icons';
import {
  FaExclamationTriangle,
  FaExclamationCircle,
  FaTimesCircle,
  FaCheckCircle,
} from 'react-icons/fa';
import { CloseButton, Container, Content, Message } from './styles';
import Button from '../Button';
import { contextTypes } from './dtos/EContextTypes';
import { IContextBannerProps } from './dtos/IContextBannerProps';
import { useContextBanner } from '../../hooks/useContextBanner';

const Icons: { [key in contextTypes]: IconType } = {
  INFO: FaExclamationCircle,
  SUCCESS: FaCheckCircle,
  ERROR: FaTimesCircle,
  WARNING: FaExclamationTriangle,
};

const ContextBanner: React.FC<{
  message: IContextBannerProps;
}> = ({ message: messageData }) => {
  const { id, type, message, customButtom, duration = 3000 } = messageData;
  const { cancelBanner } = useContextBanner();
  const Icon = Icons[type];
  useEffect(() => {
    const timer = setTimeout(() => {
      cancelBanner(id);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [cancelBanner, duration, id]);
  return (
    <Container type={type}>
      <Icon color="#fff" />
      <Content>
        <Message>{message}</Message>
        {customButtom && (
          <Button
            onClick={() => {
              customButtom.action();
              cancelBanner(id);
            }}
          >
            {customButtom.label}
          </Button>
        )}
      </Content>
      <CloseButton onClick={() => cancelBanner(id)} />
    </Container>
  );
};

export default ContextBanner;
