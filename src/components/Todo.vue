<template>
  <div class="todo">
    <p>{{todo.title}}</p>
    <img src="../assets/trash.svg"
         alt="delete"
         class="delete-icon"
         v-on:click="removeTodo"
    />
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo', 'index'],

  methods: {
    removeTodo() {
      this.$emit('removeTodos', this.index);
    },
  },
};
</script>

<style scoped lang="scss">
  .todo {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    margin-top: 10px;
  }

  .delete-icon {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    cursor: pointer;
  }
</style>
