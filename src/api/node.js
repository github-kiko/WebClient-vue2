import http from "@/utils/http"
// 行政区域查询(高德)
export  const gaode_district=params=>http.get('/v3/config/district',params)


// 行政区域查询(百度)
export  const baidu_district=params=>http.get('/api_region_search/v1/',params)


// 里地理编码(百度)
export  const reverse_geocoding=params=>http.get('reverse_geocoding/v3/',params)

//node-post请求
export  const add=params=>http.post('users/add',params)

//node-get请求
export  const users=params=>http.get('users',params)