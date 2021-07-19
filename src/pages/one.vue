<template>
  <div class="space-y-6">
    <div class="relative bg-skin-fill max-w-4xl mx-auto overflow-hidden" :class="[state.themeName]">
      <img class="absolute inset-0 h-full w-full object-cover opacity-30"
        src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000"
        alt="" />
      <div class="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
      <div class="relative max-w-2xl mx-auto text-center py-16 px-4">
        <h2 class="text-3xl font-extrabold text-skin-base">
          <span class="block">Theme can changed with {{state.themeName|| 'default'}}.</span>
          <span class="block">We handle the distribution.</span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-skin-muted">Fusaiu daushdiuahsdlk dhfhds jaoisjdoiajsoidjsa ajsgdyugqoqo
          clkxzncjxzn aosijdoihj9qi ywgryug becnmelkm.</p>
        <div class="mt-10 max-w-sm mx-auto">
          <div class="space-y-4">
            <a @click="changeTheme('theme-swiss')" href="#"
              class="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover 
            flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-md">
              Get started
            </a>
            <div class="space-y-4">
              <a @click="changeTheme('theme-neon')" href="#"
                class="text-skin-base bg-skin-button-muted bg-opacity-70 hover:bg-opacity-60
            flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-md">
                Live demo
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="container mx-auto">
    <!-- <iframe
      class="h-screen"
      src="https://60864789cd53b3248fa40d6b--eager-heyrovsky-ec83ef.netlify.app/#/buzhi"
      frameborder="0"
    ></iframe> -->
    <input type="radio" name="tab" id="iphone-12-pro" checked class="hidden" />
    <input type="radio" name="tab" id="iphone-12" class="hidden" />
    <input type="radio" name="tab" id="iphone-se" class="hidden" />

    <div class="my-4 nav">
      <label for="iphone-12-pro">
        <span class="py-2 px-5 rounded-full transition inline-block"><span v-for="item in state.percent"
            :key=item>{{item}}</span> <span @click="setPercent">iPhone 12 Pro</span></span>
      </label>
      <label for="iphone-12">
        <span class="py-2 px-5 rounded-full transition inline-block">iPhone 12</span>
      </label>
      <label for="iphone-se">
        <span class="py-2 px-5 rounded-full transition inline-block">iPhone SE</span>
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
            class="text-lg bg-black rounded-full shadow py-2 px-5 mt-6 text-white transform hover:scale-110 hover:bg-blue-600 transition">
            Shop Now
          </button>
        </div>
      </div>
      <div class="w-2/5">
        <img
          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000"
          alt="" />
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
            class="text-lg bg-black rounded-full shadow py-2 px-5 mt-6 text-white transform hover:scale-110 hover:bg-blue-600 transition">
            Shop Now
          </button>
        </div>
      </div>
      <div class="w-2/5">
        <img
          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-family-select-2021?wid=470&amp;hei=556&amp;fmt=jpeg&amp;qlt=95&amp;.v=1617135051000"
          alt="" />
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
            class="text-lg bg-black rounded-full shadow py-2 px-5 mt-6 text-white transform hover:scale-110 hover:bg-blue-600 transition">
            Shop Now
          </button>
        </div>
      </div>
      <div class="w-2/5">
        <img
          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-se-family-select-2020?wid=441&amp;hei=529&amp;fmt=jpeg&amp;qlt=95&amp;.v=1586794486444"
          alt="" />
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <h1 class="text-7xl text-center text-blue-600 sm:bg-black sm:text-white">
      Hello, Tailwind
    </h1>
    <div class="px-8 py-12">
      <img src="../assets/images/carpet.png" alt="logo" class="h-10" />
      <img src="../assets/images/carpet.png" alt="logo" class="mt-6 rounded-md" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";

const state = reactive({
  themeName: '',
  percent: [1, 2],
  haibaoSrc: "",
});

const setPercent = () => {
  state.percent[0] = 2
}
const changeTheme = (theme) => {
  state.themeName = theme
}

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
