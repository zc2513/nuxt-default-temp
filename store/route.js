
export const state = () => ({
    routes: null,
    nowRoute: {}
})

export const mutations = {
    setRoutes(state, routes) {
        state.routes = JSON.stringify(routes)
    },
    setNowRoute(state, item) {
        state.nowRoute = item
    }
}

export const getters = {
    metas: (state) => {
        const { sole } = state.nowRoute
        console.log(sole)
        console.log(JSON.parse(state.routes))
        return { name: '首页' }
    }
}
