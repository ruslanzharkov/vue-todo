import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Notes',
    todos: [],
  },
  mutations: {
    ADD_TODO: (state, todo) => {
      state.todos.push(todo);
    },
    REMOVE_TODO: (state, link) => {
      state.todos.splice(link, 1);
    },
  },
  actions: {
    removeTodo: (context, todo) => {
      context.commit('REMOVE_TODO', todo);
    },
  },
});
