<template lang="pug">
.container
  .mask
  Header(:siteInfo="getOption")
  .main.clearfix
    .mt20
    nuxt
    .sider
      .sider-box
        Category
      .sider-box
        Tag

  .mt20
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
  },
}
</script>
<style lang="stylus">
$pad = 1.25rem
$width = 15rem /* 240/16 */
$headHeight = 3.75rem /* 60/16 */

.mask
  position: absolute
  top: 0
  bottom: 0
  height: 100%
  width: 100%
  background: url('~assets/img/bg.jpg') no-repeat
  filter: blur(3px)
  z-index: -1

.container
  position: relative
  padding-top: $headHeight
  background: rgba(224, 223, 223, 0.8)

.main
  width: 100%
  padding: 0 calc(50% - 500px)
  background: #f1f3f4

.section
  float: left
  width: 46.88rem /* 750/16 */
  padding-right: 1.25rem /* 20/16 */

.sider
  float: left
  width: $width
  min-height: 100%
  box-sizing: border-box

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
