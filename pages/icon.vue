<template>
  <div>
    <div style="height:50px;" class="toggle-color">
      icon
    </div>
    <svg-icon icon-class="password" style="color:red;font-size:40px;" />
    <svg-icon icon-class="search" style="font-size:40px;color:red;" />
    <svg-icon icon-class="tst" style="font-size:40px;color:blue;" />
  </div>
</template>
<script>
export default {
    async asyncData({ $axios, store }) {
        // console.log(await store.getters, 666)
    }
}
</script>
<style lang="scss" scoped>

</style>

