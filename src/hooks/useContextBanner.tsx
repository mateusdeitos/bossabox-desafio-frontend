import React, { createContext, useState, useCallback, useContext } from 'react';
import { v4 } from 'uuid';
import { IContextBannerProps } from '../components/ContextBanner/dtos/IContextBannerProps';
import ContextBannerContainer from '../components/ContextBanner/BannerContainer/index';

interface MessageContextData {
  addBanner(message: Omit<IContextBannerProps, 'id'>): void;
  addErrorBanner(message: string): void;
  addSuccessBanner(message: string): void;
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
    (message: string) => {
      const id = v4();
      setMessages([
        ...messages,
        { id, type: 'ERROR', message, duration: 6000 },
      ]);
    },
    [messages],
  );
  const addSuccessBanner = useCallback(
    (message: string) => {
      const id = v4();
      setMessages([...messages, { id, type: 'SUCCESS', message }]);
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
