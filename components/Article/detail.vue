<template lang="pug">
  .article-detail(v-if="getArticle")
    .cover
      img(:src="article.thumb", alt="图片")

    h2.title {{ article.title }}

    ArticleFooter(:article="article")

    .content
      p.description {{ article.description }}

      .content(v-if="article.public == 1", v-html="article.content")

      div(v-else)
        .content(v-if="article.content", v-html="article.content.substring(0, 200)")
        .mt20
        p 查看更多
</template>

<script>
import ArticleFooter from './footer'
import { formatTime } from '~/utils'

export default {
  components: {
    ArticleFooter,
  },
  props: {
    article: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  filters: {
    formatDate(ms) {
      return formatTime(ms, 'YYYY-MM-DD HH:MM:SS')
    },
  },
  computed: {
    getArticle() {
      return this.article
    },
  },
}
</script>
<style lang="stylus">
@import '~assets/styles/variables.styl'

.article-detail
  padding: 0 1.25rem /* 20/16 */
  background-color: #fdfdfd

  .cover
    position: relative
    width: 100%
    height: 0
    padding-top: 60%

    img
      position: absolute
      width: 100%
      height: 100%
      left: 0
      top: 0

  .title
    color: #484646
    padding: 0.94rem 0 /* 15/16 */
    font-size: $text-x-large

  .sub-title
    padding: 1.25rem 0 /* 20/16 */
    color: #736969
    font-size: $text-medium

  .description
    font-size: $text-small

  .content
    padding: 1.25rem /* 20/16 */ 0
</style>
