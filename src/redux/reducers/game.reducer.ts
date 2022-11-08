import {GAME_ACTIONS} from '@/redux/action-types';

export interface IGame {
  name: string;
}

const mockGames = [
  {
    name: 'IGI'
  },
  {
    name: 'Counter strike'
  },
  {
    name: 'DOTA'
  },
  {
    name: 'Box of tank'
  },
  {
    name: 'Ping pong'
  },
  {
    name: 'Konami'
  },
  {
    name: 'VF2'
  },
];

export interface GameState {
  games: IGame[];
  filterBy: string;
}

const initialState: GameState = {
  games: mockGames,
  filterBy: '',
};

const gameReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GAME_ACTIONS.FILTER_CHANGE:
      return {
        ...state,
        filterBy: action.payload.filterBy,
        games: action.payload.filterBy === undefined
          ? mockGames
          : mockGames.filter(({name}) =>
            name.toLowerCase().includes(
              action.payload.filterBy !== undefined
                ? action.payload.filterBy.toLowerCase()
                : ''
            ))
      }

    default:
      return state;
  }
};

export default gameReducer;
