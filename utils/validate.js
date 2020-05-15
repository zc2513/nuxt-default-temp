
/**
 * 验证路径是否为http请求
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 编辑权限验证
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
    const validMap = ['admin', 'editor', 'zhangsan']
    return validMap.includes(str.trim())
}

/**
 * 手机号验证
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export function phoneValidate(rule, value, callback) {
    const phoneReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
    const regEnN = /[`~!@#$%^&*()_+""''<>?:'{},./'[\]]/im
    const regCnN = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im
    const startReg = /^1/
    const rtrim = /^\S*$/
    if (rtrim.test(value)) {
        if (startReg.exec(value)) {
            if (value.length < 11 || value.length > 11) {
                callback(new Error('长度' + value.length + '位,长度不对'))
            } else {
                setTimeout(() => {
                    if (phoneReg.test(value)) {
                        if (regEnN.test(value) || regCnN.test(value)) {
                            callback(new Error('不能包含特殊字符'))
                        } else {
                            callback()
                        }
                    } else {
                        callback(new Error('手机号格式不正确'))
                    }
                }, 30)
            }
        } else if (value.includes('-')) {
            const telReg = /([0-9]{3,4}-)?[0-9]{7,8}/
            if (telReg.test(value)) {
                const str1 = value.substr(0, value.indexOf('-'))
                const str2 = value.substr(value.indexOf('-') + 1, value.length)
                if (str1.length === 3 || str1.length === 4) {
                    if (str1.length === 4 && str2.length !== 7) {
                        callback(new Error('固话长度错误'))
                    } else if (str1.length === 3 && str2.length !== 8) {
                        callback(new Error('固话长度错误'))
                    } else if (regEnN.test(value) || regCnN.test(value)) {
                        callback(new Error('不能包含特殊字符'))
                    } else {
                        callback()
                    }
                } else {
                    callback(new Error('区号长度错误'))
                }
            } else {
                callback(new Error('固话格式不正确'))
            }
        } else {
            callback(new Error('请在区号后面加-'))
        }
    } else {
        callback(new Error('不能包含空格'))
    }
}
