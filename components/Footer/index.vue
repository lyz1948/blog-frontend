<template lang="pug">
  #footer.footer
    .layout.footer-wrap.flex
      Logo
      .site-info.flex.flex-1.flex-center(v-if="getOption")
        p ©copyright 2019
          a(:href="getOption.domain", target="_blank") {{ getOption.domain }}
        p Powered by
          a(href="https://zh.nuxtjs.org/", target="_blank") Nuxt.js

</template>
<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo,
  },
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  computed: {
    getOption() {
      return this.$store.state.siteInfo
    }
  }
}
</script>
<style lang="sass">
.footer
  line-height: 60px
  background-color: #06050c

  .site-info
    color: #fff
    p
      padding-right: 10px
      margin: 0
      a
        margin-left: 10px
</style>
