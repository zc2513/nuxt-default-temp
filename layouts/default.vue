<template>
  <div>
    <div style="text-align:center;">
      <nuxt-link to="/">首页</nuxt-link>
      <nuxt-link to="/icon">icon</nuxt-link>
      <nuxt-link to="/title">title</nuxt-link>
      <nuxt-link to="/element">element-UI</nuxt-link>
      <nuxt-link to="/scss">scss</nuxt-link>
    </div>
    <h4 style="color:red;">一级嵌套路由：</h4>
    <nuxt style="padding:10px 20px;" />
  </div>
</template>
<style lang="scss" scoped>
    @import '@/assets/scss/default.scss';
</style>
