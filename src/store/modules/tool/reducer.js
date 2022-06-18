import { CHANGE_BG_COLOR, CHANGE_TOOL } from './actionsType';

export const initialState = {
  tool: 'line',
  bgColor: '#fff',
};

export const toolReducer = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_TOOL: {
      return {
        ...state,
        tool: payload,
      };
    }

    case CHANGE_BG_COLOR: {
      return {
        ...state,
        bgColor: payload,
      };
    }

    default:
      return state;
  }
};
