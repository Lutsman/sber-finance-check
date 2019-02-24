export const userDataSelector = state => state.user.userData;
export const userIdSelector = state => userDataSelector(state).id;
export const userNameSelector = state => userDataSelector(state).name;
export const userLoadingSelector = state => state.user.loading;
export const userLoadedSelector = state => state.user.loaded;
export const sessionIdSelector = state => state.user.sessionId;
