<template lang="pug">
  .footer
    .layout
      .site-info.flex.flex-1.flex-center(v-if="siteInfo")
        p ©copyright 2019
          a(:href="siteInfo.domain", target="_blank") {{ siteInfo.domain }}
        p Powered by
          a(href="https://zh.nuxtjs.org/", target="_blank") Nuxt.js

</template>
<script>

export default {
  props: {
    siteInfo: {
      type: Object,
      default: {}
    }
  },
}
</script>
<style lang="stylus">
@import '~assets/styles/variables.styl'

.footer
  line-height: 3.75rem /* 60/16 */
  background: transparent
  font-size: $text-small

  .site-info
    font-weight: 500
    color: $text-dark

    p
      padding-right: 0.63rem /* 10/16 */
      margin: 0

      a
        margin-left: 0.63rem /* 10/16 */
</style>
