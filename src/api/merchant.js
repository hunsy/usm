import axios from '@/utils/request'
const Base = '/api/merchant'


/**
 * 登录
 * @param {*} userinfo 
 */
export const login = (userinfo) => axios.post(`${Base}/login`, userinfo)

/**
 * 获取当前商户信息
 */
export const getCurrentMerchant = () => axios.get(`${Base}`)

/**
 * 获取商户的产品实例分页
 * @param {*} query 
 */
export const getMerchantProductPage = (query) => axios.get(`${Base}/product/page`, query)


/**
 * 保存商品
 * @param {*} goods 
 */
export const saveGoods = (goods) => axios.post(`${Base}/goods`, goods)
/**
 * 获取商户的自定义商品分页
 * 
 * @param {*} query 
 */
export const getGoodsPage = (query) => axios.get(`${Base}/goods/page`, query)

/**
 * 获取非当前产品包含的产品列表
 * @param {*} productInventoryId 
 */
export const getNotInProductInventoryGoods = (productInventoryId) => axios.get(`${Base}/goods/list`, {
  params: {
    productInventoryId: productInventoryId
  }
})

/**
 * 保存产品与商品之间关系
 * @param {*} info 
 */
export const saveProductGoods = (info) => axios.post(`${Base}/product/goods`, info)

/**
 * 获取商户的配置信息
 * 
 * @param {*} query 
 */
export const getProductGoodsList = (productInventoryId) => axios.get(`${Base}/product/goods/list/${productInventoryId}`)
