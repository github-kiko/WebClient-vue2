<template>
  <div>
    <h1>本地存储的三种写法</h1>
    <div>
      <p>  // 存数据(三种方式是一样的，只是写法不一样)  </p>
      <p>
         localStorage.setItem("key1", JSON.stringify(this.arr));

      </p>
      <p>
        localStorage.key2 =  JSON.stringify(this.arr);

      </p>
      <p>
         localStorage["key3"] =  JSON.stringify(this.arr);

      </p>
  
  <p>
     //取数据（对应上面三种存数据的方法）

  </p>
  <p>
        var key1 = JSON.parse(localStorage.getItem("key1"));

  </p>
  <p>
        var key2 = JSON.parse(localStorage.key2)

  </p>
  <p>
        var key3 = JSON.parse(localStorage["key3"]);

  </p>
   
    
   

   




    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg1: "我是第一条数据",
      msg2: "我是第二条数据",
      msg3: "我是第三条数据",
      arr:[{
          a:"aaaaaaaa",
          b:"bbbbbbbb",
          c:"cccccccc"
      },
      {
          a:"11111111",
          b:"222222222",
          c:"3333333333"
      },
      ]
    };
  },
  created() { 
    // 存数据(三种方式是一样的，只是写法不一样)
    localStorage.setItem("key1", JSON.stringify(this.arr));
    localStorage.key2 =  JSON.stringify(this.arr);
    localStorage["key3"] =  JSON.stringify(this.arr);

    //取数据（对应上面三种存数据的方法）
    var key1 = JSON.parse(localStorage.getItem("key1"));
    var key2 = JSON.parse(localStorage.key2)
    var key3 = JSON.parse(localStorage["key3"]);

    // 控制台验证
    console.log("key1:", key1);
    console.log("key2:", key2);
    console.log("key3:", key3);




    // // 存数据(三种方式是一样的，只是写法不一样)
    // localStorage.setItem("key1", this.msg1);
    // localStorage.key2 = this.msg2;
    // localStorage["key3"] = this.msg3;

    // //取数据（对应上面三种存数据的方法）
    // var key1 = localStorage.getItem("key1");
    // var key2 = localStorage.key2;
    // var key3 = localStorage["key3"];

    // // 控制台验证
    // console.log("key1:", key1);
    // console.log("key2:", key2);
    // console.log("key3:", key3);




  },
};
</script>


<style lang="scss" scoped>
</style>