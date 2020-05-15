/**
 * 公用方法
 */
/**
 * 时间戳转时间格式
 * @param {(Object|string|number)} time 时间戳
 * @param {string} cFormat '{y}-{m}-{d} {h}:{i}:{s}' ymdhis对应被替换的参数，- : 等为拼接字符
 * @returns {string | null} 返回自定义的拼接字符
 */
export function parseTime(time, cFormat) {
    if (arguments.length === 0) {
        return null
    }
    if (typeof time === 'string' && time.startsWith('\/')) {
        time = time.replace(/[^0-9]/ig, '') - 0
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
            time = parseInt(time)
        }
        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    // 替换对应值
    const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
        const value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
        return value.toString().padStart(2, '0')
    })
    return time_str
}

/**
 *  获取相对于当前时间的描述值
 * @param {number} time 时间戳
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
    if (('' + time).length === 10) {
        time = parseInt(time) * 1000
    } else {
        time = +time
    }
    const d = new Date(time)
    const now = Date.now()

    const diff = (now - d) / 1000

    if (diff < 30) {
        return '刚刚'
    } else if (diff < 3600) {
    // less 1 hour
        return Math.ceil(diff / 60) + '分钟前'
    } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小时前'
    } else if (diff < 3600 * 24 * 2) {
        return '1天前'
    }
    // 超过一天的执行返回
    if (option) {
        return parseTime(time, option)
    } else {
        return (
            d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
        )
    }
}

/**
 * @description  获取url参数
 * @author alan_zhang
 * @date 2020-04-17
 * @export
 * @param {*} url
 * @returns
 */
export function getUrlParams(url) {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse(
        '{"' +
      decodeURIComponent(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"')
          .replace(/\+/g, ' ') +
      '"}'
    )
}
/**
 * @description   转为 unicode 编码
 * @author alan_zhang
 * @date 2020-04-20
 * @export
 * @param {*} str
 * @returns
 */
export function encodeUnicode(str) {
    const res = []
    for (let i = 0; i < str.length; i++) {
        res[i] = ('00' + str.charCodeAt(i).toString(16)).slice(-4)
    }
    return '\\u' + res.join('\\u')
}
/**
 * @description Unicode 解码
 * @author alan_zhang
 * @date 2020-04-17
 * @export
 * @param {*} str
 * @returns
 */
export function decodeUnicode(str) {
    str = str.replace(/\\/g, '%')
    return unescape(str)
}
/**
 * @description  提取html文本
 * @author alan_zhang
 * @date 2020-04-17
 * @export
 * @param {*} str
 * @returns
 */
export function extractText(str) {
    return str ? str.replace(/<[^>]+>/g, '') : ''
}

/**
 * @description 提出照片（提取html片段中的所有照片）
 * @author alan_zhang
 * @date 2020-04-17
 * @export
 * @param {*} str
 * @returns
 */
// export function extractImgSrc(str) {
//     const reg = /<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>)/gim
//     const arr = []
//     while (img = reg.exec(str)) {
//         arr.push(img[2])
//     }
//     return arr
// }

/**
 * @description 登录注册
 * @author alan_zhang
 * @date 2020-04-17
 * @export
 * @param {*} e
 */
export function login(e) {
    this.$message.info('功能暂未开放')
}
// 广告编码定义
export const adListVarData = {
    index: 'index-01,index-02,index-03',
    price: 'price-01,price-02', // 材料价格
    Purchase: 'purchase-01,purchase-02,purchase-03,purchase-04', // 最新采购
    exhlist: 'exhlist-01,exhlist-02,exhlist-03,exhlist-04', // 展会商机
    platform: 'platform-01,platform-02,platform-03,platform-04', // 诚信企业
    square: 'square-01,square-02,square-03,square-04,square-05,squareList-01,squareList-02,squareInfo-01', // 招投标广场
    industry: 'industry-01,industry-02,industryList-01,industryInfo-01', // 行业动态
    projectChannel: 'projectChannel-01,projectChannel-02,projectChannel-03,projectChannel-04,projectChannelList-01,projectChannelInfo-01' // 项目频道
}
/**
 * @description 开始、结束
 * @author alan_zhang
 * @date 2020-04-30
 * @export
 * @param {*} startTime
 * @param {*} endTime
 * @returns
 */
export function getTime(startTime, endTime) {
    if (endTime == null || endTime === '') {
        return
    }
    const sTimes = parseTime(startTime, '{y}-{m}-{d} {h}:{i}') // 开始时间
    const eTimes = parseTime(endTime, '{y}-{m}-{d} {h}:{i}') // 结束时间
    const date = new Date()
    let startFlag = ''
    const dataTimes = parseTime(date, '{y}-{m}-{d}  {h}:{i}:{s}')
    if (dataTimes < sTimes) {
        startFlag = '1' // 未开始
    } else if (dataTimes < eTimes) {
        startFlag = '2' // 正在进行
    } else {
        startFlag = '3' // 已结束
    }
    return startFlag
}

/**
 * @description 部分文字加密
 * @author alan_zhang
 * @date 2020-05-06
 * @export
 * @param {*} title
 * @returns
 */
export function titleEncy(title, token) {
    let Title = title == null ? '-' : title
    if (!token) {
        if (title == null || title === '') {
            Title = '-'
        } else if (title.length === 1) {
            Title = '*'
        } else if (title.length <= 11) {
            Title = title.substring(0, ((title.length) / 2)) + '***'
        } else if (title.length >= 12) {
            Title = title.substring(0, 6) + '***'
        }
    } else {
        Title = title
    }
    return Title
}

/**
 * @description 联系人加密
 * @author alan_zhang
 * @date 2020-05-06
 * @export
 * @param {*} contacts
 * @returns
 */
export function ContactsEncy(contacts, token) {
    let zdyContacts = '-'
    if (!token && contacts != null && contacts !== '' && contacts !== '-' && contacts !== '/') {
        if (contacts.length <= 2) {
            zdyContacts = contacts.substring(0, 1) + '*'
        }
        if (contacts.length >= 3) {
            zdyContacts = contacts.substring(0, 1) + '**'
        }
    } else {
        zdyContacts = contacts
    }
    return zdyContacts
}

/**
 * @description 手机号加密
 * @author alan_zhang
 * @date 2020-05-06
 * @export
 * @param {*} phone
 * @returns
 */
export function PhoneNumberEncy(phone, token) {
    let rephone = phone == null ? '-' : phone
    if (!token) {
        if (phone == null || phone === '') {
            rephone = '-'
            return rephone
        } else if (phone === '/') {
            rephone = phone
            return rephone
        }
        rephone = phone.substring(0, 3) + '****' + phone.substring(phone.length - 4)
    }
    return rephone
}
