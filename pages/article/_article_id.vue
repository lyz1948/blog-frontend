<template lang="pug">
  .section
    .page
      ArticleDetail(:article="article")
</template>

<script>
import ArticleDetail from '~/components/Article/detail'
import * as types from '~/constants'
import { mapState, mapGetters } from 'vuex'

export default {
  layout: 'blog',
  components: {
    ArticleDetail
  },
  computed: {
    article() {
      return this.$store.state.article.article
    },
    tags() {
      return this.$store.state.tag.tag
    },
    categories() {
      return this.$store.state.category.category
    },
  },
  async fetch({ store, params }) {
    await store.dispatch(types.FETCH_ARTICLE, params)
    if (!store.state.tag) {
      await store.dispatch(types.BATCH_TAG)
    }
    if (!store.state.category) {
      await store.dispatch(types.BATCH_CATEGORY)
    }
  }
}
</script>
