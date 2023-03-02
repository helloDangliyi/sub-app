<template>
  <!-- 子应用本身自己的菜单,需要侧边菜单 -->

  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="$route.path" router>
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
</template>
