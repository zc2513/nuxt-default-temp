<template>
  <div>
    <h4> 二级多路由布局页面---（当前页面为非demo/info路由的其它demo/path页面，path为其它任意值）</h4>
    <p>验证只有demo/news、demo/add、demo/edit;三个路由可以进入当前页面</p>
    <p>{{ params }}</p>
    <el-row :gutter="20">
      <el-col :span="16">
        筛选条件部分
      </el-col>
      <el-col :span="8" />
    </el-row>
  </div>
</template>

<script>
export default {
    validate({ params, redirect }) {
        if (params.type === 'news' || params.type === 'add' || params.type === 'edit') {
            return true
        } else {
            redirect('/404')
        }
    },
    asyncData({ params }) {
        return { params }
    }
}
</script>

<style lang="scss" scoped>

</style>
