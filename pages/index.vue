<template lang="pug">
  .section
    .swiper-warp
      MySwiper(:list="banners")
    .mt20
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
        'http://cdn.ykpine.com/image/px500_1.png',
        'http://cdn.ykpine.com/image/px500_2.png',
        'http://cdn.ykpine.com/image/px500_3.png',
        'http://cdn.ykpine.com/image/px500_4.png',
        'http://cdn.ykpine.com/image/px500_5.png',
      ]
    }
  },
  async fetch({ store }) {
    if (this.isFetched) return
    this.isFetched = true
    await store.dispatch(types.FETCH_DATA)
    await store.dispatch(types.TAG + '/' + types.FETCH_DATA)
    await store.dispatch(types.CATEGORY + '/' + types.FETCH_DATA)
    await store.dispatch(types.ARTICLE + '/' + types.FETCH_DATA)
  },
  mounted() {
    let text = `(^_^) ${decodeURIComponent(this.getOption.sub_title)} - ${this.getOption.title}  `
    let timerId
    const loopTitle = () => {
      clearTimeout(timerId)
      document.title = text.substring(1, text.length) + text.substring(0, 1)
      text = document.title.substring(0, text.length)
      timerId = setTimeout(loopTitle, 800)
    }
    loopTitle()
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState == 'hidden') {
        document.title = 'Oh, My God!'
        clearTimeout(timerId)
      } else {
        loopTitle()
      }
    })
  },
  computed: {
    getOption() {
      return this.$store.state.data
    }
  },
  watch: {
    '$router': function() {
      console.log('router')
    }
  }
}
</script>

<style lang="stylus" scoped>
.section
  .swiper-warp
    height: 300px

    .swiper-container
      height: 100%

  .page
    padding: 20px
</style>
