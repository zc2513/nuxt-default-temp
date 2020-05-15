import { BrowseRecord, checkCollect } from '@/api/newsInfo/index'
/**
 * @description 查询收藏 、浏览记录
 * @author alan_zhang
 * @date 2020-04-28
 * @export
 * @param {*} obj
 * @returns
 */
export async function verify(obj) {
    const { $axios, store, arg } = obj
    const token = await store.getters['user/userTonken']
    if (!token) return
    let data = {
        IsLoging: token ? 'True' : 'False'
    }
    if (arg) {
        data = Object.assign(data, arg)
    }

    await $axios(BrowseRecord(data))
    const flag = (await $axios(checkCollect(data))).data.ErrCode
    return !flag
}
