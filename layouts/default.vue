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
// import metas from '@/assets/jsons/metas'
import variables from '@/assets/scss/variables.scss'
import { latestRoutes } from '@/utils/addRoute'
export default {
    components: { navItem },
    computed: {
        routes() {
            const routeList = this.$router.options.routes
            // const newRoutes = this.addRule(routeList)
            // this.addSort(newRoutes)
            // newRoutes.sort(({ sole: a }, { sole: b }) => a - b)
            // console.log(newRoutes)
            return latestRoutes(routeList)
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
    },
    methods: {
        // addRule(routes) {
        //     return routes.map((item) => {
        //         const { name, children, path } = item
        //         if (path.startsWith(':')) {
        //             item.hidden = true
        //         }
        //         if (name) {
        //             const itemMeta = metas[name]
        //             if (!itemMeta) {
        //                 console.warn(`警告：未在metas中找到key为 ${name} 的定义`)
        //             }
        //             if (children && children.length) {
        //                 return { ...item, ...itemMeta, children: this.addRule(children) }
        //             } else {
        //                 return { ...item, ...itemMeta }
        //             }
        //         } else if (children && children.length) {
        //             return { ...item, children: this.addRule(children) }
        //         }
        //     })
        // },
        // addSort(newRoutes) {
        //     for (const item of newRoutes) {
        //         const { sole, children } = item
        //         if (!sole && children && children.length) {
        //             const { sole, meta } = children[0]
        //             item.sole = sole
        //             if (!item.meta) item.meta = meta || {}
        //             children.sort(({ sole: a }, { sole: b }) => a - b)
        //             this.addSort(children)
        //         } else if (children && children.length) {
        //             this.addSort(children)
        //         }
        //     }
        // }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/default.scss';
</style>
