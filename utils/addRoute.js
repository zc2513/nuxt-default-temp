import metas from '@/assets/jsons/metas'
/**
 * @description 给nuxt/router追加附加项
 * @author zc2513
 * @date 2020-05-21
 * @param {*} routes
 * @param {*} metas
 * @returns 返回配置后的数据
 */
export function addRule(routes) {
    return routes.map((item) => {
        const { name, children, path } = item
        if (path.startsWith(':')) {
            item.hidden = true
        }
        if (name) {
            const itemMeta = metas[name]
            if (!itemMeta) {
                console.warn(`警告：未在metas中找到key为 ${name} 的定义`)
            }
            if (children && children.length) {
                return { ...item, ...itemMeta, children: addRule(children) }
            } else {
                return { ...item, ...itemMeta }
            }
        } else if (children && children.length) {
            return { ...item, children: addRule(children) }
        }
    })
}

/**
 * @description 配置嵌套路由，将默认项配置提取到父及配置  并对children子项进行排序
 * @author zc2513
 * @date 2020-05-21
 * @export addSort
 * @param {*} newRoutes 追加配置后的nuxt/router文件
 */

export function addSort(newRoutes) {
    for (const item of newRoutes) {
        const { sole, children } = item
        if (!sole && children && children.length) { // 没有slot但是有子项的
            const { sole, meta } = children[0]
            item.sole = sole
            if (!item.meta) item.meta = meta || {}
            children.sort(({ sole: a }, { sole: b }) => a - b) // 放到此处原因：数据第一次进入时存在父级别无sole问题
            addSort(children)
        } else if (children && children.length) {
            addSort(children)
        }
    }
}

/**
 * @description 对最外层路由进行排序
 * @author zc2513
 * @date 2020-05-21
 * @export fsort
 * @param {*} newRoutes
 */
export function fsort(newRoutes) {
    newRoutes.sort(({ sole: a }, { sole: b }) => a - b)
}

