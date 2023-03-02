<template>
  <div class="sub-app">
    <div>Test我是子应用</div>

    <br>
    <br>
    <br>

    <!-- 无法跳转成功 -->
    <el-button  @click="toJump">跳转</el-button>
    <br>
    <br>
    <br>
    <a href="/about">跳转</a>
    <br>
    <br>
    <br>
  </div>
</template>

<script>

export default {
  methods: {
    toJump () {
      console.log('子应用this.$router: ', this.$router)
      this.$router.push('/about')
    }
  }
}

</script>

<style scoped>
.sub-app {
  cursor: pointer;
  background-color: aqua;
  width:200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
