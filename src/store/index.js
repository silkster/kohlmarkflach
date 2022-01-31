import { createStore } from 'vuex';
import actions from './root.actions.js';
import mutations from './root.mutations.js';
import state from './root.state.js';
import portfolio from './modules/portfolio';
import team from './modules/team';
import device from './modules/device';

export default createStore({
  namespaced: true,
  state,
  mutations,
  actions,
  modules: {
    device,
    portfolio,
    team,
  },
});
