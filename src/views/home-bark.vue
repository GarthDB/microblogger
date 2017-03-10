<style>

</style>

<template>
  <h2>Files</h2>
  <ul v-if="content.files && content.files.length > 0">
    <li class="file" :class="{del: file.done}" v-for="(file, index) in content.files" key="index">Tada</li>
  </ul>
</template>


<script>
  import store from '../filestore'

  export default {
    data () {
      return {
        content: this.$select('in')
      }
    }
  }
</script>
