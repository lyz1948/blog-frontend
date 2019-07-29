<template lang="pug">
  .tag
    h3 标签
    .tag-list(v-if='getList')
      .tag-item(v-for='tag in getList', :key='tag._id')
        span.name(color='#2db7f5') {{ tag.name }}
</template>

<script>
export default {
  computed: {
    getList() {
      return this.$store.state.tag.list;
    }
  }
};
</script>

.<style lang="sass">
.tag
  .tag-item
    display: inline-block
    margin-right: 10px
    margin-bottom: 10px
    .name
      display: inline-block
      padding: 5px 9px
      font-size: 13px
      border: 1px solid #eaeaea
      border-radius: 2px
      color: #787878
      cursor: pointer
      &:hover
        background-color: #fafafa
        color: #40a9ff
</style>
