<template lang="pug">
.container
  Header(:siteInfo="getOption")
  .content
    .layout.clearfix
      .main
        nuxt
      .sider
        Category
        Tag
  Footer
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
      return this.$store.state.siteInfo
    }
  }
}
</script>
<style lang="sass">

.main,
.sider,
.right
  float: left

.sider,
.right
  width: 250px
  padding: 20px
  min-height: 100%

.main
  width: 100%
  background: #fff

.section
  padding-right: 250px

.sider
  margin-left: -250px
</style>
