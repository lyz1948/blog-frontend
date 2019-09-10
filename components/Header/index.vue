<template lang="pug">
  #header.header
    .layout.header-wrap.flex
      Logo
      //- Nav
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
.header
  border-bottom: 1px solid #d9d9d9
  background-color: #06050c
</style>
