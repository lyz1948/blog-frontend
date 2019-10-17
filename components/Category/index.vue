<template lang="pug">
  .category
    h3.title 分类
    .category(v-if='categories.length > 0')
      .item(v-for="cate in categories", :key="cate._id", @click="handleCategory(cate._id)")
        span.iconfont.icon-ts-maintenance
        span.name {{ cate.name }}
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '~/constants'

export default {
  computed: {
    ...mapGetters(types.CATEGORY, {
      categories: 'getCategories'
    }),
  },
  methods: {
    handleCategory(id) {
      this.$store.dispatch(types.ARTICLE + '/' + types.FETCH_DATA, { [types.CATEGORY]: id })
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
