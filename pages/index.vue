<template>
  <div class="main center yellow">
    <div class="w300 h300 center red">首页---测试px2</div>
  </div>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        await $axios.$get('/Handler/SearchHandler.ashx?OP=SearchData')
    }
}
</script>

<style lang="scss" scoped>
.main{
    width: 1366px;
}
.center{
    margin: 0 auto;
}
.w300{
    width: 300px;
}
.w500{
    width: 500px;
}
.w400{
    width: 400px;
}
.h300{
    height: 300px;
}
.h200{
    height: 200px;
}
.h400{
    height: 400px;
}
.red{
    background-color: #F00;
}
.blue{
    background-color: #00F;
}
.yellow{
    background-color: #FF0;
}
</style>
