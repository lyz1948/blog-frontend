<template lang="pug">
  .article-list(v-if='getList')
    Article(v-for='article in getList.data', :key='article._id', :article='article')

  .article-list(v-else) 暂无文章
</template>

<script>
import Article from './index'
export default {
  components: {
    Article
  },
  computed: {
    getList() {
      return this.$store.state.article.list
    }
  }
}
</script>

<style lang="sass">
.article-list
  .article
    padding-bottom: 20px
</style>
