<template lang="pug">

    nav.nav
      ul.underline-navbar
        li.active
          nuxt-link(to='/', rel='noopener noreferrer') 首页
      //- a-menu(v-model='current', mode='horizontal')
      //-   a-menu-item(key='home')
      //-     nuxt-link(to='/', rel='noopener noreferrer') 首页
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
<style lang="sass">
.nav
  padding-left: 20px
  ul
    display: flex
    li
      position: relative
      padding: 0 15px
      font-size: 20px
      color: #f90
      font-size: 16px
      line-height: 60px
      cursor: pointer
      transition: all 300ms
      &:before
        content: ""
        position: absolute
        top: 0
        left: 100%
        width: 0
        height: 100%
        border-bottom: 2px solid transparent
        transition: all 300ms
      &:active
        background: #f90
        color: #fff
      &:hover,&.active
        &:before
          left: 0
          top: 0
          width: 100%
          transition-delay: 100ms
          border-bottom-color: #f90
          // z-index: -1
        & + li:before
          left: 0
      a
        color: #f90
</style>
