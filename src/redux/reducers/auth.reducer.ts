import { AUTH_ACTIONS } from '../action-types';
import { UserModel } from '@/resources/models';

export interface AuthState {
  account: UserModel | null;
}

const initialState: AuthState = {
  account: null,
};

const authReducer = (state: AuthState = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_ACTIONS.SET_ACCOUNT:
      return {
        ...state,
        account: payload.account,
      };

    default:
      return state;
  }
};

export default authReducer;
