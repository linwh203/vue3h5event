<template>
  <div class="container mx-auto">
    <input type="radio" name="tab" id="iphone-12-pro" checked class="hidden" />
    <input type="radio" name="tab" id="iphone-12" class="hidden" />
    <input type="radio" name="tab" id="iphone-se" class="hidden" />

    <div class="my-4 nav">
      <label for="iphone-12-pro">
        <span class="py-2 px-5 rounded-full transition inline-block"
          >iPhone 12 Pro</span
        >
      </label>
      <label for="iphone-12">
        <span class="py-2 px-5 rounded-full transition inline-block"
          >iPhone 12</span
        >
      </label>
      <label for="iphone-se">
        <span class="py-2 px-5 rounded-full transition inline-block"
          >iPhone SE</span
        >
      </label>
    </div>

    <div class="p-8 rounded-xl shadow-md hidden transition tab-iphone-12-pro">
      <div class="text-left w-3/5 flex flex-col justify-center">
        <div>
          <h2 class="text-2xl font-bold">iPhone 12 Pro</h2>
          <p class="mt-3 text-sm">
            5G 一躍登上 Pro 系列。A14
            仿生極速超前，遠遠拋離所有智能電話晶片。Pro
            相機系統，將低光拍攝提升至嶄新層次，更在 iPhone 12 Pro Max
            上登峰造極。陶瓷晶體護面，帶來四倍耐跌撞能力。實力非一般，來一起見識。
          </p>
          <button
            class="text-lg bg-black rounded-full shadow py-2 px-5 mt-6 text-white transform hover:scale-110 hover:bg-blue-600 transition"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div class="w-2/5">
        <img
          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000"
          alt=""
        />
      </div>
    </div>
    <div class="p-8 rounded-xl shadow-md hidden transition tab-iphone-12">
      <div class="text-left w-3/5 flex flex-col justify-center">
        <div>
          <h2 class="text-2xl font-bold">iPhone 12</h2>
          <p class="mt-3 text-sm">
            超快 5G、智能電話上最快的 A14 仿生晶片、 延展至四面角落的 OLED
            顯示器、四倍耐跌撞能力的陶瓷晶體護面，以至所有相機均具夜間模式。iPhone
            12，一切完備，還有兩款完美尺寸。
          </p>
          <button
            class="text-lg bg-black rounded-full shadow py-2 px-5 mt-6 text-white transform hover:scale-110 hover:bg-blue-600 transition"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div class="w-2/5">
        <img
          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-family-select-2021?wid=470&amp;hei=556&amp;fmt=jpeg&amp;qlt=95&amp;.v=1617135051000"
          alt=""
        />
      </div>
    </div>
    <div class="p-8 rounded-xl shadow-md hidden transition tab-iphone-se">
      <div class="text-left w-3/5 flex flex-col justify-center">
        <div>
          <h2 class="text-2xl font-bold">iPhone SE</h2>
          <p class="mt-3 text-sm">
            iPhone SE
            以我們超強勁的晶片、最受歡迎的尺寸、最吸引的價格登場。種種精彩，一如你所期待。
          </p>
          <button
            class="text-lg bg-black rounded-full shadow py-2 px-5 mt-6 text-white transform hover:scale-110 hover:bg-blue-600 transition"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div class="w-2/5">
        <img
          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-se-family-select-2020?wid=441&amp;hei=529&amp;fmt=jpeg&amp;qlt=95&amp;.v=1586794486444"
          alt=""
        />
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <h1 class="text-7xl text-center text-blue-600 sm:bg-black sm:text-white">
      Hello, Tailwind
    </h1>
    <div class="px-8 py-12">
      <img src="../assets/images/carpet.png" alt="logo" class="h-10" />
      <img
        src="../assets/images/carpet.png"
        alt="logo"
        class="mt-6 rounded-md"
      />
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
// #iphone-12-pro:checked ~ .tab-iphone-12-pro {
//   @apply flex;
// }
#iphone-12-pro {
  &:checked {
    & ~ .tab-iphone-12-pro {
      @apply flex flex-col-reverse md:flex-row;
    }
    & ~ .nav label[for="iphone-12-pro"] span {
      @apply bg-gray-200;
    }
  }
}
#iphone-12 {
  &:checked {
    & ~ .tab-iphone-12 {
      @apply flex;
    }
    & ~ .nav label[for="iphone-12"] span {
      @apply bg-gray-200;
    }
  }
}
#iphone-se {
  &:checked {
    & ~ .tab-iphone-se {
      @apply flex;
    }
    & ~ .nav label[for="iphone-se"] span {
      @apply bg-gray-200;
    }
  }
}
</style>
