<template>
  <div class="wrapper kv">
    <div class="kvbg">
      <div class="title"></div>
      <div class="startBtn" @click="onNext"></div>
    </div>
    <div :class="['music', musicPlaying ? 'musicPause' : 'musicPlay']"></div>
  </div>
</template>

<script setup>
import { defineEmit, defineProps, onMounted } from "vue";

defineProps({
  msg: String,
});
const musicPlaying = false;
const emit = defineEmit(["onNext"]);
const onNext = () => {
  emit("onNext", 1);
};
onMounted(() => {
  document.addEventListener(
    "WeixinJSBridgeReady",
    () => {
      // wx playMusic
    },
    false
  );
});
</script>

<style scoped lang="less">
.music {
  width: 2.5rem /* 40/16 */;
  height: 2.5rem /* 40/16 */;
  position: absolute;
  top: 4vw;
  right: 4vw;
  z-index: 12;
  background-size: 100% 100%;
}
.musicPlay {
  background-image: url("../assets//images/play.png");
}
.musicPause {
  background-image: url("../assets//images/pause.png");
}
.kv {
  background-image: url("../assets/images/main-bg.jpg");
  background-size: cover;
  background-position: center center;
}
.title {
  width: (42.0625/2rem) /* 673/16 */;
  height: (34.5/2rem) /* 552/16 */;
  background-image: url("../assets/images/main-title.png");
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 10vh;
  left: 50%;
  margin-left: -(42.0625/4rem);
  animation: 3s piao ease-in-out infinite;
}
.startBtn {
  width: 9.3125rem /* 149/16 */;
  height: 3.40625rem /* 54.5/16 */;
  background-image: url("../assets/images/main-btn.png");
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 70vh;
  left: 50%;
  margin-left: (-9.3125/2rem);
  animation: 1.5s shan linear infinite;
}

@media only screen and (min-height: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  .title {
    top: 8vh;
  }
  .startBtn {
    top: 75vh;
  }
}

@keyframes shan {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(-20px, 0) rotate(-5deg);
  }
  50% {
    transform: translate(0, 0) rotate(0deg);
  }
  75% {
    transform: translate(20px, 0) rotate(5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

@keyframes piao {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
