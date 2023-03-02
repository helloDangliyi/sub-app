<template>
  <div class="sub-app">
    Test我是子应用
  </div>
</template>

<script>

export default {
  mounted () {
    console.log(this.$route)
  }
}

</script>

<style scoped>
.sub-app {
  cursor: pointer;
  background-color: aqua;
  width:200px;
}
</style>
