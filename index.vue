<template>
  <div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  props: {
    msg: String,
  },
  data() {
    return {

    };
  },
  created() {

  },
  methods: {
    // 返回上一级
    toGO() {
      window.history.back(-1);

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "//fonts.useso.com/css?family=Roboto:300,400,500,700,400italic";
@import "http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css";

</style>
