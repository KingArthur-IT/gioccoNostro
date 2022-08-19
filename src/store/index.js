import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    userName: '',
    userLastName: '',
    userId: '',
    selectedGame: {},
    currentGameData: {},
    gameViewReady: false,
    searchEmail: ''
  },
  mutations: {
    addUserData(state, data) {
      state.userName = data.userName;
      state.userLastName = data.userLastName;
      state.userId = data.userId;
    },
    addGameData(state, data) {
      state.selectedGame = {...data};
    },
    setGameViewReady(state, data){
      state.gameViewReady = data;
    },
    setSearchEmail(state, data){
      state.searchEmail = data;
    }
  },
  plugins: [createPersistedState()],
});