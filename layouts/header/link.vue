
<template>
  <!-- a标签模拟处理 / 路由和正常跳转  -->
  <!-- eslint-disable vue/require-component-is -->
  <div>
    <component v-bind="linkProps(to)">
      <slot />
    </component>
  </div>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
    props: {
        to: {
            type: String,
            required: true
        }
    },
    methods: {
        linkProps(url) { // 标签及属性定义
            if (isExternal(url)) {
                return {
                    is: 'a',
                    href: url,
                    target: '_blank',
                    rel: 'noopener'
                }
            }
            return {
                is: 'nuxt-link',
                to: url
            }
        }
    }
}
</script>
