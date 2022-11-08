import { combineReducers } from 'redux';
import authReducer, { AuthState } from '@/redux/reducers/auth.reducer';
import toastReducer, { ToastState } from '@/redux/reducers/toast.reducer';
import gameReducer, { GameState } from "@/redux/reducers/game.reducer";

export interface RootState {
  authReducer: AuthState,
  toastReducer: ToastState,
  gameReducer: GameState,
}

const rootReducer = combineReducers<RootState>({
  authReducer,
  toastReducer,
  gameReducer,
});

export default rootReducer;
