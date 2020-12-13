<template>
  <div class="box">
   
    <div class="cont">
      <h2>登录</h2>
      <div><input type="text" placeholder="请输入用户名"></div>
      <div><input type="text" placeholder="请输入密码"></div>
      <div><button>登录</button></div>
    </div>

  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  modules: {},
};
</script>
<style scoped>
  .box {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right,#563443,#303D60);
  }
  .cont {
    width: 500px;
    height: 300px;
    background: #fff;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 15px;
    overflow: hidden;
  }
  .cont h2{
    text-align: center;
    margin-top: 30px;
  }
  .cont input {
    width: 318px;
    height: 38px;
    border-radius: 5px;
    display: block;
    margin: 0 auto;
    border: 1px solid #DCDFE6;
    margin-top: 20px;
  }
  .cont button {
    width: 320px;
    height: 40px;
    background: #409EFF;
    color: #fff;
    outline: none;
    border:none;
    border-radius:5px;
    display:block;
    margin: 0 auto;
    margin-top:20px;

  }
</style>