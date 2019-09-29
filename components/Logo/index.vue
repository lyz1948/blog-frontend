<template lang="pug">
  .logo
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

<style lang="sass">
.logo
  width: 120px
  h1
    margin: 0
    height: 60px
    line-height: 60px
    font-size: 1.75rem
    color: #40a9ff
    text-align: center
</style>
