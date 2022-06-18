import { CHANGE_TOOL } from './actionsType';

export const initialState = {
  tool: 'line',
};

export const toolReducer = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_TOOL: {
      return {
        ...state,
        tool: payload,
      };
    }

    default:
      return state;
  }
};
