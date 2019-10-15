<template lang="pug">
  .section
    .page
      .swiper-warp
        MySwiper(:list="banners")
      ArticleList
</template>

<script>
import 'normalize.css'
import * as TYPES from '~/constants'
import ArticleList from '~/components/Article/list'
import MySwiper from '~/components/Swiper'

export default {
  layout: 'blog',
  components: {
    ArticleList,
    MySwiper,
  },
  data() {
    return {
      banners: [
        'https://static.surmon.me/FjFP6eoKlnmserSMLDAILX1guauY?imageView2/1/w/1190/h/420/format/webp/interlace/1/q/80|watermark/2/text/U3VybW9uLm1l/font/Y2FuZGFyYQ==/fontsize/680/fill/I0ZGRkZGRg==/dissolve/30/gravity/SouthWest/dx/30/dy/15|imageslim',
        'https://static.surmon.me/FrkYADJJj0kFwHEkUXl14ZHj5YMS?imageView2/1/w/1190/h/420/format/webp/interlace/1/q/80|watermark/2/text/U3VybW9uLm1l/font/Y2FuZGFyYQ==/fontsize/680/fill/I0ZGRkZGRg==/dissolve/30/gravity/SouthWest/dx/30/dy/15|imageslim'
      ]
    }
  },
  async fetch({ store }) {
    await store.dispatch(TYPES.SITE_INFO)
    await store.dispatch(TYPES.FETCH_TAG)
    await store.dispatch(TYPES.FETCH_ARTICLE)
    await store.dispatch(TYPES.FETCH_CATEGORY)
  }
}
</script>

<style lang="stylus" scoped>
.section
  .swiper-warp
    height: 200px
    .swiper-container
      height: 100%
  .page
    padding: 20px
</style>
