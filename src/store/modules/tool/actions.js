import { CHANGE_BG_COLOR, CHANGE_DRAW_OPTIONS, CHANGE_EDIT_MODE, CHANGE_TOOL } from './actionsType';

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

export function changeEditMode(payload) {
  return {
    type: CHANGE_EDIT_MODE,
    payload,
  };
}
