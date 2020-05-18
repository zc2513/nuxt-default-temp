<template>
  <div style="display:inline-block;">
    <el-dropdown>
      <span class="el-dropdown-link">
        主题色<i class="el-icon-arrow-down el-icon--right" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="theme('defalut')">默认</el-dropdown-item>
        <el-dropdown-item @click.native="theme('blue')">蓝色</el-dropdown-item>
        <el-dropdown-item @click.native="theme('Danger')">危险</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- <el-color-picker
      v-model="color"
      size="small"
      class="theme-picker"
      popper-class="theme-picker-dropdown"
      @change="changeColor"
    /> -->
  </div>
</template>

<script>
export default {

    data() {
        return {
            color: 'rgba(255, 69, 0, 0.68)'
        }
    },
    methods: {
        changeColor(v) {
            console.log(v, 999)
        },
        // 换主题
        theme(type) {
            this.$store.commit('upType', { themeType: type })
            window.document.documentElement.setAttribute('data-theme', type)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
