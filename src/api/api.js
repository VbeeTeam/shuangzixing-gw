/**   
 * api接口统一管理
 */
import {
	get,
	post
} from './http'

export const apiModule = urlId => get(urlId, {}); //板块
export const apiSpecialTopic = urlId => get(urlId, {}); //专题
export const apiWebsite = urlId => post(urlId, {}); //专题




export const apiArticle = urlId => get(urlId, {}); //文章
export const apiCatagory = urlId => get(urlId, {}); //文章分类
export const tQa = urlId => get(urlId, {}); //问答列表
export const getDiseaseSpecies = urlId => get(urlId, {}); //病种详情

export const apiSpecialList = urlId => post(urlId, {}); //专题列表

export const productType = p => get('/api/insure/product/app/getInsureType', p); //产品类型
export const listByTypeClient = p => get('/api/insure/product/listByTypeForClient', p); //产品类型列表
export const productDetail = urlId => get(urlId, {}); //产品详情

export const searchApi = p => get('/api/es', p); //搜索

export const apiArticleList = p => get('/api/article/show/list', p); //文章列表
