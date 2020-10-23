<template lang="pug">
  .article-list(v-if='articles && articles.data.length > 0')
    Article(v-for='article in articles.data', :key='article._id', :article='article')

  .article-list.tac(v-else) 暂无文章
</template>

<script>
import { mapGetters } from 'vuex'
import Article from './index'
import * as types from '~/constants'

export default {
  components: {
    Article,
  },
  computed: {
    ...mapGetters(types.ARTICLE, {
      articles: 'getArticles',
    }),
  },
}
</script>

<style lang="stylus">
.article-list
  .article
    padding-bottom: 20px
</style>
