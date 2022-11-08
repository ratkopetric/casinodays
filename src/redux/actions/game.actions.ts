import {GAME_ACTIONS} from "@/redux/action-types";

export const changeFilterAction = (filterBy?: string) => ({
  type: GAME_ACTIONS.FILTER_CHANGE,
  payload: { filterBy },
})