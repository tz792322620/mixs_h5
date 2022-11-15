<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
import "vant/lib/index.css";
import { Toast } from "vant";
export default {
  name: "App",
  provide () {    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload
    }
  },
  data() {
    return{
      isRouterAlive: true                    //控制视图是否显示的变量
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false;            //先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true;         //再打开
      })
    }
  },
  components: {
    [Toast.name]: Toast,
  },

};
</script>

<style>
.border_radius {
  width: 85%;
  height: 57px;
  line-height: 57px;
  margin: 0 auto;
  background: url(./assets/image/border_radius.png) no-repeat;
  background-size: 100% 100%;
  text-align: center;
}

.border_radius .egg_title {
  width: 90%;
  display: initial !important;
}
html, body {
  background: #16171D;
}
/*@media screen and (min-width:0px) and (max-width:330px) {*/
/*  body {*/
/*    font-size: xx-small*/
/*  }*/

/*  html {*/
/*    font-size: 10px*/
/*  }*/
/*}*/

/*@media screen and (min-width:331px) and (max-width:384px) {*/
/*  body {*/
/*    font-size: x-small*/
/*  }*/

/*  html {*/
/*    font-size: 11px*/
/*  }*/
/*}*/

/*@media screen and (min-width:385px) and (max-width:480px) {*/
/*  body {*/
/*    font-size: small*/
/*  }*/

/*  html {*/
/*    font-size: 13px*/
/*  }*/
/*}*/

/*@media screen and (min-width:481px) and (max-width:640px) {*/
/*  body {*/
/*    font-size: medium*/
/*  }*/

/*  html {*/
/*    font-size: 16px*/
/*  }*/
/*}*/

/*@media screen and (min-width:641px) and (max-width:720px) {*/
/*  body {*/
/*    font-size: medium*/
/*  }*/

/*  html {*/
/*    font-size: 19px*/
/*  }*/
/*}*/

/*@media screen and (min-width:721px) and (max-width:960px) {*/
/*  body {*/
/*    font-size: medium*/
/*  }*/

/*  html {*/
/*    font-size: 20px*/
/*  }*/
/*}*/

/*@media screen and (min-width:960px) {*/
/*  body {*/
/*    font-size: medium*/
/*  }*/

/*  html {*/
/*    font-size: 32px*/
/*  }*/
/*}*/

html {
  background: #f5f7f9
}

blockquote,body,dd,div,dl,dt,form,h1,h2,h3,h4,h5,h6,li,ol,p,td,th,ul {
  margin: 0;
  padding: 0;
  word-wrap: break-word;
  font-family: arial,'Avenir LT 55 Roman','Hiragino Sans GB','Microsoft Yahei','微软雅黑'
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

fieldset,img {
  border: 0 none;
  vertical-align: middle;
  height: auto
}

img {
  max-width: 100%
}

li,ul {
  list-style-type: none
}

.boxsizing {
  box-sizing: border-box
}

caption,th {
  text-align: left
}

h1,h2,h3,h4,h5,h6 {
  font-size: 100%
}

sup {
  vertical-align: text-top
}

sub {
  vertical-align: text-bottom
}

button,input,select,textarea {
  word-wrap: break-word;
  word-wrap: break-word;
  font-family: arial,'Avenir LT 55 Roman','Hiragino Sans GB','Microsoft Yahei','微软雅黑'
}

a {
  text-decoration: none
}

input {
  text-indent: 5px
}

a {
  color: #f29b22
}

a:hover {
  text-decoration: none
}

b {
  font-weight: 100
}

.weight {
  font-weight: 100
}

.hidden {
  overflow: hidden
}



.ccbg {
  margin: 0 auto
}

.boxing {
  box-sizing: border-box
}

.center {
  text-align: center
}

.center-l {
  text-align: left
}

.center-r {
  text-align: right
}

.fl {
  float: left
}

.fr {
  float: right
}

.texthidden {
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden
}

.bordercolor,.bordercolor_b,.bordercolor_l,.bordercolor_r,.bordercolor_t {
  border-color: #dedede
}

.bordercolor {
  border-width: 1px;
  border-style: solid
}

.bordercolor_t {
  border-top-width: 1px;
  border-top-style: solid
}

.bordercolor_b {
  border-bottom-width: 1px;
  border-bottom-style: solid
}

.bordercolor_r {
  border-right-width: 1px;
  border-right-style: solid
}

.bordercolor_l {
  border-left-width: 1px;
  border-left-style: solid
}

.w100s {
  width: 100%
}

.w5s {
  width: 5%
}

.w7s {
  width: 7%
}

.w10s {
  width: 10%
}

.w15s {
  width: 15%
}

.w20s {
  width: 20%
}

.w23s {
  width: 23%
}

.w25s {
  width: 25%
}

.w33s {
  width: 33.33%
}

.w30s {
  width: 30%
}

.w36s {
  width: 36%
}

.w40s {
  width: 40%
}

.w45s {
  width: 45%
}

.w50s {
  width: 50%
}

.w55s {
  width: 55%
}

.w60s {
  width: 60%
}

.w65s {
  width: 65%
}

.w70s {
  width: 70%
}

.w75s {
  width: 75%
}

.w80s {
  width: 80%
}

.w90s {
  width: 90%
}

.radius {
  border-radius: 5px
}

.radius10 {
  border-radius: 10px
}

.radius20 {
  border-radius: 20px
}

.radius30 {
  border-radius: 30px
}

.radius40 {
  border-radius: 40px
}

.radius100 {
  border-radius: 100%
}

.m1 {
  margin: 1%
}

.m5 {
  margin: 0.5rem;
}

.m7 {
  margin: 7%
}

/*.m5 {*/
/*  margin: 1rem;*/
/*}*/

.mt1 {
  margin-top: 1%
}

.mt2 {
  margin-top: 2%
}
.mt4 {
  margin-top: 4%
}
.mt5 {
  margin-top: 5%
}

.mt10 {
  margin-top: 10%
}

.mt15 {
  margin-top: 15%
}

.mt20 {
  margin-top: 20%
}

.mb2 {
  margin-bottom: 2%
}

.mb4 {
  margin-bottom: 4%
}

.mb5 {
  margin-bottom: 5%
}

.mb10 {
  margin-bottom: 10%
}

.mb15 {
  margin-bottom: 15%
}

.mb20 {
  margin-bottom: 20%
}

.mb30 {
  margin-bottom: 30%
}

.ml1 {
  margin-left: 1%
}

.mr1 {
  margin-right: 1%
}

.mr2 {
  margin-right: 2%
}

.mr25 {
  margin-right: 2.5%
}

.mr4 {
  margin-right: 4%
}

.mr5 {
  margin-right: 5%
}

.mr10 {
  margin-right: 10%
}

.mr15 {
  margin-right: 15%
}

.mr20 {
  margin-right: 20%
}

.mt20 {
  margin-top: 20%
}

.mt30 {
  margin-top: 30%
}

.ml2 {
  margin-left: 2%
}

.ml25 {
  margin-left: 2.5%
}

.ml3p {
  margin-left: 2.5%
}

.ml4 {
  margin-left: 4%
}

.ml5 {
  margin-left: 5%
}

.ml10 {
  margin-left: 10%
}

.ml15 {
  margin-left: 15%
}

.ml20 {
  margin-left: 20%
}

.pt1 {
  padding-top: 1%
}

.pb1 {
  padding-bottom: 1%
}

.pl1 {
  padding-left: 1%
}

.pr1 {
  padding-right: 1%
}

.p2 {
  padding: 2%
}

.p4 {
  padding: 4%
}

.p5 {
  padding: 0 5%
}

.p7 {
  padding: 7%
}

.p10 {
  padding: 10%
}

.p15 {
  padding: 15%
}

.p20 {
  padding: 20%
}

.p30 {
  padding: 30%
}

.pt2 {
  padding-top: 2%
}

.pt4 {
  padding-top: 4%
}

.pt5 {
  padding-top: 5%
}

.pt10 {
  padding-top: 10%
}

.pt15 {
  padding-top: 15%
}

.pt20 {
  padding-top: 20%
}

.pb2 {
  padding-bottom: 2%
}

.pb5 {
  padding-bottom: 5%
}

.pb4 {
  padding-bottom: 4%
}

.pb10 {
  padding-bottom: 10%
}

.pb15 {
  padding-bottom: 15%
}

.pb20 {
  padding-bottom: 20%
}

.pl2 {
  padding-left: 2%
}

.pl4 {
  padding-left: 4%
}

.pl5 {
  padding-left: 5%
}

.pl10 {
  padding-left: 10%
}

.pl15 {
  padding-left: 15%
}

.pl20 {
  padding-left: 20%
}

.pr2 {
  padding-right: 2%
}

.pr4 {
  padding-right: 4%
}

.pr5 {
  padding-right: 5%
}

.pr10 {
  padding-right: 10%
}

.pr15 {
  padding-right: 15%
}

.pr20 {
  padding-right: 20%
}

.line100 {
  line-height: 100%
}

.line150 {
  line-height: 150%
}

.line200 {
  line-height: 200%
}

.line250 {
  line-height: 250%
}

.line300 {
  line-height: 300%
}
.f8 {
  font-size: .6rem
}
.f10 {
  font-size: .8rem
}

.f12 {
  font-size: 1rem
}

.f13 {
  font-size: 1.083rem
}

.f14 {
  font-size: 1.166rem
}

.f16 {
  font-size: 1.333rem
}

.f18 {
  font-size: 1.5rem
}

.f20 {
  font-size: 1.666rem
}

.f24 {
  font-size: 2rem
}

.f30 {
  font-size: 2.5rem
}

.f36 {
  font-size: 3rem
}

.f48 {
  font-size: 4rem
}

.f60 {
  font-size: 5rem
}

.s0 {
  color: #fff
}

.s1 {
  color: #d3d3d3
}
.s2 {
  background-image: -webkit-linear-gradient(right, #F5D037, #E9B410);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg0 {
  background-color: #e4f5fb
}

.bg1 {
  background-color: #fff
}

.bg2 {
  background-color: #fad742
}

.bg3 {
  background-color: #f5f7f9
}

.bg4 {
  background-color: #e6ecf8
}
.flex{display: flex;}
</style>
