import { CHANGE_BG_COLOR, CHANGE_TOOL, CHANGE_DRAW_COLOR } from './actionsType';

export function changeTool(payload) {
  return {
    type: CHANGE_TOOL,
    payload,
  };
}

export function changeBgColor(payload) {
  return {
    type: CHANGE_BG_COLOR,
    payload,
  };
}

export function changeDrawColor(payload) {
  return {
    type: CHANGE_DRAW_COLOR,
    payload,
  };
}
