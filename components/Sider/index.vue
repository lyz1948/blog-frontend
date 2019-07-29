<template lang="pug">
  #sider.sider
    h3 分类
    .category(v-if='getList')
      .item(v-for="cate in getList", :key="cate._id")
        .name {{ cate.name }}
</template>

<script>
export default {
  computed: {
    getList() {
      return this.$store.state.category.list;
    }
  }
};
</script>
<style lang="sass">
.sider
  .category
    .name
      cursor: pointer
      &:hover
        color: #40a9ff
</style>
