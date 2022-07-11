import { action } from 'typesafe-actions';
import ActionTypes from './constants';
import { AlertPopup, ConfirmPopup, Nav, SetLayoutH, Tab } from './types';

type ReturnAppActions =
  | {
      type: ActionTypes.SET_LAYOUT_HEIGHT;
      payload: {
        layoutH: SetLayoutH;
      };
    }
  | {
      type: ActionTypes.UPDATE_SELECTED_TAB;
      payload: {
        selectedTab: number;
      };
    }
  | {
      type: ActionTypes.SET_TAB_INFO;
      payload: {
        tab: Tab;
      };
    }
  | {
      type: ActionTypes.SET_NAV_INFO;
      payload: {
        nav: Nav;
      };
    }
  | {
      type: ActionTypes.GET_LNB_YN;
      payload: {
        lnbYn: boolean;
      };
    }
  | {
      type: ActionTypes.OPEN_ALERT_POPUP;
      payload: {
        alertPopup: AlertPopup;
      };
    }
  | {
      type: ActionTypes.CLOSE_ALERT_POPUP;
    }
  | {
      type: ActionTypes.OPEN_CONFIRM_POPUP;
      payload: {
        confirmPopup: ConfirmPopup;
      };
    }
  | {
      type: ActionTypes.CLOSE_CONFIRM_POPUP;
    }
  | {
      type: ActionTypes.SET_LOGIN_YN;
      payload: {
        loginYn: boolean;
      };
    };

export const setLnbYn = (lnbYn: boolean): ReturnAppActions =>
  action(ActionTypes.GET_LNB_YN, { lnbYn });

export const openAlertPopup = (alertPopup: AlertPopup): ReturnAppActions =>
  action(ActionTypes.OPEN_ALERT_POPUP, { alertPopup });

export const setTabYn = (tab: Tab): ReturnAppActions =>
  action(ActionTypes.SET_TAB_INFO, { tab });

export const closeAlertPopup = (): ReturnAppActions =>
  action(
    ActionTypes.CLOSE_ALERT_POPUP,
    document.getElementsByTagName('body')[0].removeAttribute('style'),
  );

export const openConfirmPopup = (
  confirmPopup: ConfirmPopup,
): ReturnAppActions => action(ActionTypes.OPEN_CONFIRM_POPUP, { confirmPopup });

export const setNavYn = (nav: Nav): ReturnAppActions =>
  action(ActionTypes.SET_NAV_INFO, { nav });

export const closeConfirmPopup = (): ReturnAppActions =>
  action(
    ActionTypes.CLOSE_CONFIRM_POPUP,
    document.getElementsByTagName('body')[0].removeAttribute('style'),
  );

export const setLoginYn = (loginYn: boolean): ReturnAppActions =>
  action(ActionTypes.SET_LOGIN_YN, { loginYn });

export const updateSelectTab = (selectedTab: number): ReturnAppActions =>
  action(ActionTypes.UPDATE_SELECTED_TAB, {
    selectedTab: selectedTab,
  });

export const setLayoutH = (layoutH: SetLayoutH): ReturnAppActions =>
  action(ActionTypes.SET_LAYOUT_HEIGHT, { layoutH });
