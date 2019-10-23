<template lang="pug">
  #header.header
    .layout.header-wrap.flex
      Logo(:title="siteInfo.title")
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
$white = #fff
.header
  position: fixed
  top: 0
  left: 0
  right: 0
  height: 60px
  background: rgba($white, 0.2)
  box-sizing: border-box
  z-index: 9

  h2
    padding-left: 1.25rem
    line-height: 3.75rem
    font-weight: 700
    color: rgba($theme-color, .6)
    background: -webkit-linear-gradient(
      -30deg,
      rgba($white, 0) 10px,
      rgba($white, 1) 20px,
      rgba($white, 1) 30px,
      rgba($white, 0) 40px
    ) no-repeat -150px 0
    transition: 1s
    -webkit-background-clip: text
    -webkit-animation: 3s move linear infinite

    @keyframes move
      0%
        background-position: 0 0

      100%
        background-position: 600px 0
</style>
