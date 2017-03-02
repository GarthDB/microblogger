<style>

</style>

<template>
  <div id="player-wrapper">
    {{ msg }}
  </div>
</template>


<script>
  import store from '../filestore'

  function _formatMessage(data) {
    console.log(data)
  }

  export default {
    data () {
      return {
        msg: _formatMessage(this.$select()),
      }
    }
  }
</script>
