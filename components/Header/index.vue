<template lang="pug">
  #header.header
    .layout.header-wrap.flex
      Logo
      h2 {{ siteInfo && siteInfo.sub_title }}
</template>
<script>
import Logo from '~/components/Logo';
import Nav from '~/components/Nav';
export default {
  components: {
    Logo,
    Nav
  },
  props: {
    siteInfo: {
      type: Object,
      default: {}
    }
  },
};
</script>
<style lang="stylus">
@import '~assets/styles/variables.styl'

.header
  position: fixed
  top: 0
  left: 0
  right: 0
  height: 60px
  background: rgba(#e4eff5, .5)
  box-sizing: border-box
  z-index: 9
  h2
    color: $text-dark
    font-weight: 700
    line-height: 3.75rem
    padding-left: 1.25rem
</style>
