import {TOAST_ACTIONS} from "@/redux/action-types";

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastState {
  content: string;
  type: ToastType;
  show: boolean;
}

const initialState: ToastState = {
  content: '',
  type: 'success',
  show: false,
}

const toastReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case TOAST_ACTIONS.SHOW_TOAST: {
      return {
        ...state,
        content: payload.content,
        type: payload.type,
        show: true,
      };
    }

    case TOAST_ACTIONS.HIDE_TOAST: {
      return {
        ...state,
        show: false,
      }
    }

    default:
      return state;
  }
};

export default toastReducer;


