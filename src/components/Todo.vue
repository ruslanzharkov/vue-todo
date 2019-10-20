<template>
  <div>
    {{todo.title}}
    <button v-on:click="removeTodo" class="rm">Remove</button>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo', 'index'],

  methods: {
    removeTodo() {
      this.$emit('removeTodos');
    },
  },
};
</script>

<style scoped>

</style>
