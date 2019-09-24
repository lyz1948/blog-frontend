<template lang="pug">
  .tag.mt20
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

.<style lang="sass">
.sider
  .title
    font-size: 1.25rem
    padding: 10px 0
  .tag
    .tag-item
      display: inline-block
      margin-right: 10px
      margin-bottom: 10px
      .name
        display: inline-block
        padding: 5px 9px
        font-size: 14px
        border: 1px solid #d8d8d8
        border-radius: 4px
        color: #787878
        background-color: #e8e8e8
        cursor: pointer
        &:hover
          background-color: #fafafa
          color: #40a9ff
</style>
