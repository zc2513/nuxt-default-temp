<template>
  <div>
    <h5>底部的展示列表</h5>
    <h5>{{ params }}</h5>
    <h5>{{ query }}</h5>
  </div>
</template>

<script>
export default {
    asyncData({ params, query }) {
        return { params, query }
    }
}
</script>

<style lang="scss" scoped>

</style>
