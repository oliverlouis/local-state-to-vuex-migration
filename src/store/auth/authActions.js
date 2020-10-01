export default {
  logIn(context) {
    context.commit('login');
  },

  logOut(context) {
    context.commit('logout');
  }
};
