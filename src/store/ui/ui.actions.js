export const uiActions = {
  toggleTheme: state => {
    return state === 'dark-theme' ? 'light-theme' : 'dark-theme';
    // return state;
  }
};
