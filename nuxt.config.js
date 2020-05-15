/* eslint-disable nuxt/no-cjs-in-config */
const path = require('path')
module.exports = {
    mode: 'universal',
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    loading: { color: '#fff' },

    css: [
        'element-ui/lib/theme-chalk/index.css',
        'assets/scss/index.scss'
    ],

    plugins: [
        '@/plugins/element-ui',
        '@/plugins/components',
        '@/plugins/icon'
    ],

    buildModules: [
        '@nuxtjs/eslint-module'
    ],

    modules: [],
    router: {
        linkActiveClass: 'active-link',
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'notFind',
                path: '*',
                component: resolve(__dirname, 'layouts/404.vue')
            })
        }
    },
    build: {
        transpile: [/^element-ui/],

        extend(config, ctx) {
            const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
            svgRule.exclude = [path.join(__dirname, 'assets/svgs')]
            config.module.rules.push({
                test: /\.svg$/,
                include: [path.join(__dirname, 'assets/svgs')],
                loader: 'svg-sprite-loader',
                options: {
                    symbolId: 'icon-[name]'
                }
            })
        }
    }
}
