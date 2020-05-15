import Cookies from 'js-cookie'

const TokenKey = 'user_token'

export function getToken(key) {
    if (key) return Cookies.get(key)
    return Cookies.get(TokenKey)
}

export function setToken(token, key) {
    if (key) {
        return Cookies.set(key, escape(token))
    } else {
        return Cookies.set(TokenKey, escape(token))
    }
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function getcookiesInServer(req) { // 服务端cookie获取
    const server_cookies = {}
    if (req && req.headers.cookie) {
        for (const item of req.headers.cookie.split(';')) {
            const [key, value] = item.split('=')
            server_cookies[key.trim()] = (value || '').trim()
        }
    }
    return server_cookies
}
