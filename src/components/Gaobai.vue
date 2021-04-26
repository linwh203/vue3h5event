<template>
  <div class="wrapper gb">
    <div class="gbbg">
      <div class="txt1"></div>
      <div class="txt2"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmit } from "vue";

defineProps({
  msg: String,
});

const emit = defineEmit(["onNext"]);
setTimeout(() => {
  emit("onNext", 2);
}, 2000);
</script>

<style scoped lang="less">
/* kv */
.gb {
  background-image: url("../assets/images/trans-bg.jpg");
  background-size: cover;
  background-position: center center;
}
.txt1 {
  width: 23.0625rem /* 369/16 */;
  height: 22.25rem /* 356/16 */;
  background-image: url("../assets/images/cloud1.png");
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 10vh;
  right: 0;
  animation: 1s enterTxt1 linear;
}
.txt2 {
  width: 19.46875rem /* 311.5/16 */;
  height: 18.40625rem /* 294.5/16 */;
  background-image: url("../assets/images/cloud2.png");
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 50vh;
  left: 0;
  animation: 1s enterTxt2 linear;
}

@keyframes enterTxt1 {
  0% {
    right: -23.0625rem;
  }
  100% {
    right: 0;
  }
}
@keyframes enterTxt2 {
  0% {
    left: -19.46875rem;
  }
  100% {
    left: 0;
  }
}
</style>
