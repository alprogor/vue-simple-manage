<template>
  <el-container>
    <!-- 页面顶部 -->
    <el-header>
      LOGO
    </el-header>
    <!-- 页面左侧菜单 -->
    <el-aside width="200px"
              style="background-color: rgb(238, 241, 246)">
      <el-menu router='true'>
        <!-- 开启菜单中的router=true之后，点击菜单会把index作为路由跳转路径 -->
        <el-menu-item index="/admin/product">
          <i class="el-icon-setting"></i>产品管理
        </el-menu-item>
        <el-menu-item index="/admin/client">
          <i class="el-icon-setting"></i>客户管理
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <!-- 仅仅修改中间区域的代码，其他与之前不变 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #c1cbd8;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  name: 'AdminIndex'
}
</script>
