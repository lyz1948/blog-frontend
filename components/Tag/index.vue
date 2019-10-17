<template lang="pug">
  .tag
    h3.title 标签
    .tag-list(v-if='tags.length > 0')
      .tag-item(
        v-for='(tag, index) in tags',
        :key='tag._id',
        @click="handleTag(tag._id)")
        span.name {{ tag.name }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as types from '~/constants'
export default {
  computed: {
    ...mapGetters(types.TAG, {
      tags: 'getTags'
    })
  },
  methods: {
    handleTag(id) {
      this.$store.dispatch(types.ARTICLE + '/' + types.FETCH_DATA, { [types.TAG]: id })
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
      border-radius: 4px
      background-color: #efefef
      color: $text-dark-light
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)
      cursor: pointer

      &:hover
        border-color: #f1f1f1
        background-color: #f9f9f9
        color: $text-active
</style>
