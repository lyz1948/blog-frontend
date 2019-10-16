<template lang="pug">
#content
  .mask
  Header(:siteInfo="getOption")
  .layout.clearfix
    .main
      nuxt
    .sider
      .sider-box
        Category
      .sider-box
        Tag
  Footer(:siteInfo="getOption")
</template>

<script>
import 'normalize.css'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Category from '~/components/Category'
import Tag from '~/components/Tag'

export default {
  components: {
    Header,
    Footer,
    Category,
    Tag,
  },
  computed: {
    getOption() {
      return this.$store.state.data
    }
  }
}
</script>
<style lang="stylus">
$pad = 1.25rem
$width = 15.63rem

.mask
  position: absolute
  top: 0
  bottom: 0
  height: 100%
  width: 100%
  background: url('~assets/img/bg.jpg') no-repeat
  filter: blur(3px)
  z-index: -1

#content
  position: relative
  padding-top: 80px
  height: calc(100% - 80px)
  background: rgba(224, 223, 223, 0.8)

.main, .sider, .right
  float: left

.sider, .right
  width: $width - $pad
  min-height: 100%
  margin-top: 20px

.main
  width: 100%
  background: #f1f3f4

.section
  padding-right: $width
  box-shadow: 5px 3px 7px 0px #bfbfbf

.sider
  margin-left: - $width

  .sider-box
    margin-bottom: $pad
    padding: 20px
    background: #f9f9f9
    box-sizing: border-box

    .title
      margin-bottom: 10px
      font-size: $text-large
      color: $text-dark
</style>
