<template lang="pug">
  .section.clearfix
    ArticleDetail(:article="article")

    //- 相关文章
    .mt20
    .related(v-if="article.related && article.related.length > 0")
      h3.title 相关文章
      .mb20
      ul.list
        li.item(v-for="item in article.related", :key="item.id")
          nuxt-link(:to='/article/+ item.id')
            .cover
              img(:src="item.thumb", alt="文章封面")
            .content
              h3.sub-title {{ item.title }}
              p.description {{ item.description }}
      .mb20
</template>

<script>
import ArticleDetail from '~/components/Article/detail'
import { mapGetters } from 'vuex'
import { scrollTitle } from '~/utils'
import * as types from '~/constants'

export default {
  layout: 'blog',
  components: {
    ArticleDetail
  },
  async fetch({ store, params }) {
    await store.dispatch(types.ARTICLE + '/' + types.FETCH_DETAIL, params)
    // 刷新页面处理
    if (!store.state.tag.length) {
      await store.dispatch(types.TAG + '/' + types.FETCH_DATA)
    }
    if (!store.state.category.length) {
      await store.dispatch(types.CATEGORY + '/' + types.FETCH_DATA)
    }
  },
  computed: {
    ...mapGetters(types.ARTICLE, {
      article: 'getArticle'
    }),
    getOption() {
      return this.$store.state.data
    },
  },
}
</script>
<style lang="stylus" scoped>
@import '~assets/styles/variables.styl'

.related
  .title
    font-size: $text-large

  .sub-title
    padding: 0.63rem 0 /* 10/16 */
    font-size: $text-medium

  .item
    display: inline-block
    width: 12.5rem /* 200/16 */
    height: 9.38rem /* 150/16 */
    margin-right: 1.25rem /* 20/16 */

    .content
      padding: 0 1.25rem /* 20/16 */
</style>
