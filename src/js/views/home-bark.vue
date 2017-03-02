<style>

</style>

<template>
  <h2>Files</h2>
  <ul v-if="todos.items && todos.items.length > 0">
    <li class="todo" :class="{del: todo.done}" v-for="(todo, index) in todos.items" key="index" v-text="todo.text"></li>
  </ul>
</template>


<script>
  import store from '../filestore'

  export default {
    data () {
      return {
        todos: this.$select('in')
      }
    }
  }
</script>
