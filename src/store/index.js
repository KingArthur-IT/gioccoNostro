import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    userName: '',
    userLastName: '',
    userId: ''
  },
  mutations: {
    addUserData(state, data) {
      state.userName = data.userName;
      state.userLastName = data.userLastName;
      state.userId = data.userId;
    },
  },
  plugins: [createPersistedState()],
});