import http from "@/utils/http"
// 行政区域查询(基础数据vuex存储)
export  const district=params=>http.get('/v3/config/district',params)