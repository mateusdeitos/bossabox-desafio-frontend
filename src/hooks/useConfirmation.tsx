/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import Prompt, { ConfirmationOptions } from '../components/ConfirmationModal';

const ConfirmationServiceContext = React.createContext<
  (options: ConfirmationOptions) => Promise<void>
>(Promise.reject);

export const useConfirmation = () =>
  React.useContext(ConfirmationServiceContext);

export const ConfirmationServiceProvider: React.FC = ({ children }) => {
  const [confirmationState, setConfirmationState] = React.useState<
    ConfirmationOptions
  >({} as ConfirmationOptions);

  const [open, setOpen] = React.useState<boolean>(false);

  const awaitingPromiseRef = React.useRef<{
    resolve: () => void;
    reject: () => void;
  }>();

  const openConfirmation = (options: ConfirmationOptions) => {
    setConfirmationState(options);
    setOpen(true);
    return new Promise<void>((resolve, reject) => {
      awaitingPromiseRef.current = { resolve, reject };
    });
  };

  const handleClose = () => {
    if (confirmationState.catchOnCancel && awaitingPromiseRef.current) {
      awaitingPromiseRef.current.reject();
    }

    setOpen(false);
  };

  const handleSubmit = () => {
    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.resolve();
    }

    setOpen(false);
  };

  const handleClosed = () => {
    setConfirmationState({} as ConfirmationOptions);
  };

  return (
    <>
      <ConfirmationServiceContext.Provider
        value={openConfirmation}
        children={children}
      />

      <Prompt
        open={open}
        onSubmit={handleSubmit}
        onClose={handleClose}
        onClosed={handleClosed}
        {...confirmationState}
      />
    </>
  );
};
