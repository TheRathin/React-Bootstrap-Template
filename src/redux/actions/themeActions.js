export const CHANGE_THEME = 'CHANGE_THEME' // Change theme of application

export const changeTheme = () => (dispatch) => {
  dispatch({ type: CHANGE_THEME })
}
