import { IconType } from 'react-icons';
import { Axios } from 'axios';

// ! Global Types

export type WaitUtil = (ms: number) => Promise<void>;

export interface NavbarClass {
  desktop: string;
  mobile: string;
}

export interface NavbarLink {
  id: number;
  name: string;
  url: string;
  classNames: NavbarClass;
  external?: boolean;
}

export interface MobileMenuProps {
  isActive: boolean;
  children: JSX.Element[];
}

export interface FooterSocialLink {
  id: number;
  name: string;
  url: string;
  icon: IconType;
}

export interface FooterLegalLink {
  id: number;
  name: string;
  url: string;
}

// ! Client Types

export interface IClientError extends Error {
  readonly name: string;
  readonly message: string;
  readonly code?: string | number | undefined;
}

export interface IClientResponse<T, E> {
  data: T;
  error: E;
}

export interface IApiClient {
  readonly API: Axios;
  readonly defaultError: string;

  errorHandler(error: any): { message: string; code?: string | number };
}

// ! Layout Types - Language

export interface ILanguageContext {
  language: string;
  changeLanguage: (language: string) => void;
}

export type TranslationFile = {
  [key: string]: string | TranslationFile | Array<string | TranslationFile>;
};

export interface IUseLanguage {
  language: string;
  changeLanguage: (language: string) => void;
}

// ! Layout Types - Default Popups

export type TPopupStatus = 'success' | 'error' | 'loading' | 'info';

export interface IAlertPopup {
  inHTML: boolean;
  isActive: boolean;
  status: TPopupStatus;
  text: string;
  onConfirm?: () => void;
}

export interface IConfirmPopup {
  inHTML: boolean;
  isActive: boolean;
  text: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export interface IPopupContext {
  alertPopup: IAlertPopup | null;
  confirmPopup: IConfirmPopup | null;
  activateAlertPopup: (
    text: string,
    status: TPopupStatus,
    onConfirm?: () => void,
  ) => void;
  activateConfirmPopup: (
    text: string,
    onConfirm?: () => void,
    onCancel?: () => void,
  ) => void;

  deactivateAlertPopup: () => void;
  deactivateConfirmPopup: () => void;
}
