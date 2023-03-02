<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="/" router>
          <el-menu-item index="/">
            <span slot="title">Home</span>
          </el-menu-item>
          <el-menu-item index="/about">
            <span slot="title">About</span>
          </el-menu-item>
          <el-menu-item index="/test">
            <span slot="title">Test</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss">
@import url('./styles/base.scss');
</style>
