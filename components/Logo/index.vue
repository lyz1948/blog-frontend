<template lang="pug">
  .brand
    nuxt-link(to='/', rel='noopener noreferrer')
      h1 {{ title }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'YKPINE'
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/styles/variables.styl'
.brand
  width: 120px

  h1
    margin: 0
    height: 60px
    line-height: 60px
    color: $theme-color
    text-shadow: 0 1px hsl(0, 0%, 85%), 0 2px hsl(0, 0%, 80%), 0 3px hsl(0, 0%, 75%), 0 4px hsl(0, 0%, 70%), 0 5px hsl(0, 0%, 65%), 0 5px 10px black
    text-align: center
</style>
