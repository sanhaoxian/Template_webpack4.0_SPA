<template>
    <div>
        <h1 @click="sayHello">world</h1>
    </div>
</template>
<script>
export default {
  methods: {
    sayHello () {
      // 调用一个全局函数
      // this.say();

      // 调用一个接口请求的方法，把请求接口放置在一块可以统一管理
      // this.$api('get',
      // '/api/v1/info').then((res)=>{
      //     console.log(res);
      // })
      // console.log(this.$api)
    }
  }
}
</script>
<style lang="scss" scope>
div {
    background: #fff;
    color: #000;
    h1 {
        color: red
    }
}
</style>
