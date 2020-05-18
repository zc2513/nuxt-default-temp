import { setToken, getcookiesInServer } from '@/utils/auth'

export const state = () => ({
    themeType: ''
})

export const mutations = {
    upType: (state, data) => {
        const type = data.themeType
        state.themeType = type
        setToken(type, 'themeType')
    }
}
export const actions = {
    nuxtServerInit({ dispatch, commit }, { req, app: { $axios }}) {
        const flag_type = getcookiesInServer(req).themeType
        const themeType = flag_type !== undefined ? flag_type : 'defalut'
        commit('upType', { themeType })
    }
}
export const getters = {
    themeType: state => state.themeType
}
