<template lang="pug">
  .article-list(v-if='getList')
    Article(v-for='article in getList.data', :key='article._id', :article='article')
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

<style>
.article-list .article {
  padding-bottom: 20px;
}
</style>
