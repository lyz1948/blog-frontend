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
<style lang="sass">
.header
  border-bottom: 1px solid #d9d9d9
  background-color: #06050c
  h2
    color: #fff
    line-height: 3.75rem
    padding-left: 1.25rem

</style>
