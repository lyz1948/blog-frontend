<template lang="pug">
  .section
    .page
      ArticleList
</template>

<script>
import 'normalize.css'
import * as TYPES from '~/constants'
import ArticleList from '~/components/Article/list'

export default {
  layout: 'blog',
  components: {
    ArticleList
  },
  async fetch({ store }) {
    await store.dispatch(TYPES.SITE_INFO)
    await store.dispatch(TYPES.FETCH_TAG)
    await store.dispatch(TYPES.FETCH_ARTICLE)
    await store.dispatch(TYPES.FETCH_CATEGORY)
  }
}
</script>

<style scoped>
#home {
  min-height: 100%;
}
</style>
