<template>
  <div>
    <h4>文件夹下存在index页面情况时，二级路由配置规则,特点：</h4>
    1.当前页面作为布局页面<br>
    2.所有one文件夹下的页面都属于当前页面的嵌套内容<br>
    3.默认展示index页面内容,如果找不到则会寻找动态路由页面one/:pa? <br>
    <h4>以下属于嵌套内容</h4>
    <nuxt-child />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>

</style>
