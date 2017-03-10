<style>

</style>

<template>
  <div>
    <h2>New Files</h2>
    <!-- <ul v-if="content.files && content.files.length > 0">
      <li class="file" :class="{del: file.done}" v-for="(file, index) in content.files" key="index">Tada</li>
    </ul> -->
  </div>
</template>


<script>
  import store from '../filestore'

  export default {
    data () {
      const selectedPath = this.$select('selectedPath');
      return {
        store,
        selectedPath,
        content: this.$select(`contentByPath.${selectedPath}`)
      }
    }
  }
</script>
