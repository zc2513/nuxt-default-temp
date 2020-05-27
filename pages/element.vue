<template>
  <div>
    <h4>待添加按需加载</h4>
    <el-switch
      v-model="value1"
      active-text="按月付费"
      inactive-text="按年付费"
    />
    <el-switch
      v-model="value2"
      style="display: block"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费"
    />

    <el-rate
      v-model="value"
      show-text
    />

    <div>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            value: null,
            value1: true,
            value2: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
