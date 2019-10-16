<template lang="pug">
  .article-list(v-if='articles && articles.length > 0')
    Article(v-for='article in articles', :key='article._id', :article='article')

  .article-list.tac(v-else) 暂无文章
</template>

<script>
import Article from './index'
import { mapGetters } from 'vuex'

export default {
  components: {
    Article
  },
  computed: {
    ...mapGetters('article', {
      articles: 'getArticles'
    })
  }
}
</script>

<style lang="stylus">
.article-list
  .article
    padding-bottom: 20px
</style>
