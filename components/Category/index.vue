<template lang="pug">
  .category
    h3.title 分类
    .category(v-if='categories')
      .item(v-for="cate in categories", :key="cate._id", @click="handleCategory(cate._id)")
        span.iconfont.icon-ts-maintenance
        span.name {{ cate.name }}
</template>

<script>
import { mapGetters } from 'vuex'
import { FILTER_CATEGORY } from '~/constants'
export default {
  computed: {
    ...mapGetters('category', {
      categories: 'getCategories'
    }),
  },
  methods: {
    handleCategory(id) {
      this.$store.dispatch(FILTER_CATEGORY, id)
    }
  }
};
</script>
<style lang="stylus">
@import '~assets/styles/variables.styl'

.category
  .item
    &:hover
      & > span
        color: $text-active
    .name
      line-height: 30px
      margin-left: .63rem
      font-size: $text-small
      color: $text-dark
      cursor: pointer
</style>
