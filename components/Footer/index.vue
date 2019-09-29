<template lang="pug">
  #footer.footer
    .layout.footer-wrap.flex
      Logo
      .site-info.flex-1(v-if="getOption")
        p {{ getOption.sub_title }}
        p {{ getOption.icp }}
        p {{ getOption.email }}
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
  position: fixed
  bottom: 0
  left: 0
  right: 0
  background-color: #06050c
  .site-info
    color: #fff
</style>
