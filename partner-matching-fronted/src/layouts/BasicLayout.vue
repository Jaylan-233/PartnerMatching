
<template>
  <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  />

</template>

<script  setup>
import { showToast } from 'vant';
const onClickLeft = () => alert("左边");
const onClickRight = () => alert("右边")


</script>



<style scoped>

</style>