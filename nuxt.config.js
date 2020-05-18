/* eslint-disable nuxt/no-cjs-in-config */
const path = require('path')
module.exports = {
    mode: 'universal',
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', type: 'image/x-icon', href: 'https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css' }
        ]
    },

    loading: { color: '#fff' },

    css: [
        'element-ui/lib/theme-chalk/index.css',
        'assets/scss/index.scss'
    ],

    plugins: [
        '@/plugins/element-ui',
        '@/plugins/components',
        '@/plugins/rem',
        '@/plugins/icon'
    ],

    buildModules: [
        '@nuxtjs/eslint-module'
    ],

    modules: ['@nuxtjs/style-resources'],
    styleResources: {
        scss: './assets/scss/mixin.scss'
    },
    router: {
        middleware: 'user-agent',
        prefetchLinks: true,
        linkActiveClass: 'active-link',
        linkExactActiveClass: 'exact-active-link',
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'notFind',
                path: '*',
                component: resolve(__dirname, 'layouts/404.vue')
            })
        }
    },
    build: {
        analyze: process.argv.join('').includes('analyze'),
        transpile: [/^element-ui/],
        productionSourceMap: false,
        productionGzip: true,
        productionGzipExtensions: ['js', 'css', 'svg'],
        extractCSS: true,
        postcss: {
            plugins: {
                'postcss-px2rem': {
                    remUnit: 192
                }
            }
        },
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
