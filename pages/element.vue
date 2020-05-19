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
