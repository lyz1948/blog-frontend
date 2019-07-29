<template lang="pug">
  .article.flex(v-if='article')
    .info.flex-1
      .hd
        nuxt-link(:to='/article/+ article._id')
          h2 {{ article.title }}
      .bd
        p {{ article.description }}

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

    .cover.img-full
      img(:src='article.thumb', alt='图片')
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
.article
  border-bottom: 1px solid #eaeaea
  margin-bottom: 20px

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
    &:hover
      h2
        color: #40a9ff

  .ft
    position: absolute
    bottom: 0

    span
      display: inline-block
      padding-right: 10px
      cursor: default

    .iconfont
      padding-right: 6px
      color: #969696

    .extra
      padding-left: 30px
</style>
