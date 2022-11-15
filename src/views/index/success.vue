<template>
<div>
  <div class="s0 f16 center mt2">ETF映射</div>
  <div class="successico mt10"></div>
  <p class="s0 f16 center mt2 ml5">绑定成功！</p>
  <p class="f10 s1 center  ml5 mr5">1.绑定先转一笔验签数量的EGG到钱包进行验签</p>
  <p class="f10 s1 center  ml5 mr5">2.转入成功后,再把ETF转入指定钱包中完成映射</p>

  <div class="border_radius f16 mt5">
    <div class="egg_title mt2">
      <div class="egg_title_txt" @click="routerindex">去验签</div>
    </div>
  </div>

<!--  <div class="border_radius f16 mt5">-->
<!--  <div class="egg_title mt2">-->
<!--    <div class="egg_title_txt" @click="eggCodes">随机码查询</div>-->
<!--  </div>-->
<!--  </div>-->
</div>
</template>

<script>
import {Toast} from "vant";
import {eggWallet,eggCodes} from "@/utils/Mapping";
import Web3 from "web3";
export default {
  name: "success",
  data(){
    return{
      EGG: '',
      defaultAddress: '',
    }
  },
  //初始化
  async created(){
    await this.initWeb3Account()
  },

  methods:{
    async initWeb3Account() {
        Toast.loading({
          duration: 0,
          message: "Loading..",
          forbidClick: true
        });
      console.log("initWeb3Account 方法执行了-------");
      // 检查新版MetaMask
      if (window.ethereum) {
        this.provider = window.ethereum;
        try {
          // 请求用户账号授权
          await window.ethereum.enable();
        } catch (error) {
          // 用户拒绝了访问
          console.log("User denied account access");
        }
      }
      // 老版 MetaMask
      else if (window.web3) {
        this.provider = window.web3.currentProvider;
      }
      // 如果没有注入的web3实例，回退到使用 Ganache
      else {
        alert("请安装MetaMask!");
        this.provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
      }
      this.web3 = new Web3(this.provider);
      this.web3.eth.getAccounts().then(accs => {
        this.defaultAddress = accs[0]
        console.log(accs)
        eggWallet().then((res) => {
          console.log('EGG指定钱包地址:', res)
          // console.log(res)
          this.EGG = res
          Toast.clear();
        });
      })
    },
    // 复制
    copy() {
      this.$copyText(this.EGG).then(function (e) {
        Toast('复制成功');
        console.log(e)
      }, function (e) {
        Toast('复制失败');
        console.log(e)
      })
    },
    routerindex(){
      this.$router.push({ path: "/verification" });
    },
    eggCodes(){
      eggCodes(this.defaultAddress).then((res) => {
        console.log(res)
      });
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
  background: #16171D;
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
</style>
