<template>
  <div>
    动态路由页面 <br>
    one/:pa? <br>
    验证pa参数为Number <br>
    所有one路由下匹配不到的页面都会进入当前页面 <br>
    {{ params }}
  </div>
</template>

<script>
export default {
    validate({ params, redirect }) {
        if (/^\d+$/.test(params.pa)) {
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
