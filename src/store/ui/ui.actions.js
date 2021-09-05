export const uiActions = {
  toggleTheme: state => {
    state.theme = state.theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    return state;
  },
  setPage: (state, payload) => {
    state.page = payload.payload;
    return state;
  }
};
