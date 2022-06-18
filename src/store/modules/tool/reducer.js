import { CHANGE_BG_COLOR, CHANGE_DRAW_OPTIONS, CHANGE_TOOL } from './actionsType';

export const initialState = {
  tool: 'line',
  bgColor: '#fff',
  drawOptions: {
    color: '#000',
    strokeWidth: 1,
  },
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

    case CHANGE_DRAW_OPTIONS: {
      return {
        ...state,
        drawOptions: { ...state.drawOptions, ...payload },
      };
    }

    default:
      return state;
  }
};
