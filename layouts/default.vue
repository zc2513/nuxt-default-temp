<template>
  <div id="app">

    <div class="nav-header-container" style="backgroundColor: #000;">
      <el-menu
        class="nav-header sin-container"
        style="margin:0 auto;"
        mode="horizontal"
        :background-color="variables.hBgc"
        :text-color="variables.hText"
        :active-text-color="variables.hActiveText"
        :default-active="activeMenu"
        :collapse="false"
        :unique-opened="true"
        :collapse-transition="false"
      >
        <nav-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </div>
    <h4 style="color:red;">一级嵌套路由：</h4>
    <nuxt style="padding:10px 20px;" />
  </div>
</template>
<script>
import navItem from './header/nav'
import variables from '@/assets/scss/variables.scss'
import { latestRoutes } from '@/utils/addRoute'
export default {
    components: { navItem },
    computed: {
        routes() {
            return latestRoutes(this.$router.options.routes)
        },
        activeMenu() {
            const route = this.$route
            const { meta, path } = route
            if (meta.activeMenu) { // 子项的默认选中项路由
                return meta.activeMenu
            }
            return path
        },
        variables() {
            return variables
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/default.scss';
</style>
