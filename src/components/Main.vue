<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <div>
      <form @submit.prevent="addTodos">
        <label>
          <input type="text" class="todo-input" placeholder="Your todo here..." v-model="newTodo"/>
        </label>
      </form>
      <div class="todos">
        <div v-for="(todo, index) in todos" v-bind:key="index">
          <Todo v-bind:todo="todo" v-bind:index="index" @removeTodos="removeTodos"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import Todo from './Todo.vue';

export default {
  name: 'Main',
  data() {
    return {
      idCount: 0,
      newTodo: '',
    };
  },
  components: {
    Todo,
  },
  computed: mapState([
    'title',
    'todos',
  ]),
  methods: {
    ...mapMutations([
      'ADD_TODO',
    ]),
    ...mapActions([
      'removeTodo',
    ]),
    addTodos() {
      const todo = {
        id: this.idCount,
        title: this.newTodo,
        completed: false,
      };

      this.ADD_TODO(todo);
      this.newTodo = '';
      this.idCount += 1;
    },
    removeTodos(todo) {
      this.removeTodo(todo);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
  background-color: #F4F4F4;
}

h3 {
  margin: 40px 0 0;
}

.todos {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.todo-input {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 1s ease;
  width: 300px;
}

.todo-input:focus {
  border-color: #42b983;
}

a {
  color: #42b983;
}
</style>
