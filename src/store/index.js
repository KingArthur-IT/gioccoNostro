import { createStore } from "vuex";

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
  }
});