<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <div>
      <div class="todos">
        <div v-for="(todo, index) in todos" v-bind:key="index" class="todo">
          {{todo.title}}
        </div>
      </div>
      <form @submit.prevent="addTodo">
        <input type="text" class="todo-input" placeholder="Your todo here..." v-model="newTodo"/>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      newTodo: ''
    }
  },
  computed: mapState([
    'title',
    'todos'
  ]),
  methods: {
    ...mapMutations([
      'ADD_TODO',
    ]),
    addTodo: function() {
      let todo = {
        title: this.newTodo,
        completed: false
      };

      this.ADD_TODO(todo);
      this.newTodo = ''
    }
  },

}
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

.todo {
  flex: 1;
  padding: 15px;
  background-color: #E9E9E9;
  margin-bottom: 10px;
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
