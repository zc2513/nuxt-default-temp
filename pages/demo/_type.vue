<template>
  <div>
    <h4> 二级多路由布局页面---（当前页面为非demo/info路由的其它demo/path页面，path为其它任意值）</h4>
    <p>验证只有demo/news、demo/add、demo/edit;三个路由可以进入当前页面</p>
    <p>{{ params }}</p>
    <el-row style="background:#0F0;padding:20px;">
      <el-col :span="16" style="background:#F00;">
        <div style="background:#ccc;height:80px;text-align:center;line-height:80px;">
          筛选条件部分
        </div>
        <div style="background:#F0F;color:#FFF;margin-top:10px;height:300px;text-align:center;">
          分页数据展示占用框nuxt-child
          <nuxt-child />
        </div>
      </el-col>
      <el-col :span="8" style="text-align:center;">
        <div style="background:#FF0;">
          广告位1
        </div>
      </el-col>
    </el-row>
    </el-rowstyle="background:#0f0;"></div>
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
    },

    watch: {
        $route: {
            handler(v) {
                console.log(v)
            },
            immediate: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
