<template>
  <baidu-map :center="center" :zoom="zoom" class="bm-view" @ready="handler">
  </baidu-map>
</template>

<script>

export default {
  components: {},

  data () {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3
    }
  },

  created () {},

  methods: {
    handler ({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  }

}

</script>

<style scoped>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
