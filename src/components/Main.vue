<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <div>
      <div class="todos">
        <div v-for="(todo, index) in todos" v-bind:key="index" class="todo">
          {{todo}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HelloWorld',
  computed: mapState([
    'title',
    'todos'
  ])
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
a {
  color: #42b983;
}
</style>
