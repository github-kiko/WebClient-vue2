import axios from 'axios'



// 创建axios实列
// const service= axios.create({
//     baseUrl:'https://restapi.amap.com',
//     timeout:9000,
// //     headers:{ 
// //         'Content-Type': 'application/json;charset=UTF-8'
// // },
// })

// 创建axios实例
const conf = {
    // baseURL: process.env.VUE_APP_BASE_API,
    // baseURL: 'http://restapi.amap.com',    //高德
    //  baseURL: 'http://api.map.baidu.com',   //百度
    // baseURL:"/api2",
     baseURL:" http://127.0.0.1:3000",
   
    timeout: 90000, // 请求超时时间
  };

  const service = axios.create(conf);
  

//请求拦截器        
service.interceptors.request.use(
    config=>{
        // console.log("config:",config);
        return config
    },
    error=>{
        // console.log("request-error:",error);
        return   Promise.reject(error);
    },
    
    )

// 相应拦截器
service.interceptors.response.use(
    response=>{
        // console.log("response:",response);
        return response
        
    },
   error=>{
    //    console.log("response-error",error);
       return Promise.reject(error);
   }
)


export   default service;
export { conf };