<template lang="pug">
  .container
    Header
    .content
      .layout.clearfix
        .main
          nuxt
        .sider
          Category
          Tag

</template>

<script>
import 'normalize.css';
import Header from '~/components/Header';
import Category from '~/components/Category';
import Tag from '~/components/Tag';

export default {
  components: {
    Header,
    Category,
    Tag
  }
};
</script>
<style lang="sass">

.content
  // background-color: rgba(245, 245, 245, 0.5)

.main,
.sider,
.right
  float: left

.sider,
.right
  width: 250px
  padding: 20px
  min-height: 100%

.main
  width: 100%
  background: #fff

// .section,
// .section .page
  // border-left: 1px solid #eaeaea
  // border-right: 1px solid #eaeaea

.section
  padding-right: 250px

.section .page
  padding: 20px 20px 20px 140px

.sider
  margin-left: -250px
</style>
