<template lang="pug">
  #header.header
    .layout.header-wrap.flex
      Logo
      Nav
</template>
<script>
import Logo from '~/components/Logo';
import Nav from '~/components/Nav';
export default {
  components: {
    Logo,
    Nav
  },
  data() {
    return {
      current: ['mail']
    };
  }
};
</script>
<style lang="sass">
.layout
  width: 1200px
  margin: 0 auto

.header
  border-bottom: 1px solid #d9d9d9
  .logo
    padding: 0 20px
</style>
