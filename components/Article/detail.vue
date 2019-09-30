<template lang="pug">
  .article-detail.flex(v-if='article')
    .info.flex-1
      .hd
        h1 {{ article.title }}
        h3 {{ article.description }}

      .bd
        .cover.img-full
          img(:src='article.thumb', alt='图片')
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
<style lang="sass">
.article-detail
  .cover
    $img-width: 400px
    $img-height: 300px
    flex: 0 0 $img-width
    width: $img-width
    height: $img-height

  .info
    padding-right: 20px
    padding-bottom: 20px
    color: #333

    .hd
      h1
        margin: 10px 0
        color: #484646
      h3
        color: #736969
        font-size: 18px
    .bd
      padding: 20px 0
      font-size: 16px

    // .ft
    //   span
    //     display: inline-block
    //     padding-right: 10px
    //     cursor: default

    //   .iconfont
    //     padding-right: 6px
    //     color: #969696

    //   .extra
    //     padding-left: 30px
    //   .item
    //     text-align: right
</style>
