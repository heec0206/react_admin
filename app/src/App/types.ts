import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface AlertPopup {
  isOpen?: boolean;
  onConfirm: () => void;
  children?: React.ReactElement | null;
  zIndex?: number;
}

export interface ConfirmPopup {
  isOpen?: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  cancelStr: string;
  confirmStr: string;
  children?: React.ReactElement | null;
  zIndex?: number;
}

export interface Nav {
  navYn?: boolean;
  arry?: any[];
  arryIdx?: number[];
}

export interface Tab {
  arry?: any[];
}

export interface SetLayoutH {
  searchH?: number;
  tabH?: number;
  titleH?: number;
  boxH?: number;
}

export interface AppState {
  layoutH?: SetLayoutH;
  selectedTab?: number | any;
  lnbYn?: boolean;
  loginYn?: boolean;
  alertPopup: AlertPopup;
  confirmPopup: ConfirmPopup;
  nav: Nav;
  tab: Tab;
}

/* --- ACTIONS --- */
export type AppActions = ActionType<typeof actions>;
