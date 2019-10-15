<template lang="pug">
  .article-detail(v-if='article')
    .info
      .hd
        h1 {{ article.title }}

      .bd
        .cover.img-full
          img(:src='article.thumb', alt='图片')

        h3 {{ article.description }}

        div.content.mt20(v-html='article.content')

      .ft
        ArticleFooter(:article='article')

</template>

<script>
import ArticleFooter from './footer'
import { formatTime } from '~/utils'
export default {
  components: {
    ArticleFooter,
  },
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
$img-width = 400px
$img-height = 300px

.article-detail
  padding: 20px

  .info
    padding: 20px
    background-color: #fdfdfd
    .hd
      h1
        color: #484646

      h3
        color: #736969
        font-size: 18px

    .bd
      padding: 20px 0
      font-size: 16px

      .cover
        flex: 0 0 $img-width
        width: $img-width
        height: $img-height
</style>
