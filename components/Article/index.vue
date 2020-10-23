<template lang="pug">
  .article.flex(v-if='article')
    .post-badge {{ article.origin === 0 ? '原创' : article.origin === 1 ? '转载' : '混合' }}

    .cover.img-full
      img(:src='article.thumb', alt='图片')

    .info.flex-1
      nuxt-link(:to='/article/+ article._id')
        h2.title {{ article.title }}

      .bd
        p.description {{ article.description }}

      ArticleFooter(:article='article')

</template>

<script>
import ArticleFooter from './footer'
import { formatTime } from '~/utils'

export default {
  components: { ArticleFooter },
  filters: {
    formatDate(ms) {
      return formatTime(ms, 'YYYY-MM-DD HH:MM:SS')
    },
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="stylus">
@import '~assets/styles/variables.styl'

.article
  position: relative
  padding: 20px 0
  margin-bottom: 20px
  background-color: #fdfdfd
  border-bottom: 1px solid #eaeaea
  transition: all 0.8s

  &:hover
    box-shadow: 5px 3px 7px 0px #bfbfbf
    transform: translate(2px, 2px, 100px)

  .post-badge
    position: absolute
    left: -16px
    top: 10px
    margin: 5px 0 15px 2px
    padding: 7px 11px 7px 32px
    line-height: 1
    font-size: 14px
    border-color: #175649
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)
    background-color: #1f9853
    border-radius: 0 4px 4px 0
    color: #fff

    &::after
      position: absolute
      content: ''
      top: 100%
      left: 0
      border-top: 0 solid transparent
      border-right-width: 1em
      border-right-color: inherit
      border-right-style: solid
      border-bottom: 1em solid transparent
      border-left: 0 solid transparent
      width: 0
      height: 0

  .cover
    $img-width = 200px
    $img-height = 150px
    flex: 0 0 $img-width
    width: $img-width
    height: $img-height

  .info
    position: relative
    padding: 0 20px

  .title
    color: $text-dark
    font-weight: 500
    font-size: $text-large

    &:hover
      color: #40a9ff

  .bd
    padding: 1.25rem 0 /* 20/16 */
    line-height: 24px
    text-align: justify

    .description
      font-size: $text-medium
</style>
