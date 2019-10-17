<template lang="pug">
  .section
    .page
      ArticleDetail(:article="article")
</template>

<script>
import ArticleDetail from '~/components/Article/detail'
import { mapState, mapGetters } from 'vuex'
import * as types from '~/constants'

export default {
  layout: 'blog',
  components: {
    ArticleDetail
  },
  computed: {
    ...mapGetters(types.ARTICLE, {
      article: 'getArticle'
    })
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
  }
}
</script>
