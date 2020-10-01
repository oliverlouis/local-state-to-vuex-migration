import authMutations from './authMutations';
import authActions from './authActions';

export default {
  state() {
    return {
      isLoggedIn: false
    };
  },

  mutations: authMutations,

  actions: authActions,

  getters: {
    loggedIn(state) {
      return state.isLoggedIn;
    }
  }
};
