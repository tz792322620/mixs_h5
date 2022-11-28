<template>
  <div class="bj">
    <div style="display: flex;
    flex-direction: column;
    align-items: center;padding-top: 3rem;position: relative;">
      <div style="width: 5rem;padding-bottom: 1rem;">
        <img src="@/assets/image/logo.png" >
        <div style="position: absolute;left: 20px;top: 170px;color: #fff;">
          <div style="border-radius: 1rem;
              border: 1px solid #fff;
              padding: 0.2rem;
              width: 5rem;
              text-align: center;
              background-color: #fff;
              color: #4db2b0;" @click="yuyan = true">
            {{ $t('lang.13') }}
          </div>
        </div>
      </div>
      <div style="width: 10rem;"><img src="@/assets/image/logotitle.png" ></div>
    </div>

    <div style="margin: 1rem;margin-top: 3rem;">
      <div style="background-color: #fff;width: 100%;padding: 1rem;border-radius: 1rem;padding-bottom: 3rem;">
        <div style="display: flex;
            justify-content: space-around;
            padding-top: 1rem;font-size: 1rem;font-weight: 600;padding-bottom: 1rem;">
          <div :class=" !xsyx ? 'xz':'' " @click="sjzc()">{{ $t('lang.mobileRegistration') }}</div>
          <div :class=" xsyx ? 'xz':'' "  @click="yxzc()" >{{ $t('lang.emailRegistration') }}</div>
        </div>
        <div>
          <div class="bjk" v-if="!xsyx">
            <van-field
                v-model="sjh"
                maxlength="11"
                type="number"
                :placeholder="$t('lang.0')"
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
                :placeholder="$t('lang.1')"
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
                :placeholder="$t('lang.2')"
                maxlength="6"
            >
              <template #left-icon>
                <img style="width: 1.5rem" src="@/assets/image/yzm.png">
              </template>
              <template #button>
                <span  style="color: #4bb2b1;" v-show="timeTrue == true" @click="acquire">{{ $t('lang.3') }}</span>
                <span  style="color: #4bb2b1;" v-show="timeTrue == false" >{{ time }}{{ $t('lang.4') }}</span>
              </template>
            </van-field>
          </div>

          <div class="bjk">
            <van-field
                v-model="mm"
                type="password"
                left-icon="@/assets/image/yqm.png"
                :placeholder="$t('lang.5')"
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
                :placeholder="$t('lang.6')"
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
                :placeholder="$t('lang.7')"
                :disabled="disabled"
                maxlength="10"
            >
              <template #left-icon>
                <img style="width: 1.5rem" src="@/assets/image/yqm.png">
              </template>
            </van-field>
          </div>
        </div>

        <div style="display: flex;
             flex-direction: column;
             align-items: center;
             margin: 0.5rem;">
          <div @click="sees()" style="width: 100%">
<!--            <img src="@/assets/image/czan.png" >-->
            <div style="background-image: linear-gradient(206deg, #49B1B3, #59B59E);
            border-radius: 1rem;
            text-align: center;
            padding: 0.51rem;
            color: #fff;
            font-size: 1rem;">{{ $t('lang.17') }}</div>
          </div>
          <div style="width: 15rem;margin-top: 1rem;">
            <div style="border-top: 1px dashed #4bb1b0;
              border-bottom: 1px dashed #4bb1b0;
              padding: 1rem;
              text-align: center;
              color: #4bb1b0;">
              <div>{{ $t('lang.18') }} • {{ $t('lang.19') }} • {{ $t('lang.20') }}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="footer">
      <div style=" display: flex;flex-direction: row;align-items: center;">
        <div>
          <img width="50rem" src="@/assets/image/logo1.png" >
        </div>
        <div style="color: #fff;margin-left: 1rem;">
          <div>MIXS Global</div>
          <div>★★★★★(20k+)</div>
        </div>
        <div style="margin-left: 6rem;color: #fff;" @click="download()">
          <div style="background-image: linear-gradient(206deg, rgb(73, 177, 179), rgb(89, 181, 158));
    border-radius: 5rem;
    text-align: center;
    color: rgb(255, 255, 255);
    width: 100px;
    height: 30px;
    line-height: 30px;">{{ $t('lang.25') }}</div>
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

<!--    <van-popup v-model="yuyan" round position="bottom">-->
<!--      <van-picker-->
<!--          show-toolbar-->
<!--          :columns="yuyans"-->
<!--          @cancel="yuyan = false"-->
<!--          @confirm="onConfirms"-->
<!--      />-->
<!--    </van-popup>-->
    <van-action-sheet v-model="yuyan" :actions="yuyans" @select="onConfirms" />

  </div>
</template>

<script>
import {Collapse, CollapseItem, Field, Dialog, Toast, Loading , Lazyload ,Swipe, SwipeItem ,Icon
,Image as VanImage , CountDown ,Popup ,Cell, CellGroup ,Progress,Picker,ActionSheet} from "vant";
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
        yuyans: [{ name: this.$t('lang.14'),value:'zh' },{ name: this.$t('lang.15'),value:'en' },{ name: this.$t('lang.16'),value:'tc' }],
        actions: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }],
        yuyan: false,
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
    [ActionSheet.name]: ActionSheet,
  },
  //初始化
  async created(){
    await this.huoqu();
    //语言初始化
    await this.yycs();
  },

  methods: {
    yycs(){
      var JsSrc =(navigator.language || navigator.browserLanguage).toLowerCase();
      if(JsSrc.indexOf('en')>=0) {
        console.log("JsSrc1",JsSrc)
        this.$i18n.locale = 'en'
        localStorage.setItem('locale','en')
        this.reload()
        // 假如浏览器语言是日语
      }
    },
    checkEmail() {
      const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
      if (!reg.test(this.sjh)) {
        Toast(this.$t('lang.8'));
        this.sjh=''
      }
    },

    checkPhone() {
      const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
      if (!reg.test(this.sjh)) {
        Toast(this.$t('lang.9'));
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
    download(){
      this.$router.push({ path: "/download" });
    },
    sees(){
      let that = this
      let type
      type = !that.xsyx ? 0 : 1;
      if (that.yzm == '' || that.qrmm == '' || that.mm == '' || that.sjh == ''){
        Toast(this.$t('lang.10'));
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
        Toast(that.$t('lang.11'));
        that.$router.push({ path: "/download" });
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
    onConfirms(value) {
      console.log(value.value)

      this.$i18n.locale = value.value
      localStorage.setItem('locale',value.value)
      this.yuyan = false;
      this.reload()
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
        Toast(that.$t('lang.21'));
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
.footer{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  background: #00000087;
}

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
