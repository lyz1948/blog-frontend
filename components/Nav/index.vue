<template lang="pug">

    nav.nav
      a-menu(v-model='current', mode='horizontal')
        a-menu-item(key='home')
          nuxt-link(to='/', rel='noopener noreferrer') 首页
</template>
<script>
export default {
  data() {
    return {
      current: ['mail']
    }
  }
}
</script>
<style>
.nav {
  padding-left: 20px;
}
.nav .ant-menu {
  line-height: 80px;
}
</style>
