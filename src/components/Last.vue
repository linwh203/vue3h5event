<template>
  <div class="wrapper wy">
    <div class="lastpage">
      <div class="haibao">
        <div class="haibaoInner">
          <img :src="props.haibaoSrc" id="myhaibao" />
          <div class="xiushi2"></div>
        </div>
      </div>
      <div class="xiushi1"></div>

      <div class="btns">
        <div class="btn replayBtn" @click="onReplay"></div>
        <div class="btn shareBtn" @click="state.shareLayer = true"></div>
      </div>
      <div class="xiushi3"></div>
    </div>
  </div>

  <div
    class="sharelayer"
    @click="state.shareLayer = false"
    v-if="state.shareLayer"
  >
    <div class="slayer"></div>
  </div>
</template>

<script setup>
import { defineEmit, defineProps, reactive } from "vue";

const props = defineProps({
  haibaoSrc: String,
});
const state = reactive({
  shareLayer: false,
});
const emit = defineEmit(["onNext"]);
const onReplay = () => {
  emit("onNext", 2);
};
</script>

<style scoped lang="less">
.sharelayer {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  .slayer {
    width: 18.75rem /* 300/16 */;
    height: 13.5625rem /* 217/16 */;
    position: absolute;
    top: 4vw;
    right: 4vw;
    background-image: url(/images/fn-up-mask.png);
    background-size: 100% 100%;
  }
}
.wy {
  .xiushi1 {
    width: (16.25/2rem) /* 144/16 */;
    height: (23.75/2rem) /* 170/16 */;
    background-image: url("../assets/images/fn-cloth.png");
    background-size: cover;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .xiushi2 {
    width: 5.34375rem /* 85.5/16 */;
    height: 6.625rem /* 106/16 */;
    background-image: url("../assets/images/fn-sepr-flower.png");
    background-size: cover;
    position: absolute;
    left: -10vw;
    top: 65vh;
    z-index: 9;
  }
  .xiushi3 {
    width: 100vw;
    height: 5.84375rem /* 93.5/16 */;
    background-image: url("../assets/images/fn-b-flower.png");
    background-size: cover;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .haibao {
    position: absolute;
    top: 7vh;
    left: 10vw;
    width: 70vw;
    z-index: 1;

    img {
      width: 100%;
      border: 20px solid #ffffff;
    }
  }

  .btns {
    width: 70vw;
    position: absolute;
    left: 50%;
    margin-left: -35vw;
    bottom: 10vh;
    z-index: 13;
    .btn {
      width: 6.6875rem /* 107/16 */;
      height: 2.40625rem /* 38.5/16 */;
      background-size: cover;
    }
    .replayBtn {
      background-image: url("../assets/images/btn-l.png");
      float: left;
    }
    .shareBtn {
      background-image: url("../assets/images/btn-r.png");
      float: right;
    }
  }
}

@media only screen and (min-height: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  .wy .haibao {
    left: 20vw;
    width: 54vw;
  }
}

@keyframes manpao {
  0% {
    background-position: 0 0;
  }
  19% {
    background-position: 0 0;
  }
  20% {
    background-position: (-8.4375/2rem) 0;
  }
  39% {
    background-position: (-8.4375/2rem) 0;
  }
  40% {
    background-position: (-8.4375/2 * 2rem) 0;
  }
  59% {
    background-position: (-8.4375/2 * 2rem) 0;
  }
  60% {
    background-position: (-8.4375/2 * 3rem) 0;
  }
  79% {
    background-position: (-8.4375/2 * 3rem) 0;
  }
  80% {
    background-position: (-8.4375/2 * 4rem) 0;
  }
  99% {
    background-position: (-8.4375/2 * 4rem) 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
