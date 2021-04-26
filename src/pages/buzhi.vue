<template>
  <div class="allwrapper">
    <Loading v-if="state.isLoading" :percent="state.percent" />
    <Kv v-if="state.isKv" @onNext="onNext" />
    <Gaobai v-if="state.isGaobai" @onNext="onNext" />
    <Buzhi v-if="state.isBuzhi" @onNext="onNext" @onHaibaoSrc="onHaibaoSrc" />
    <Last v-if="state.isLast" :haibaoSrc="state.haibaoSrc" @onNext="onNext" />
  </div>
  <audio src=""></audio>
  <!-- 横屏提示 -->
  <div class="flatTip">
    <div class="flatInner">
      <div class="icon"></div>
      <div class="tip">请竖屏观看</div>
    </div>
  </div>
</template>
<script setup>
import Loading from "../components/Loading.vue";
import Kv from "../components/Kv.vue";
import Gaobai from "../components/Gaobai.vue";
import Buzhi from "../components/Buzhi.vue";
import Last from "../components/Last.vue";
import { onMounted, reactive, ref } from "vue";

const state = reactive({
  isLoading: true,
  isKv: false,
  isGaobai: false,
  isBuzhi: false,
  isLast: false,
  percent: 0,
  haibaoSrc: "",
});

const onNext = (arg) => {
  console.log(arg);
  switch (arg) {
    case 1:
      state.isKv = false;
      state.isGaobai = true;
      break;
    case 2:
      state.isGaobai = false;
      state.isLast = false;
      state.isBuzhi = true;
      break;
    case 3:
      state.isBuzhi = false;
      state.isLast = true;
      break;
    default:
      break;
  }
};

const onHaibaoSrc = (src) => {
  state.haibaoSrc = src;
};

function preLoad() {
  const loader = new ImagesLoader();
  loader.loadImages(
    [
      "btn-l.png",
      "btn-r.png",
      "carpet.png",
      "cloud1.png",
      "cloud2.png",
      "fn-b-flower.png",
      "fn-cloth.png",
      "fn-sepr-flower.png",
      "fn-up-mask.png",
      "girl.png",
      "knock-human.png",
      "main-bg.jpg",
      "main-btn.png",
      "main-title.png",
      "pause.png",
      "pixels.png",
      "play.png",
      "run.png",
      "sakura1.png",
      "sakura2.png",
      "sakura3.png",
      "trans-bg.jpg",
    ],
    "./images/"
  );
  loader.loadImages(
    [
      "b-clothes1.png",
      "b-clothes2.png",
      "b-clothes3.png",
      "b-clothes4.png",
      "b-clothes5.png",
      "b-clothes6.png",
      "bg-clothes1.png",
      "bg-clothes2.png",
      "bg-clothes3.png",
      "bg-clothes4.png",
      "bg-clothes5.png",
      "bg-clothes6.png",
      "b-hair1.png",
      "b-hair2.png",
      "b-hair3.png",
      "b-hair4.png",
      "b-hair5.png",
      "b-hair6.png",
      "bg-hair1.png",
      "bg-hair2.png",
      "bg-hair3.png",
      "bg-hair4.png",
      "bg-hair5.png",
      "bg-hair6.png",
      "bg1.jpg",
      "bg2.jpg",
      "bg3.jpg",
      "bg4.jpg",
      "bg5.jpg",
      "bg6.jpg",
      "bg7.jpg",
      "bg8.jpg",
      "bg9.jpg",
      "bm1.png",
      "bm2.png",
      "bm3.png",
      "bmm1.png",
      "bmm2.png",
      "bmm3.png",
      "cf1.png",
      "cf2.png",
      "cf3.png",
      "cm1.png",
      "cm2.png",
      "cm3.png",
      "dec1.png",
      "dec2.png",
      "dec3.png",
      "dec4.png",
      "dec5.png",
      "dec6.png",
      "dec7.png",
      "dec8.png",
      "dec9.png",
      "dec10.png",
      "dec11.png",
      "dec12.png",
      "pet1.png",
      "pet2.png",
      "pet3.png",
      "pet4.png",
      "pet5.png",
      "pet6.png",
      "thumb-b-clothes1.png",
      "thumb-b-clothes2.png",
      "thumb-b-clothes3.png",
      "thumb-b-clothes4.png",
      "thumb-b-clothes5.png",
      "thumb-b-clothes6.png",
      "thumb-bg-clothes1.png",
      "thumb-bg-clothes2.png",
      "thumb-bg-clothes3.png",
      "thumb-bg-clothes4.png",
      "thumb-bg-clothes5.png",
      "thumb-bg-clothes6.png",
      "thumb-b-hair1.png",
      "thumb-b-hair2.png",
      "thumb-b-hair3.png",
      "thumb-b-hair4.png",
      "thumb-b-hair5.png",
      "thumb-b-hair6.png",
      "thumb-bg-hair1.png",
      "thumb-bg-hair2.png",
      "thumb-bg-hair3.png",
      "thumb-bg-hair4.png",
      "thumb-bg-hair5.png",
      "thumb-bg-hair6.png",
      "thumb-bm1.png",
      "thumb-bm2.png",
      "thumb-bm3.png",
      "thumb-bmm1.png",
      "thumb-bmm2.png",
      "thumb-bmm3.png",
      "thumb-chf1.png",
      "thumb-chf2.png",
      "thumb-chf3.png",
      "thumb-d1.png",
      "thumb-d2.png",
      "thumb-d3.png",
      "thumb-d4.png",
      "thumb-d5.png",
      "thumb-d6.png",
      "thumb-d7.png",
      "thumb-d8.png",
      "thumb-d9.png",
      "thumb-d10.png",
      "thumb-d11.png",
      "thumb-d12.png",
    ],
    "./img/"
  );
  loader.complete(function () {
    console.log("completed");
    setTimeout(() => {
      state.isLoading = false;
      state.isKv = true;
    }, 0);
  });
  loader.process(function () {
    console.log("process" + this.processNum, state.percent);
    state.percent = this.processNum;
  });
  loader.start();
}

preLoad();
</script>
<style lang="less">
/* 公共样式 */
.wrapper {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #f9ede1;
}
.flatTip {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  display: none;
  color: #fff;
  text-align: center;
  .icon {
    width: 4.1875rem /* 67/16 */;
    height: 6.8125rem /* 109/16 */;
    background-image: url(/images/pixels.png);
    background-size: 100% 100%;
    margin: 20px auto;
    padding-bottom: 20px;
  }
}
@media all and (orientation: landscape) {
  /* 横屏 */
  .allwrapper {
    display: none;
  }
  .flatTip {
    display: block;
  }
}
@media all and (orientation: portrait) {
  /* 竖屏 */
  .allwrapper {
    display: block;
  }
  .flatTip {
    display: none;
  }
}
</style>
