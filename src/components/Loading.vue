<template>
  <div class="wrapper">
    <div class="linner">
      <div class="lbox">
        <div
          class="man"
          :style="{
            visibility: props.percent < 60 ? 'visible' : 'hidden',
            transform: `translate(${18.875 * (props.percent / 100)}rem,0)`,
          }"
        ></div>
        <div class="man2" v-show="props.percent >= 60"></div>
        <div class="woman" v-show="props.percent >= 60"></div>
        <div
          class="line"
          :style="{ width: `${18.875 * (props.percent / 100)}rem` }"
        ></div>
        <div class="txt">{{ props.percent }}%</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";

const props = defineProps({
  percent: Number,
});
</script>

<style scoped lang="less">
/* loading */
.loading {
  display: block;
}
.linner {
  position: absolute;
  top: 35vh;
  left: 50%;
  width: (37.75/2rem) /* 604/16 */;
  margin-left: (-37.75/4rem);
  .lbox {
    position: relative;
    width: 100%;
    height: 100%;
    height: (13.25/2rem) /* 212/16 */;
  }
  .line {
    // width: 18.875rem /* 302/16 */;
    height: (1.9375/2rem) /* 31/16 */;
    background-image: url("../assets/images/carpet.png");
    background-size: auto 100%;
    background-repeat: no-repeat;
  }
  .man {
    width: (8.4375/2rem) /* 135/16 */;
    height: (13.25/2rem) /* 212/16 */;
    background-image: url("../assets/images/run.png");
    background-size: auto 100%;
    background-position: 0 0;
    animation: 0.5s manpao infinite;
  }
  .man2 {
    width: (9/2rem) /* 144/16 */;
    height: (10.625/2rem) /* 170/16 */;
    background-image: url("../assets/images/knock-human.png");
    background-size: cover;
    position: absolute;
    right: 20%;
    top: 27%;
  }
  .woman {
    width: 3.96875rem /* 127/16 */;
    height: 6.3125rem /* 202/16 */;
    background-image: url("../assets/images/girl.png");
    background-size: cover;
    position: absolute;
    right: 0;
    top: 11%;
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
