<template>
  <div>
    <div style="height:50px;" class="toggle-color">首页</div>
    <div>
      <themeColor />
    </div>
  </div>

</template>

<script>
export default {
    async asyncData({ $axios, store }) {
        const type_store = await store.getters.themeType
        return {
            type_store
        }
    },
    mounted() {
        window.document.documentElement.setAttribute('data-theme', this.type_store)
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

</style>
