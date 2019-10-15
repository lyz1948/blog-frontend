<template lang="pug">
.swiper-container
  .swiper-wrapper
    .swiper-slide(v-for="(item, index) in list", :key="index")
      img(:src="item" width="100%" height="100%")
  .swiper-pagination(v-if="hasPage")
  .swiper-button-prev(v-if="hasBtn")
  .swiper-button-next(v-if="hasBtn")
  .swiper-scrollbar(v-if="hasBar")
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'mySwiper',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    hasPage: {
      type: Boolean,
      default: true,
    },
    hasBtn: {
      type: Boolean,
      default: false,
    },
    hasBar: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      speed: 400,
      loop: true,
      autoplay: true
    })
  }
}
</script>
