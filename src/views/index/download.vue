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
  <div>{{ $t('lang.22') }}</div>
  <div>{{ $t('lang.23') }}：{{shlx}}</div>
  <div style="margin-top: 1rem;">
    <div class="xz" @click="appxz()">{{shlx}}{{ $t('lang.24') }}</div>
  </div>
<!--  <div style="margin-top: 1rem;">-->
<!--    <div class="xz" @click="jiami()">{{shlx}}{{ $t('lang.24') }}</div>-->
<!--  </div>-->
</div>
</template>

<script>
import {Encrypt,downloadFile} from '../../utils/crypto';
export default {
  name: "success",
  data(){
    return{
      EGG: '',
      defaultAddress: '',
      shlx:'Android',
      xzdz:'https://download.mixs.me/api/v1/download/apk/79f8d192-e0bb-4b42-92a7-b43a6b3ebc67',
      tzdz:'https://assets.pgyer.com/static/assets/mobileprovision/embedded5.mobileprovision'
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
          this.xzdz = 'https://download.mixs.me/api/v1/download/apk/d596bde8-681b-4635-8c67-915148b9dea9'
        }
        if (isiOS) {
          this.shlx = 'IOS';
          this.xzdz = 'https://download.mixs.me/api/v1/download/mobileConfig/ad9bdbf6-e17a-4e9a-b9c5-048e1378647f'
        }
      },
      jiami(){
        let jiami = Encrypt("123")
        console.log(jiami)
      },
      appxz(){
        if(this.shlx == 'IOS'){
          downloadFile(this.xzdz)
          setTimeout(()=>{
            downloadFile(this.tzdz)
          }, 3 * 1000);
        }else if(this.shlx == 'Android'){
          window.location.href = this.xzdz
        }
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
