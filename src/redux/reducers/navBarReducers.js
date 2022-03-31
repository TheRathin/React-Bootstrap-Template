import { OPEN_SIDE_MENU } from '../actions/navBarActions'

const INITAL_STATE = {
  isSideMenuOpen: false
}

export const navBarReducers = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case OPEN_SIDE_MENU:
      return { ...state, isSideMenuOpen: !state.isSideMenuOpen }
    default:
      return state
  }
}
