export const uiActions = {
  setTheme: (state, { payload }) => {
    state.theme = payload;
  },
  setPage: (state, { payload }) => {
    state.page = payload;
  },
  toggleManageTagsModal: (state) => {
    state.openManageTagsModal = !state.openManageTagsModal;
  }
};
