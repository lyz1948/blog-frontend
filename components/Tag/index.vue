<template lang="pug">
  .tag
    h3.title 标签
    .tag-list(v-if='getList')
      .tag-item(v-for='(tag, index) in getList', :key='tag._id')
        span.name {{ tag.name }}
</template>

<script>
export default {
  data() {
    return {
      colors: ['#33b5e5', '#fb3', '#00c851', '#ff3547', '#f50', '#2db7f5', '#87d068', '#108ee9']
    }
  },
  computed: {
    getList() {
      return this.$store.state.tag.list.data;
    }
  }
};
</script>

.<style lang="stylus">
@import '~assets/styles/variables.styl'

.tag
  .tag-item
    display: inline-block
    margin-right: 10px
    margin-bottom: 10px

    .name
      display: inline-block
      padding: 5px 9px
      font-size: 12px
      border: 1px solid #f1f1f1
      border-radius: 2px
      background-color: #efefef
      color: $text-dark
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)
      cursor: pointer

      &:hover
        border-color: #f1f1f1
        background-color: #f9f9f9
        color: $text-active
</style>
