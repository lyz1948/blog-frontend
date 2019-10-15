<template lang="pug">
  .category
    h3.title 分类
    .category(v-if='getList')
      .item(v-for="cate in getList", :key="cate._id")
        span.iconfont.icon-ts-maintenance
        span.name {{ cate.name }}
</template>

<script>
export default {
  computed: {
    getList() {
      return this.$store.state.category.list.data
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
