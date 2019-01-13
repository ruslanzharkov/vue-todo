import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'My custom title',
    links: [
      'Write some code',
      'Read about frontend best pratice',
      'Commit to github',
    ],
  },
  mutations: {

  },
  actions: {

  },
});
