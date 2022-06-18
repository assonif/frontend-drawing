import { CHANGE_BG_COLOR, CHANGE_TOOL } from './actionsType';

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
