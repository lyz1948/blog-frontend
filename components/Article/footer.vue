<template lang="pug">
  .article-foot.flex(v-if="article")
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
.article-foot
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
