<template>
  <div>
    二级默认页面 <br>
    类型判断页面，即路由嵌套布局页面<br>
    {{ params }}
    <h4 style="color:red;">三级嵌套-以下为下级路由页面:</h4>
    <nuxt-child style="padding:5px 20px;" />
  </div>
</template>

<script>
export default {
    asyncData({ params }) {
        return { params }
    }
}
</script>
