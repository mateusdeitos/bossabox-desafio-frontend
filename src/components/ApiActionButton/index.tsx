import React, { ButtonHTMLAttributes, useCallback, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { useConfirmation } from '../../hooks/useConfirmation';
import { useContextBanner } from '../../hooks/useContextBanner';
import api from '../../services/api';
import { ButtonStylePropsType, Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  styleProps?: ButtonStylePropsType;
  apiOptions: ApiOptions;
  confirmationOptions?: IConfirmationOptions;
};

interface IConfirmationOptions {
  message: string;
  title: string;
}

interface ApiOptions {
  url: string;
  method: 'delete' | 'post' | 'put';
  callback?(...args: unknown[]): void;
  onErrorCallback?(...args: unknown[]): void;
  successMessage: string;
  errorMessage?: string;
}

const ApiActionButton: React.FC<ButtonProps> = ({
  children,
  styleProps,
  apiOptions,
  confirmationOptions,
  ...rest
}) => {
  const {
    url,
    method,
    callback,
    onErrorCallback,
    successMessage,
    errorMessage,
  } = apiOptions;
  const { addErrorBanner, addSuccessBanner } = useContextBanner();
  const confirm = useConfirmation();
  const [isLoading, setIsLoading] = useState(false);
  const getAxiosCallback = useCallback(() => {
    switch (method) {
      case 'delete':
        return api.delete;
      case 'post':
        return api.post;
      case 'put':
        return api.put;
      default:
        return api.post;
    }
  }, [method]);
  const callApi = useCallback(async () => {
    try {
      setIsLoading(true);
      await getAxiosCallback()(url);
      addSuccessBanner(successMessage);
      if (callback) callback();
    } catch (error) {
      if (onErrorCallback) {
        onErrorCallback(error);
      } else {
        addErrorBanner(errorMessage || error.response.data.message);
      }
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [
    addErrorBanner,
    addSuccessBanner,
    callback,
    errorMessage,
    getAxiosCallback,
    onErrorCallback,
    successMessage,
    url,
  ]);

  const handleAction = useCallback(() => {
    if (confirmationOptions) {
      const { message: description, title } = confirmationOptions;
      confirm({
        title,
        description,
        confirmationButtonMessage: 'Yes, remove',
      }).then(() => callApi());
    } else {
      callApi();
    }
  }, [callApi, confirm, confirmationOptions]);

  return (
    <Container classProps={styleProps} onClick={handleAction} {...rest}>
      {isLoading ? <ClipLoader size={20} /> : children}
    </Container>
  );
};

export default ApiActionButton;
