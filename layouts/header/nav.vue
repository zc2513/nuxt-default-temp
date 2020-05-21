<template>
  <div v-show="!item.hidden">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)">
      <app-link
        v-if="onlyOneChild.meta"
        :to="resolvePath(onlyOneChild.path)"
      >
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{'submenu-title-noDropdown':!isNest,'is-active':$route.path.startsWith(basePath)&&basePath!='/'} "
        >
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu
      v-else
      ref="subMenu"
      :class="{'is-active':$route.path.startsWith(basePath)}"
      :index="resolvePath(item.path)"
      @click.native="gotoTitle(resolvePath(item.path))"
    >
      <template slot="title">
        <item v-if="item.meta" :title="item.meta.title" />
      </template>
      <nav-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import Item from './item'
import AppLink from './link'
import { isExternal } from '@/utils/validate'

export default {
    name: 'NavItem',
    components: { Item, AppLink },
    props: {
        item: {
            type: Object,
            required: true
        },
        isNest: {
            type: Boolean,
            default: false
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    data() {
        this.onlyOneChild = null
        return {}
    },
    methods: {
        hasOneShowingChild(children = [], parent) {
            const showingChildren = children.filter((item) => {
                // 隐藏的不存，不隐藏的存储
                if (item.hidden) {
                    return false
                } else {
                    // 临时节点存储
                    this.onlyOneChild = item
                    return true
                }
            })

            // 处理隐藏路由后，返回的数组长度，如果为1则直接显示路由，如果为多个则执行带有下拉的渲染列表
            // if (showingChildren.length === 1) {
            //     return true
            // }

            // 如果没有要显示的子路由器，则显示父路由器，执行单个渲染
            if (showingChildren.length === 0) {
                this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
                return true
            }
            //
            return false
        },
        resolvePath(routePath) {
            if (isExternal(routePath)) {
                return routePath
            }
            if (isExternal(this.basePath)) {
                return this.basePath
            }
            return path.resolve(this.basePath, routePath)
        },
        gotoTitle(path) { // 多级选择标题跳转
            this.$router.push(path)
        }
    }
}
</script>
