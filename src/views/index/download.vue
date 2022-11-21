<template>
<div style="    display: flex;
    flex-direction: column;
    align-items: center;">

  <div style="display: flex;
    flex-direction: column;
    align-items: center;padding-top: 3rem;">
    <div style="width: 5rem;padding-bottom: 1rem;"><img src="@/assets/image/logo.png" ></div>
    <div style="width: 10rem;"><img src="@/assets/image/logotitle.png" ></div>
  </div>
  <div>MIXS Global APP下载</div>
  <div>设备类型：{{shlx}}</div>
  <div style="margin-top: 1rem;">
    <div class="xz" @click="appxz()">{{shlx}}下载</div>
  </div>
</div>
</template>

<script>

export default {
  name: "success",
  data(){
    return{
      EGG: '',
      defaultAddress: '',
      shlx:'Android',
      xzdz:'https://xzapp.sanxun88.xyz/MIXS.apk',
    }
  },
  //初始化
  async created(){
      this.sf()
  },

  methods:{
      sf(){
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isAndroid) {
          this.shlx = 'Android';
          this.xzdz = 'https://xzapp.sanxun88.xyz/MIXS.apk'
        }
        if (isiOS) {
          this.shlx = 'IOS';
          this.xzdz = 'https://appxz.sanxun88.xyz/api/v1/download/mobileConfig/3107c31b-2116-44bd-81a8-f40d33a26892'
        }
      },
      appxz(){
        window.location.href = this.xzdz
      }

  }
}
</script>
<style>
.border_bottom{
  padding-bottom: 5%;
  border-bottom: 1px dashed #7C7C7D;
}
html, body {
  background: #fff;
}
.canvas_code canvas {
  color: #ffffff;
  background: #ffffff;
  border: 2px solid #F2CD36;
  box-sizing: border-box;
  border-radius: .6rem;
}
</style>
<style scoped>
.successico{width: 60px;height: 60px;background:url(../../assets/image/finishico.png)no-repeat;background-size: 100% 100%;margin: 0 auto;margin-top: 10%;}
.egg_title_txt {
  background-image: -webkit-linear-gradient(right, #F5D037, #E9B410);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1rem;
  font-weight: bold;
}

.egg_title {
  width: 90%;
  display: flex;
}
.justify-content_center{    justify-content: center;}
.qr_code .egg_title{width: 100%;}
.copybtn {
  width: 30px;
  height: 20px;
  background: url(../../assets/image/copybutton.png) no-repeat;
  background-size: 100% 100%;
}
.xz{
  background-color: #4bb2b1;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
}
</style>
