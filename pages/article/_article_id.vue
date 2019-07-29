<template lang="pug">
  .section
    .page
      ArticleDetail(:article='getArticle')
</template>

<script>
import ArticleDetail from '~/components/Article/detail';
import { ARTICLE_DETAIL } from '~/constants';

export default {
  layout: 'blog',
  components: {
    ArticleDetail
  },
  computed: {
    getArticle() {
      return this.$store.state.article.detail;
    }
  },
  async fetch({ store, params }) {
    await store.dispatch(ARTICLE_DETAIL, params);
  }
};
</script>
