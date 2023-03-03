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
import store from '@/store'
export default {
  methods: {

    // 一般是跳转到其他子应用
    toJump () {
      console.log('子应用this.$router: ', this.$router)
      // this.$router.push('/about') 无法跳转成功

      // history 模式时，通过 history.pushState() 方式跳转
      // this.$qiankunJump('/about')

      // 将主应用的路由实例通过 props 传给子应用，子应用用这个路由实例跳转
      this.$qiankunJump('/about', store.state.router)
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
