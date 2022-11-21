<template>
  <div class="bj">
    <div style="display: flex;
    flex-direction: column;
    align-items: center;padding-top: 3rem;">
      <div style="width: 5rem;padding-bottom: 1rem;"><img src="@/assets/image/logo.png" ></div>
      <div style="width: 10rem;"><img src="@/assets/image/logotitle.png" ></div>
    </div>

    <div style="margin: 1rem;margin-top: 3rem;">
      <div style="background-color: #fff;width: 100%;padding: 1rem;border-radius: 1rem;padding-bottom: 3rem;">
        <div style="display: flex;
            justify-content: space-around;
            padding-top: 1rem;font-size: 1rem;font-weight: 600;padding-bottom: 1rem;">
          <div :class=" !xsyx ? 'xz':'' " @click="sjzc()">手机注册</div>
          <div :class=" xsyx ? 'xz':'' "  @click="yxzc()" >邮箱注册</div>
        </div>
        <div>
          <div class="bjk" v-if="!xsyx">
            <van-field
                v-model="sjh"
                maxlength="11"
                type="number"
                placeholder="请输入手机号"
            >
              <template #left-icon>
                <div style="display: flex;" @click="showPicker = true">
                  <div>+{{quhao}}</div>
                  <div><img style="width: 1.5rem" src="@/assets/image/sjh.png"></div>
                </div>
              </template>
            </van-field>
          </div>

          <div class="bjk" v-if="xsyx">
            <van-field
                v-model="sjh"
                placeholder="请输入邮箱"
                @blur="checkEmail"
            >
              <template #left-icon>
                <img style="width: 1.5rem" src="@/assets/image/yx.png">
              </template>
            </van-field>
          </div>


          <div class="bjk">
            <van-field
                v-model="yzm"
                left-icon="@/assets/image/yqm.png"
                placeholder="请输入验证码"
                maxlength="6"
            >
              <template #left-icon>
                <img style="width: 1.5rem" src="@/assets/image/yzm.png">
              </template>
              <template #button>
                <span  style="color: #4bb2b1;" v-show="timeTrue == true" @click="acquire">发送验证码</span>
                <span  style="color: #4bb2b1;" v-show="timeTrue == false" >{{ time }}秒后重新获取</span>
              </template>
            </van-field>
          </div>

          <div class="bjk">
            <van-field
                v-model="mm"
                type="password"
                left-icon="@/assets/image/yqm.png"
                placeholder="请输入8-32位字母数字密码组合"
                maxlength="32"
            >
              <template #left-icon>
                <img style="width: 1.5rem" src="@/assets/image/mima.png">
              </template>
            </van-field>
          </div>

          <div class="bjk">
            <van-field
                v-model="qrmm"
                type="password"
                left-icon="@/assets/image/yqm.png"
                maxlength="32"
                placeholder="请再次输入8-32位字母数字密码组合"
            >
              <template #left-icon>
                <img style="width: 1.5rem" src="@/assets/image/mima.png">
              </template>
            </van-field>
          </div>

          <div class="bjk">
            <van-field
                v-model="yqm"
                left-icon="@/assets/image/yqm.png"
                placeholder="请输入邀请码(选填)"
                :disabled="disabled"
                maxlength="10"
            >
              <template #left-icon>
                <img style="width: 1.5rem" src="@/assets/image/yqm.png">
              </template>
            </van-field>
          </div>
        </div>

        <div style="display: flex;flex-direction: column;align-items: center;">
          <div @click="sees()">
            <img src="@/assets/image/czan.png" >
          </div>
          <div style="width: 15rem;margin-top: 1rem;">
            <img src="@/assets/image/czxx.png" >
          </div>
        </div>
      </div>

    </div>

    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
      />
    </van-popup>

  </div>
</template>

<script>
import {Collapse, CollapseItem, Field, Dialog, Toast, Loading , Lazyload ,Swipe, SwipeItem ,Icon
,Image as VanImage , CountDown ,Popup ,Cell, CellGroup ,Progress,Picker} from "vant";
import axios from '../../utils/axios';
export default {
  name: "index",
  inject: ['reload'],
  data() {
    return {
        sjh:'',
        yzm:'',
        mm:'',
        qrmm:'',
        yqm:'',
        xsyx:false,
        columns: [{ text: '中国',value:'86' }],
        showPicker: false,
        quhao:'86',
        timeTrue: true,
        time: 0,
        disabled:false,
    }
  },

  mounted() {

  },
  watch: {

  },

  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Field.name]: Field,
    [Dialog.name]: Dialog,
    [Dialog.Component.name]: Dialog.Component,
    [Toast.name]: Toast,
    [Loading.name]: Loading,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload,
    [Icon.name]: Icon,
    [VanImage.name]: VanImage,
    [CountDown.name]: CountDown,
    [Popup.name]: Popup,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Progress.name]: Progress,
    [Picker.name]: Picker,
  },
  //初始化
  async created(){
    await this.huoqu();
  },

  methods: {
    checkEmail() {
      const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
      if (!reg.test(this.sjh)) {
        Toast('请输入正确的邮箱');
        this.sjh=''
      }
    },

    checkPhone() {
      const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
      if (!reg.test(this.sjh)) {
        Toast('请输入正确的手机号');
        this.sjh=''
      }
    },

    async huoqu(){
      let code = this.$route.query.code !== null ? this.$route.query.code : localStorage.getItem('code')
      console.log("code",code)
      if(code != null){
        this.yqm = code
        this.disabled = true
      }
      let qhxxs=[]
      await axios.get('http://user.mixs.me/user/listArea').then(res=> {
        console.log(res.data)
        res.data.map((item) => {
          let qhxx = {text: item.country+('+'+item.areaNo),value:item.areaNo}
          qhxxs.push(qhxx)
        })
      }).catch(err=>{
        console.log(err.data)
        err.data.map((item) => {
          let qhxx = {text: item.country+(item.areaNo),value:item.areaNo}
          qhxxs.push(qhxx)
        })
      });
      console.log(qhxxs)
      this.columns = qhxxs
    },
    sees(){
      let that = this
      let type
      type = !that.xsyx ? 0 : 1;
      if (that.yzm == '' || that.qrmm == '' || that.mm == '' || that.sjh == ''){
        Toast('信息不能为空');
        return false
      }
      axios.post('http://user.mixs.me/user/register',{
        "areaCode": that.quhao,
        "captcha": that.yzm,
        "confirmPassword": that.qrmm,
        "invitationCode": that.yqm,
        "password": that.mm,
        "phoneNoOrMail": that.sjh,
        "type":type
      }).then(function (response) {
        console.log(response);
        Toast('注册成功');
        this.$router.push({ path: "/download" });
      }).catch(function (error) {
        Toast(error.msg);
        // location.reload();
      });
    },
    sjzc(){
        this.sjh = '';
        this.xsyx =false;
    },
    yxzc(){
      this.sjh = '';
      this.xsyx =true;
    },
    onConfirm(value) {
      console.log(value.value)
      this.value = value.value;
      this.quhao = value.value
      this.showPicker = false;
    },
    acquire() {
      let that = this
      let type = 0
      let sj = ''
      if(this.quhao == '86'){
         sj = this.sjh
      }else {
         sj = this.quhao + this.sjh
      }

      type = !that.xsyx ? 0 : 1;
      axios.post('http://user.mixs.me/captcha/registerCaptcha',{
        "captchaType": 0,
        "mailOrPhone": sj,
        "type": type
      }).then(function (response) {
        console.log(response);
        Toast('发送成功');
        that.timeTrue = false;
        that.time = 60;
        var setTimeoutS = setInterval(() => {
          that.time--;
          if (that.time <= 0) {
            clearInterval(setTimeoutS);
            that.timeTrue = true;
          }
        }, 1000);
      }).catch(function (error) {
        console.log(error);
        Toast(error.msg);
      });
    },

  },
  filters: {

  },
}
</script>
<style>
.bj{
  background-image: linear-gradient(206deg, #49B1B3, #59B59E);
  height: 60rem;
  /*position: fixed;*/
  /*overflow-y: hidden;*/
  width: 100%;
}
.bjk{
  border: 1px solid #49B1B3;
  margin: 0.5rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
}
.van-cell {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;
  border-radius: 1rem;
}
.xz{
  color: #49B1B3
}
</style>
