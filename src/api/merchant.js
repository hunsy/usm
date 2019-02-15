import axios from '@/utils/request'
const Base = '/api/merchant'


/**
 * 登录
 * @param {*} userinfo 
 */
export const login = (userinfo) => axios.post(`${Base}/login`, userinfo)

/**
 * 获取商户的产品实例分页
 * @param {*} query 
 */
export const getMerchantProductPage = (query) => axios.get(`${Base}/product/page`, query)

/**
 * 获取商户的自定义商品分页
 * 
 * @param {*} query 
 */
export const getGoodsPage = (query) => axios.get(`${Base}/goods/page`, query)


/**
 * 获取商户的配置信息
 * 
 * @param {*} query 
 */
export const getProductGoodsList = (productInventoryId) => axios.get(`${Base}/product/goods/list/${productInventoryId}`)
