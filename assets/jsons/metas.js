// 默认所有的动态路由加载了hidden:true，在导航部分不显示
export default
{
    one: {
        hidden: true,
        sole: 1,
        meta: { title: 'one' }
    },
    'one-info': {
        sole: 101,
        meta: { title: 'one详情' }
    },
    'one-pa': {
        hidden: false,
        sole: 102,
        meta: { title: '动态pa路由-设置了false' }
    },

    pro: {
        meta: { title: '招投标广场' },
        sole: 2
    },
    'pro-info': {
        meta: { title: 'pro详情' },
        sole: 201
    },
    'pro-id': {
        meta: { title: '动态ID页面' },
        sole: 202
    },

    route: {
        meta: { title: '测子1不隐' },
        sole: 3
    },
    'route-info': {
        meta: { title: '详情页' },
        sole: 301
    },
    'route-news': {
        meta: { title: '新闻页' },
        sole: 302
    },
    'route-news-info': {
        meta: { title: '测试-动态id-设false' },
        hidden: false,
        sole: 30201
    },
    'route-id': {
        meta: { title: '动态id页' },
        sole: 303
    },
    'route-num': {
        meta: { title: '动态num页' },
        sole: 304
    },
    'route-type': {
        meta: { title: '动态type页' },
        sole: 305
    },
    'route-type-info': {
        meta: { title: '动态type详情页' },
        sole: 306
    },

    three: {
        meta: { title: '子-第一项首页' },
        sole: 4,
        hidden: true
    },
    'three-type': {
        meta: { title: 'type默认首页' },
        sole: 401
    },
    'three-type-info': {
        meta: { title: 'type详情页' },
        sole: 40101
    },
    'three-type-id': {
        meta: { title: 'type动态图id页' },
        sole: 40102
    },

    two: {
        meta: { title: 'two首页布局' },
        sole: 5,
        hidden: true
    },
    'two-type': {
        meta: { title: '动态type路由首页' },
        sole: 501,
        hidden: true
    },
    'two-type-info': {
        meta: { title: '动态type详情页' },
        sole: 50101,
        hidden: true
    },
    'two-type-id': {
        meta: { title: '动态type动态ID页' },
        sole: 50102,
        hidden: true
    },
    'two-news': {
        meta: { title: 'two新闻' },
        sole: 502,
        hidden: true
    },

    index: {
        sole: 6,
        meta: { title: '首页' }
    },
    notFind: {
        meta: { title: '404' },
        sole: 7,
        hidden: true
    }
}
