<template lang="pug">
  .container
    Header
    .content
      .layout.clearfix
        .main
          nuxt
        Sider
        .right
          Tag
</template>

<script>
import 'normalize.css';
import Header from '~/components/Header';
import Sider from '~/components/Sider';
import Tag from '~/components/Tag';

export default {
  components: {
    Header,
    Sider,
    Tag
  }
};
</script>
<style lang="sass">

.content
  background-color: rgba(245, 245, 245, 0.5)

.main,
.sider,
.right
  float: left

.sider,
.right
  width: 200px
  padding: 20px
  min-height: 100%

.main
  width: 100%
  background: #fff

.section,
.section .page
  border-left: 1px solid #eaeaea
  border-right: 1px solid #eaeaea

.section
  padding: 0 200px

.section .page
  padding: 20px

.sider
  margin-left: -100%

.right
  margin-left: -200px
</style>
