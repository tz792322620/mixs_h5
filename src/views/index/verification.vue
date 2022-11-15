<template>
  <div class="w100s">
    <div class="s0 f16 center mt2">ETF映射</div>
    <van-collapse v-model="activeNames" class="instruction_top s0 p2">
      <van-collapse-item title="绑定流程说明" name="1">
        1.用BSC链的钱包地址绑定EGG链的钱包地址。 <br>
        2.绑定成功后，先从EGG链转一笔系统生成的验签码的EGG到验证地址，转入的验签数量一致，则验证成功。 <br>
        3.验证成功后，从EGG链的钱包地址转币到平台指定地址的币才能映射成功。
      </van-collapse-item>
    </van-collapse>
    <div class="addrbg">
      <p class="s0 f10">
        验签码:<span class="f12">{{ EGGcode }}</span>
      </p>
      <div>
        <div class="egg_title ">
          <div class="egg_title_txt">EGG链验签数量</div>
        </div>
        <div class="s0 f10 addr">{{ EGGnum }}</div>
      </div>
      <div>
        <div class="egg_title mt1">
          <div class="egg_title_txt">EGG链转币验签地址
            <div class="copybtn float" :data-clipboard-text="this.EGG" id="express_info_right" @click="copy()"></div>
          </div>
        </div>
        <div class="s0 f10" >{{ EGG | ellipsis}}</div>
      </div>
    </div>
    <div class="p5 s2 f10">
        <p>验签说明：</p>
        <p>1.BSC链绑定好EGG链钱包地址后，需优先转{{ EGGnum }}EGG验签数量到钱包地址进行验签,完成一次验签即可</p>
        <p>2.转入成功后，再把ETF转入指定的钱包中完成映射</p>
        <p>3.未完成验签就转ETF的无法完成映射。</p>
    </div>
    <div class="border_radius f16 mt5">
      <div class="egg_title mt2">
        <div class="egg_title_txt" @click="sees">已完成验签,现在去转币</div>
      </div>
    </div>
    <div class="p5 s1 f10">温馨提示：<br>
      请先确保您已从EGG链转验签数量的EGG到验签地址，验签成功才能完成映射
    </div>
    <div class="addrbg" style="margin-bottom: 2rem;">
      <p class="s0 f10">
        绑定钱包地址
      </p>
      <div>
        <div class="egg_title ">
          <div class="egg_title_txt">当前地址</div>
        </div>
        <div class="s0 f10 addr">{{ defaultAddress | ellipsis }}</div>
      </div>
      <div>
        <div class="egg_title mt1">
          <div class="egg_title_txt">绑定EGG链钱包地址</div>
        </div>
        <div class="s0 f10" >{{ EGGaddr | ellipsis }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {Collapse, CollapseItem, Field, Dialog, Toast, Loading} from "vant";
import {
   Addrsmapping, eggWallet,  eggCodes
} from "@/utils/Mapping";
import Web3 from "web3";
import axios from '../../utils/axios';
export default {
  name: "index",
  inject: ['reload'],
  data() {
    return {
      EGGnum:0,
      EGGcode:0,
      activeNames: ['1'],
      egginput: "",
      defaultAddress: '',
      fee: '',
      dialog: '',
      EGGaddr: '',
      bind: true,
      EGG: '',
      see: ''
    }
  },
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Field.name]: Field,
    [Dialog.name]: Dialog,
    [Dialog.Component.name]: Dialog.Component,
    [Toast.name]: Toast,
    [Loading.name]: Loading
  },
  //初始化
  async created(){
    await this.initWeb3Account()
  },

  methods: {
    sees(){
      axios.post('/');
      if (this.see == 1){
        this.$router.push({path: "/"});
      }else {
        Dialog.alert({
          title: '未验签',
          message: '您尚未验签成功，无法进行转币映射',
          theme: 'round-button',
          className: "confirm_dialog dialog_alert",
          confirmButtonText: "好的"
        })
      }
    },
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
        Addrsmapping(this.defaultAddress).then((res) => {
          //console.log('查询地址是否被映射:', res)
          console.log(res)
          if (res !== '') {
            this.EGGaddr = res
            this.bind = false;
            // this.activeNames = ['2']
            //查询EGG钱包地址
            eggWallet().then((res) => {
              console.log(res)
              this.EGG = res
            });
            //查询验签码
            eggCodes(this.defaultAddress).then((res) => {
              console.log('22',res)
              this.EGGcode = res
              //数量
              this.EGGnum = res/Math.pow(10,4)
            });
          }
        });
        Toast.clear();
      })
    },

    routerindex(){
      this.$router.push({ path: "/" });
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
  },
  filters: {
    ellipsis(value) {
      let len = value.length;
      if (!value) return "";
      if (value.length > 8) {
        return value.substring(0, 15) + "..." + value.substring(len - 15, len);
      }
      return value;
    },
  },
}
</script>
<style>
.float{
  float: right;
  margin-left: 1rem;
}
.flex1 {
  flex: 1;
}

.van-cell::after {
  border-bottom: 0;
}

.van-field__control {
  color: #ffffff
}

.canvas_code canvas {
  color: #ffffff;
  background: #ffffff;
  border: 2px solid #F2CD36;
  box-sizing: border-box;
  border-radius: .6rem;
}

.dialog_alert.confirm_dialog .van-dialog__footer {
  padding: 8px 24px 5px;
}

.dialog_alert .van-goods-action-button--danger {
  background: none
}

.dialog_alert.confirm_dialog .van-button__content {
  border-right: 0;
}
.van-cell__right-icon {
  margin-right: 10rem;
}
html, body {
  background: #16171D;
}

/*折叠面板*/
.instruction_top .van-cell, .instruction_top .van-collapse-item__content {
  background: none;
  color: #ffffff;
  font-size: 1rem;
}

.instruction_top .van-collapse-item__content {
  font-size: 0.6rem;
}

.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
  border-width: 0 0;
}

.instruction_top .van-cell::after {
  border-bottom: 0px solid #ebedf0;
  color: #ffffff;
}

[class*=van-hairline]::after {
  border: 0 solid #F2CD36;
}

.van-dialog {
  /*border: 2px solid #F2CD36;*/
  box-sizing: border-box;
  /*background-color: #16171D;*/
  border: solid 2px transparent;
  border-radius: 10px;
  background-image: linear-gradient(#16171D, #16171D),
  linear-gradient(to right, #F5D037, #E9B410);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.van-button--default {
  background-color: #16171D
}

.confirm_dialog .van-dialog__header, .confirm_dialog .van-dialog__message--has-title, .confirm_dialog .van-button--default {
  color: #ffffff;
}

.confirm_dialog .van-dialog__footer {
  border-top: 2px solid #F2CD36
}

.confirm_dialog .van-button__content {
  border-right: 2px solid #F2CD36;
}

.van-dialog__cancel .van-button__text {
  color: #666666
}

.van-hairline--left .van-button__content {
  border-right: 0;
}

.van-goods-action {
  background: none;
}

.van-dialog--round-button .van-dialog__message {
  padding-top: 14px;
  padding-bottom: 27px;
}
</style>
<style scoped>
.addr {
  height: 1.2rem;
  line-height: 1.2rem;
  width: 86%;
}

.justify-content_center {
  justify-content: center;
}

.qr_code .egg_title {
  width: 100%;
}

.copybtn {
  width: 30px;
  height: 20px;
  background: url(../../assets/image/copybutton.png) no-repeat;
  background-size: 100% 100%;
}


.addrbg {
  width: 85%;
  margin: 0 auto;
  background: url(../../assets/image/bg.png) no-repeat;
  background-size: 100% auto;
  padding-top: 5.5rem;
  padding-left: 2rem;
  padding-bottom: 5rem;
}

.egginput.van-cell {
  background: none;
  border: 1px solid #666666;
  border-radius: 10px;
  height: 30px;
  padding: 0;
  line-height: 30px;
  font-size: 0.8rem;
  width: 85%;
}

.egg_title_txt {
  background-image: -webkit-linear-gradient(right, #F5D037, #E9B410);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1rem;
  font-weight: bold;
  margin-top: .5rem;
}

.egg_title {
  width: 90%;
  display: flex;
}
</style>
