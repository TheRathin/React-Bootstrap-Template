import { CHANGE_THEME } from '../actions/themeActions'

const INITAL_STATE = {
  isDarkModeOn: false
}

export const themeReducers = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, isDarkModeOn: !state.isDarkModeOn }
    default:
      return state
  }
}
