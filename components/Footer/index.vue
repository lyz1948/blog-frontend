<template lang="pug">
  .footer
    .layout
      .site-info.flex.flex-1.flex-center(v-if="getOption")
        p ©copyright 2019
          a(:href="getOption.domain", target="_blank") {{ getOption.domain }}
        p Powered by
          a(href="https://zh.nuxtjs.org/", target="_blank") Nuxt.js

</template>
<script>

export default {
  computed: {
    getOption() {
      return this.$store.state.siteInfo
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/styles/variables.styl'
.footer
  line-height: 60px
  margin-top: 20px
  background: transparent

  .site-info
    font-weight: 500
    color: $text-dark
    p
      padding-right: 10px
      margin: 0
      a
        margin-left: 10px
</style>
