import { Dispatch } from 'redux';
import { ToastType } from '@/redux/reducers/toast.reducer';
import { TOAST_ACTIONS } from '@/redux/action-types';

export const showToastAction = (content: string, type: ToastType = 'success') => (dispatch: Dispatch) => {
  dispatch({
    type: TOAST_ACTIONS.SHOW_TOAST,
    payload: { content, type }
  })
}

export const hideToastAction = () => (dispatch: Dispatch) => {
  dispatch({
    type: TOAST_ACTIONS.HIDE_TOAST,
  });
};
