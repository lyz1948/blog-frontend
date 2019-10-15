<template lang="pug">
  .article.flex(v-if='article')

    .cover.img-full
      img(:src='article.thumb', alt='图片')

    .info.flex-1
      .hd
        nuxt-link(:to='/article/+ article._id')
          h2 {{ article.title }}
      .bd
        p {{ article.description }}

      .ft
        ArticleFooter(:article='article')

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
<style lang="stylus">
@import '~assets/styles/variables.styl'
.article
  padding: 20px 0
  margin-bottom: 20px
  background-color: #fdfdfd
  border-bottom: 1px solid #eaeaea
  transition: all .8s
  &:hover
    box-shadow: 5px 3px 7px 0px #bfbfbf
    transform: translate(2px, 2px, 100px)

  .cover
    $img-width = 200px
    $img-height = 150px
    flex: 0 0 $img-width
    width: $img-width
    height: $img-height

  .info
    position: relative
    padding: 0 20px

  .hd
    h2
      color: $text-dark
      font-weight: 500
      font-size: $text-large
    &:hover
      h2
        color: #40a9ff
  .bd
    padding: 25px 0
    line-height: 24px
    font-size: $text-medium
    text-align: justify

</style>
