import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/reducers";
import {changeFilterAction} from "@/redux/actions";

export const useGameState = () => useSelector(({
  gameReducer
}: RootState) => gameReducer);

export const useChangeFilterAction = () => {
  const dispatch = useDispatch();
  return (filterBy?: string) => dispatch(changeFilterAction(filterBy));
}