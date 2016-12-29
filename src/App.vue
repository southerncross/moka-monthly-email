<template>
<div>
  <workshop/>
</div>
</template>

<script>
import Workshop from './components/Workshop'

export default {
  name: 'app',

  components: {
    Workshop
  }
}
</script>

<style lang="stylus">
*
*:before
*:after
  box-sizing border-box

html
body
  margin 0
  padding 0
  font-size 16px
  line-height 1
  overflow hidden
</style>
