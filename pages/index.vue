<template lang="pug">
  .section
    .page
      .swiper-warp
        MySwiper(:list="banners")
      ArticleList
</template>

<script>
import 'normalize.css'
import * as types from '~/constants'
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
      isFetched: false,
      banners: [
        'https://static.surmon.me/FjFP6eoKlnmserSMLDAILX1guauY?imageView2/1/w/1190/h/420/format/webp/interlace/1/q/80|watermark/2/text/U3VybW9uLm1l/font/Y2FuZGFyYQ==/fontsize/680/fill/I0ZGRkZGRg==/dissolve/30/gravity/SouthWest/dx/30/dy/15|imageslim',
        'https://static.surmon.me/FrkYADJJj0kFwHEkUXl14ZHj5YMS?imageView2/1/w/1190/h/420/format/webp/interlace/1/q/80|watermark/2/text/U3VybW9uLm1l/font/Y2FuZGFyYQ==/fontsize/680/fill/I0ZGRkZGRg==/dissolve/30/gravity/SouthWest/dx/30/dy/15|imageslim'
      ]
    }
  },
  async fetch({ store }) {
    if (this.isFetched) return
    this.isFetched = true
    await store.dispatch(types.SITE_INFO)
    await store.dispatch(types.BATCH_TAG)
    await store.dispatch(types.BATCH_CATEGORY)
    await store.dispatch(types.BATCH_ARTICLE)
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
