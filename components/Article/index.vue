<template lang="pug">
  .article.flex(v-if='article')
    .info.flex-1
      .hd
        nuxt-link(:to='/article/+ article._id')
          h2 {{ article.title }}
      .bd
        p {{ article.description }}

      .ft
        ArticleFooter(:article='article')

    .cover.img-full
      img(:src='article.thumb', alt='图片')
</template>

<script>
import ArticleFooter from './footer'
import { formatTime } from '~/utils'
export default {
  components: { ArticleFooter },
  filters: {
    formatDate(ms) {
      return formatTime(ms, 'YYYY-MM-DD HH:MM:SS')
    },
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="sass">
.article
  border-bottom: 1px solid #eaeaea
  padding: 20px

  .cover
    $img-width: 200px
    $img-height: 150px
    flex: 0 0 $img-width
    width: $img-width
    height: $img-height

  .info
    position: relative
    padding-right: 20px

  .hd
    h2
      font-size: 24px
    &:hover
      h2
        color: #40a9ff
  .bd
    padding: 25px 0
    line-height: 24px
    font-size: 16px
    text-align: justify

  .ft
    position: absolute
    bottom: 0
    color: rgba(0, 0, 0, .85)

    span
      display: inline-block
      padding-right: 10px
      font-weight: 500
      color: #57676f

    .iconfont
      padding-right: 6px
      color: #57676f
      font-size: 18px

    .extra
      padding-left: 30px
      .item
        cursor: pointer
        &:hover
          .iconfont, & > span
            color: #40a9ff
</style>
