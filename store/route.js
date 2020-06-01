
export const state = () => ({
    routes: null,
    nowRoute: {}
})

export const mutations = {
    setRoutes(state, routes) {
        state.routes = routes
    },
    setNowRoute(state, item) {
        state.nowRoute = item
    }
}

export const getters = {
    metas: (state) => {
        const { sole } = state.nowRoute
        console.log(sole)
        return { name: '首页' }
    }
}
