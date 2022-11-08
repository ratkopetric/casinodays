import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { setAccount } from '@/redux/actions';
import { UserModel } from '@/resources/models';

export const useAuthState = () => useSelector(({
  authReducer
}: RootState) => authReducer);

export const useLoginAction = () => {
  const dispatch = useDispatch();
  return (email: string, password: string) => dispatch(setAccount({
    id: 'user-id',
    username: 'JackPa',
    email,
    password
  }));
}

export const useSetAccountAction = () => {
  const dispatch = useDispatch();
  return (account: UserModel) => dispatch(setAccount(account));
}

export const useLogout = () => {
  const dispatch = useDispatch();
  return () => dispatch(setAccount(null));
};