import { CHANGE_BG_COLOR, CHANGE_TOOL, CHANGE_DRAW_OPTIONS } from './actionsType';

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

export function changeDrawOptions(payload) {
  return {
    type: CHANGE_DRAW_OPTIONS,
    payload,
  };
}
