<template>
  <div>
    动态路由id页面 <br>
    tow/:type?/:id <br>
    验证pa参数为Number <br>
    所有one路由下匹配不到的页面都会进入当前页面 <br>
    {{ params }}
  </div>
</template>

<script>
export default {
    validate({ params, redirect }) {
        if (/^\d+$/.test(params.id)) {
            return true
        } else {
            redirect('/404')
        }
    },
    asyncData({ params }) {
        console.log(params)
        return { params }
    }
}
</script>

<style lang="sass" scoped>

</style>
