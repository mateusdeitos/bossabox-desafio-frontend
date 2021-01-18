import React, { createContext, useState, useCallback, useContext } from 'react';
import { v4 } from 'uuid';
import { IContextBannerProps } from '../components/ContextBanner/dtos/IContextBannerProps';
import ContextBannerContainer from '../components/ContextBanner/BannerContainer/index';

interface MessageContextData {
  addBanner(message: Omit<IContextBannerProps, 'id'>): void;
  addErrorBanner(message: Omit<IContextBannerProps, 'id' | 'type'>): void;
  addSuccessBanner(message: Omit<IContextBannerProps, 'id' | 'type'>): void;
  cancelBanner(id: string): void;
}

const MessageContext = createContext<MessageContextData>(
  {} as MessageContextData,
);

const ContextBannerProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<IContextBannerProps[]>([]);

  const addBanner = useCallback(
    (message: Omit<IContextBannerProps, 'id'>) => {
      const id = v4();
      setMessages([...messages, { ...message, id }]);
    },
    [messages],
  );

  const addErrorBanner = useCallback(
    (message: Omit<IContextBannerProps, 'id' | 'type'>) => {
      const id = v4();
      setMessages([...messages, { ...message, id, type: 'ERROR' }]);
    },
    [messages],
  );
  const addSuccessBanner = useCallback(
    (message: Omit<IContextBannerProps, 'id' | 'type'>) => {
      const id = v4();
      setMessages([...messages, { ...message, id, type: 'SUCCESS' }]);
    },
    [messages],
  );

  const cancelBanner = useCallback((id: string) => {
    setMessages(currentMessages =>
      currentMessages.filter(message => message.id !== id),
    );
  }, []);

  return (
    <MessageContext.Provider
      value={{ addBanner, addErrorBanner, addSuccessBanner, cancelBanner }}
    >
      {children}
      <ContextBannerContainer messages={messages} />
    </MessageContext.Provider>
  );
};

function useContextBanner(): MessageContextData {
  return useContext(MessageContext);
}

export { ContextBannerProvider, useContextBanner };
