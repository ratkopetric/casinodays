import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { ToastType } from '@/redux/reducers/toast.reducer';
import { hideToastAction, showToastAction } from '@/redux/actions/toast.actions';

export const useToastState = () => useSelector(({
  toastReducer
}: RootState) => toastReducer);

export const useShowToastAction = () => {
  const dispatch = useDispatch();
  return (content: string, type: ToastType = 'success') => dispatch(showToastAction(content, type));
};

export const useHideToastAction = () => {
  const dispatch = useDispatch();
  return () => dispatch(hideToastAction());
};
