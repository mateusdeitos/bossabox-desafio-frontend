import { contextTypes } from './EContextTypes';

export interface IContextBannerProps {
  id: string;
  type: keyof typeof contextTypes;
  message: string;
  duration?: number;
  customButtom?: {
    label: string;
    action(...args: unknown[]): unknown;
  };
}
