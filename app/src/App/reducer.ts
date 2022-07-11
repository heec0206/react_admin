import { AppState, AppActions } from './types';
import ActionTypes from './constants';

export const initialState: AppState = {
  layoutH: {
    searchH: 0,
    tabH: 0,
    titleH: 0,
  },
  tab: {
    arry: [],
  },
  nav: {
    navYn: false,
    arry: [],
  },
  lnbYn: true,
  selectedTab: 0,
  alertPopup: {
    isOpen: false,
    onConfirm: function (): void {
      return;
    },
    children: null,
    zIndex: 0,
  },
  confirmPopup: {
    isOpen: false,
    onClose: function (): void {
      return;
    },
    onConfirm: function (): void {
      return;
    },
    onCancel: function (): void {
      return;
    },
    cancelStr: '',
    confirmStr: '',
    children: null,
    zIndex: 0,
  },
  loginYn: false,
};

function appReducer(
  state: AppState = initialState,
  action: AppActions,
): AppState {
  switch (action.type) {
    case ActionTypes.SET_LAYOUT_HEIGHT:
      return {
        ...state,
        layoutH: {
          searchH: action.payload.layoutH.searchH,
          tabH: action.payload.layoutH.tabH,
          titleH: action.payload.layoutH.titleH,
        },
      };

    case ActionTypes.UPDATE_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload.selectedTab,
      };

    case ActionTypes.SET_TAB_INFO:
      return {
        ...state,
        tab: {
          arry: action.payload.tab.arry,
        },
      };
    case ActionTypes.SET_NAV_INFO:
      return {
        ...state,
        nav: {
          navYn: action.payload.nav.navYn,
          arry: action.payload.nav.arry,
        },
      };
    case ActionTypes.GET_LNB_YN:
      return {
        ...state,
        lnbYn: action.payload.lnbYn,
      };
    case ActionTypes.OPEN_ALERT_POPUP:
      return {
        ...state,
        alertPopup: {
          isOpen: true,
          onConfirm: action.payload.alertPopup.onConfirm,
          children: action.payload.alertPopup.children,
          zIndex: action.payload.alertPopup.zIndex || 301,
        },
      };
    case ActionTypes.CLOSE_ALERT_POPUP:
      return {
        ...state,
        alertPopup: {
          isOpen: false,
          onConfirm: function (): void {
            return;
          },
          children: null,
          zIndex: 0,
        },
      };
    case ActionTypes.OPEN_CONFIRM_POPUP:
      return {
        ...state,
        confirmPopup: {
          isOpen: true,
          onClose: action.payload.confirmPopup.onClose,
          onConfirm: action.payload.confirmPopup.onConfirm,
          onCancel: action.payload.confirmPopup.onCancel,
          cancelStr: action.payload.confirmPopup.cancelStr,
          confirmStr: action.payload.confirmPopup.confirmStr,
          children: action.payload.confirmPopup.children,
          zIndex: action.payload.confirmPopup.zIndex || 301,
        },
      };
    case ActionTypes.CLOSE_CONFIRM_POPUP:
      return {
        ...state,
        confirmPopup: {
          isOpen: false,
          onClose: function (): void {
            return;
          },
          onConfirm: function (): void {
            return;
          },
          onCancel: function (): void {
            return;
          },
          cancelStr: '',
          confirmStr: '',
          children: null,
          zIndex: 0,
        },
      };

    case ActionTypes.SET_LOGIN_YN:
      return {
        ...state,
        loginYn: action.payload.loginYn,
      };

    default:
      return state;
  }
}

export default appReducer;
