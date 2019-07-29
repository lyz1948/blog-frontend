<template lang="pug">
  .article-detail.flex(v-if='article')
    .info.flex-1
      .hd
        h1 {{ article.title }}
        .cover.img-full
          img(:src='article.thumb', alt='图片')

      .bd
        div(v-html='article.content')

      .ft.flex
        .auth
          span.iconfont.icon-zan
          span {{ article.author }}

        .created-time
          span.iconfont.icon-date
          span {{ article.create_at | formatDate }}

        .extra.flex.flex-1
          .item.view
            span.iconfont.icon-eye
            span {{ article.meta.views }}
          .item.star
            span.iconfont.icon-star
            span {{ article.meta.likes }}
          .item.star
            span.iconfont.icon-xinxi
            span {{ article.meta.comments }}
</template>

<script>
import { formatTime } from '~/utils';
export default {
  filters: {
    formatDate(ms) {
      return formatTime(ms, 'YYYY-MM-DD HH:MM:SS');
    }
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="sass">
.article-detail
  .cover
    $img-width: 400px
    $img-height: 300px
    flex: 0 0 $img-width
    width: $img-width
    height: $img-height
    margin: 0 auto

  .info
    padding-right: 20px

  .ft
    span
      display: inline-block
      padding-right: 10px
      cursor: default

    .iconfont
      padding-right: 6px
      color: #969696

    .extra
      padding-left: 30px
    .item
      text-align: right
</style>
