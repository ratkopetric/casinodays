import { AUTH_ACTIONS } from '@/redux/action-types';
import { UserModel } from '@/resources/models';

export const setAccount = (account: UserModel) => ({
  type: AUTH_ACTIONS.SET_ACCOUNT,
  payload: { account },
});