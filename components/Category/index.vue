<template lang="pug">
  .category
    h3.title 分类
    .category(v-if='getList')
      .item(v-for="cate in getList", :key="cate._id")
        .name {{ cate.name }}
</template>

<script>
export default {
  computed: {
    getList() {
      return this.$store.state.category.list.data;
    }
  }
};
</script>
<style lang="sass">
.category
  .name
    font-size: 16px
    line-height: 30px
    cursor: pointer
    &:hover
      color: #40a9ff
</style>
