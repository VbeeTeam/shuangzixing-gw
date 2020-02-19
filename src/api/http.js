import axios from 'axios'; // 引入axios

import baseUrl from './constans'

axios.defaults.withCreadentials = true
axios.defaults.baseURL = baseUrl;

axios.defaults.timeout = 5000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// http请求拦截器
axios.interceptors.request.use(config => {
	
	return config
}, error => {
	
	// Toast('请求超时');
	return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功
	
	return data
}, error => {
	
	// Toast('服务器错误');
	return Promise.reject(error)
})

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {

	return new Promise((resolve, reject) => {
		axios.get(url, {
			params: params
		}).then(res => {
			resolve(res.data);
		}).catch(err => {
			reject(err.data)
		})
	});
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, data) {
	return new Promise((resolve, reject) => {
		axios.post(url, data)
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}
