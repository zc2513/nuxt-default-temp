// 按需引入 Element
import Vue from 'vue'
import { Button, Select, Rate, Switch } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'

Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 1000 }

// 设置语言
locale.use(lang)
// 引入组件
Vue.use(Button)
Vue.use(Rate)
Vue.use(Switch)
Vue.component(Select.name, Select)

/* 全局引入
import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(Element, { locale })
*/
