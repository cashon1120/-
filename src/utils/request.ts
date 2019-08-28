
import axios from 'axios'

const request = axios.create()

interface IConfig {
  data?: any
  $skipAuthHandler?: boolean,
  url?: string | undefined,
  headers?: object,
  params?: {
    $skipAuthHandler?: object
  }
}

axios.defaults.baseURL = '/api' 
request.defaults.timeout = 10000
request.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
request.interceptors.request.use(
  (config: IConfig) => {
    if (config.data && config.data.$skipAuthHandler) {
      config.$skipAuthHandler = true
      delete config.data.$skipAuthHandler
    }
    if (config.params && config.params.$skipAuthHandler) {
      config.$skipAuthHandler = true
      delete config.params.$skipAuthHandler
    }
    let contentType = 'application/json; charset=utf-8'
    // 导出文件时候需要用formData格式请求
    if(config.url && config.url.indexOf('downloadFailureModel') > 0){
      contentType = 'application/x-www-form-urlencoded'
    }
    config.headers = {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '**',
      'Content-Type': contentType,
      'sany-token': localStorage.getItem('token') || '',
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
);

request.interceptors.response.use((response:any) => {
    if (!response.data.code) {
      return response.data
    }
    if (response.data.code === 400) {
      window.location.href = '/login'
    } else {
      const { token } = response.headers
      if (token) {
        localStorage.setItem('token', `sany-kn;${token}`);
      }
      return response
    }
  },
  (error:any) => {
    const err = error.response;
    return Promise.reject(err)
  }
);

export default request