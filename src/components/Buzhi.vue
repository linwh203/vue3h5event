<template>
  <div class="wrapper bzcj">
    <div id="stage" class="stage" ref="stage"></div>
    <div class="saveBtn" @click="onHaibao"></div>
    <div class="subtab">
      <!--新郎-->
      <ul class="dobuleline" v-if="subTabIndex == 0">
        <li
          v-for="(val, index) in xinlangHairPaths"
          :key="val"
          :ref="xinlangRef"
          @click="onSubTabClick($event, 'xlSpr', 2)"
        >
          <img :src="val" :id="'bg-hair' + (index + 1)" />
        </li>
        <li
          v-for="(val, index) in xinlangClothPaths"
          :key="val"
          @click="onSubTabClick($event, 'xlSpr', 0)"
        >
          <img :src="val" :id="'bg-clothes' + (index + 1)" />
        </li>
      </ul>
      <!--伴郎-->
      <ul class="singleline" v-if="subTabIndex == 3">
        <li id="bmm1">
          <img src="/img/thumb-bmm1.png" @click="onAddOthers(`bmm1`, 2)" />
        </li>
        <li id="bmm2">
          <img src="/img/thumb-bmm2.png" @click="onAddOthers(`bmm2`, 2)" />
        </li>
        <li id="bmm3">
          <img src="/img/thumb-bmm3.png" @click="onAddOthers(`bmm3`, 2)" />
        </li>
      </ul>
      <!--男童-->
      <ul class="singleline" v-if="subTabIndex == 2">
        <li id="cm1">
          <img src="/img/thumb-chm1.png" @click="onAddOthers(`cm1`, 2)" />
        </li>
        <li id="cm2">
          <img src="/img/thumb-chm2.png" @click="onAddOthers(`cm2`, 2)" />
        </li>
        <li id="cm3">
          <img src="/img/thumb-chm3.png" @click="onAddOthers(`cm3`, 2)" />
        </li>
      </ul>
      <!--新娘-->
      <ul class="dobuleline" v-if="subTabIndex == 1">
        <li
          v-for="(val, index) in xinniangHairPaths"
          :key="val"
          @click="onSubTabClick($event, 'xnSpr', 2)"
        >
          <img :src="val" :id="'b-hair' + (index + 1)" />
        </li>
        <li
          v-for="(val, index) in xinniangClothPaths"
          :key="val"
          @click="onSubTabClick($event, 'xnSpr', 0)"
        >
          <img :src="val" :id="'b-clothes' + (index + 1)" />
        </li>
      </ul>
      <!--伴娘-->
      <ul class="singleline" v-if="subTabIndex == 4">
        <li id="bm1">
          <img src="/img/thumb-bm1.png" @click="onAddOthers(`bm1`, 2)" />
        </li>
        <li id="bm2">
          <img src="/img/thumb-bm2.png" @click="onAddOthers(`bm2`, 2)" />
        </li>
        <li id="bm3">
          <img src="/img/thumb-bm3.png" @click="onAddOthers(`bm3`, 2)" />
        </li>
      </ul>
      <!--女童-->
      <ul class="singleline" v-if="subTabIndex == 5">
        <li id="cf1">
          <img src="/img/thumb-chf1.png" @click="onAddOthers(`cf1`, 2)" />
        </li>
        <li id="cf2">
          <img src="/img/thumb-chf2.png" @click="onAddOthers(`cf2`, 2)" />
        </li>
        <li id="cf3">
          <img src="/img/thumb-chf3.png" @click="onAddOthers(`cf3`, 2)" />
        </li>
      </ul>
    </div>
    <div class="cardContent">
      <div class="tabs">
        <div
          :class="[
            'tab',
            index == 4 ? 'xs' : '',
            index == tabIndex ? 'selected' : '',
          ]"
          v-for="(val, index) in tabIconPaths"
          :key="index"
          @click="onTabChange(index)"
        >
          <img :src="val" />
        </div>
      </div>
      <div class="tabCont">
        <!--风景-->
        <div class="tCont" v-if="tabIndex == 0">
          <ul>
            <li
              v-for="(val, idx) in fengjingImgPaths"
              :key="val"
              @click="onBgChange(idx + 1)"
            >
              <img :src="val" />
            </li>
          </ul>
        </div>
        <!--人物-->
        <div class="tCont" v-if="tabIndex == 1">
          <ul>
            <li
              v-for="(val, idx) in peopleImgPaths"
              :key="val"
              @click="onAddPeople(idx)"
            >
              <img :src="val" />
            </li>
          </ul>
        </div>
        <!--修饰-->
        <div class="tCont" v-if="tabIndex == 2">
          <ul>
            <li v-for="(val, idx) in xiushiImgPaths" :key="val">
              <img
                :src="val"
                :id="`dec${idx + 1}`"
                @click="onAddOthers(`dec${idx + 1}`, 2)"
              />
            </li>
          </ul>
        </div>
        <!--宠物-->
        <div class="tCont" v-if="tabIndex == 3">
          <ul>
            <li
              v-for="(val, idx) in petImgPaths"
              :key="val"
              :id="`pet${idx + 1}`"
            >
              <img :src="val" @click="onAddOthers(`pet${idx + 1}`, 2)" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  defineProps,
  defineEmit,
  reactive,
  toRefs,
  ref,
  onMounted,
  nextTick,
} from "vue";
const tabIconPaths = [
  "/img/nav-place.png",
  "/img/nav-human.png",
  "/img/nav-dec.png",
  "/img/nav-pet.png",
  "/img/nav-arrow.png",
];
const fengjingImgPaths = [
  "/img/thumb-s1.jpg",
  "/img/thumb-s2.jpg",
  "/img/thumb-s3.jpg",
  "/img/thumb-s4.jpg",
  "/img/thumb-s5.jpg",
  "/img/thumb-s6.jpg",
  "/img/thumb-s7.jpg",
  "/img/thumb-s8.jpg",
  "/img/thumb-s9.jpg",
];
const peopleImgPaths = [
  "/img/thumb-hm1.png",
  "/img/thumb-hm2.png",
  "/img/thumb-hm3.png",
  "/img/thumb-hm4.png",
  "/img/thumb-hm5.png",
  "/img/thumb-hm6.png",
];
const xiushiImgPaths = [
  "/img/thumb-d1.png",
  "/img/thumb-d2.png",
  "/img/thumb-d3.png",
  "/img/thumb-d4.png",
  "/img/thumb-d5.png",
  "/img/thumb-d6.png",
  "/img/thumb-d7.png",
  "/img/thumb-d8.png",
  "/img/thumb-d9.png",
  "/img/thumb-d10.png",
  "/img/thumb-d11.png",
  "/img/thumb-d12.png",
];
const petImgPaths = [
  "/img/thumb-p1.png",
  "/img/thumb-p2.png",
  "/img/thumb-p3.png",
  "/img/thumb-p4.png",
  "/img/thumb-p5.png",
  "/img/thumb-p6.png",
];
const xinlangHairPaths = [
  "/img/thumb-bg-hair1.png",
  "/img/thumb-bg-hair2.png",
  "/img/thumb-bg-hair3.png",
  "/img/thumb-bg-hair4.png",
  "/img/thumb-bg-hair5.png",
  "/img/thumb-bg-hair6.png",
];
const xinlangClothPaths = [
  "/img/thumb-bg-clothes1.png",
  "/img/thumb-bg-clothes2.png",
  "/img/thumb-bg-clothes3.png",
  "/img/thumb-bg-clothes4.png",
  "/img/thumb-bg-clothes5.png",
  "/img/thumb-bg-clothes6.png",
];
const xinniangHairPaths = [
  "/img/thumb-b-hair1.png",
  "/img/thumb-b-hair2.png",
  "/img/thumb-b-hair3.png",
  "/img/thumb-b-hair4.png",
  "/img/thumb-b-hair5.png",
  "/img/thumb-b-hair6.png",
];
const xinniangClothPaths = [
  "/img/thumb-b-clothes1.png",
  "/img/thumb-b-clothes2.png",
  "/img/thumb-b-clothes3.png",
  "/img/thumb-b-clothes4.png",
  "/img/thumb-b-clothes5.png",
  "/img/thumb-b-clothes6.png",
];
const sizeInfo = {
  pet1: [197, 300],
  pet2: [200, 255],
  pet3: [300, 240],
  pet4: [300, 320],
  pet5: [229, 300],
  pet6: [270, 240],
  dec1: [352, 323],
  dec2: [275, 454],
  dec3: [352, 460],
  dec4: [750, 900],
  dec5: [330, 250],
  dec6: [330, 410],
  dec7: [380, 430],
  dec8: [80, 267],
  dec9: [350, 480],
  dec10: [285, 430],
  dec11: [281, 420],
  dec12: [155, 200],
  cf1: [320, 530],
  cf2: [320, 530],
  cf3: [320, 530],
  cm1: [240, 600],
  cm2: [240, 600],
  cm3: [240, 600],
  bm1: [300, 650],
  bm2: [300, 650],
  bm3: [300, 650],
  bmm1: [240, 650],
  bmm2: [240, 650],
  bmm3: [240, 650],
};
const emit = defineEmit(["onNext", "onHaibaoSrc"]);
const state = reactive({
  tabIndex: 0,
  subTabIndex: -1,
  sequence: 0,
});

const { tabIndex, subTabIndex } = toRefs(state);

const onTabChange = (index) => {
  state.tabIndex = index;
  if (index != 1) {
    state.subTabIndex = -1;
  }
};
const onSubTabChange = (index) => {
  state.subTabIndex = index;
};
const onSubTabClick = (e, spriteName, childrenIndex) => {
  app.stage.getChildByName(spriteName).children[0].children[
    childrenIndex
  ].texture = new PIXI.Texture.from(`/img/${e.target.getAttribute("id")}.png`);
};
// 清除精灵组的选中状态
const clearSelectedSpr = () => {
  const appChildren = app.stage.children;
  const childrenLen = appChildren.length;
  for (let i = 1; i < childrenLen; i++) {
    const spr = appChildren[i];
    spr.children[1].visible = false;
    spr.children[2].visible = false;
    spr.children[3].visible = false;
  }
};

const onNext = () => {
  emit("onNext", 3);
};

/**
 * 场景布置主要功能
 * 1. 创建舞台和默认背景
 * 2. 点击页卡内容
 * 3. 添加不同的内容 背景图片+人物部分
 * 4. 拖拽缩放删除
 * 5. 生成海报
 */
const app = new PIXI.Application({
  width: 750,
  height: 1334,
  transparent: true,
});

const stage = ref(null); // 获取单个ref， 变量名为template里ref的名称，变量下的.value是dom元素

const bgSpr = new PIXI.Sprite.from("/img/bg1.jpg");
bgSpr.position.set(0, 0);
bgSpr.width = 750;
bgSpr.height = 1334;
bgSpr.name = "bg";

app.stage.addChild(bgSpr);

/**
 * 2. 点击页卡内容
 */
const onBgChange = (i) => {
  app.stage.getChildByName("bg").texture = new PIXI.Texture.from(
    `/img/bg${i}.jpg`
  );
};
const onAddPeople = (i) => {
  onSubTabChange(i);
  if (i < 2) {
    if (
      (i == 0 && !app.stage.getChildByName("xlSpr")) ||
      (i == 1 && !app.stage.getChildByName("xnSpr"))
    ) {
      addSpr(i);
    }
  }
};
const onAddOthers = (name, type) => {
  addSpr(type, name);
};

/**
 * 3. 添加不同的内容 背景图片+人物部分 到精灵组中，一组至少需要内容、边框、删除按钮三个精灵
 */
const randomPos = () => ({
  x: 750 / 2 + Math.random() * 40,
  y: 1334 / 2 + Math.random() * 40,
});
const space = 20; // 间隙
const btnSize = 50;
const addSpr = (who, name) => {
  // who 0新浪 1新娘 2其他
  const container = new PIXI.Container();
  const randomPosition = randomPos();
  container.position.set(randomPosition.x, randomPosition.y);
  // 边框、缩放、删除按钮
  const borderline = new PIXI.Graphics();
  borderline.name = "borderline";
  borderline.lineStyle(1, 0xaaaaaa);
  borderline.position.set(0, 0);

  const resizeBtn = new PIXI.Sprite.from("/img/btn-resize.png");
  resizeBtn.name = "resizeBtn";
  resizeBtn.width = btnSize;
  resizeBtn.height = btnSize;
  resizeBtn.interactive = true; // 使精灵组能够交互

  const delBtn = new PIXI.Sprite.from("/img/btn-del.png");
  delBtn.name = "delBtn";
  delBtn.width = btnSize;
  delBtn.height = btnSize;
  delBtn.interactive = true; // 使精灵组能够交互

  // 人物精灵组
  const imgContainer = new PIXI.Container();
  imgContainer.position.set(space / 2, space / 2); // 使人物精灵组和总体精灵组有10的间隙
  imgContainer.interactive = true; // 使精灵组能够交互
  // 动态设置精灵的尺寸位置，总精灵组container的宽高 = borderline宽高，精灵组锚点只能用具体值的pivot设置
  let boxSpace = [0, 0];

  // 清除选中状态
  clearSelectedSpr();

  if (who == 0) {
    // 新郎
    container.name = "xlSpr";
    const bridegroom = [340, 681]; // 图片尺寸
    boxSpace = [bridegroom[0] + space, bridegroom[1] + space];

    imgContainer.name = "xinlang";
    // 依次添加身体脸部头发
    const xlBody = new PIXI.Sprite.from("/img/bg-clothes1.png");
    xlBody.position.set(0, 148);
    const xlFace = new PIXI.Sprite.from("/img/bridegroom-face.png");
    xlFace.height = 140;
    xlFace.width = 110;
    xlFace.position.set(146, 30);
    const xlHair = new PIXI.Sprite.from("/img/bg-hair1.png");
    xlHair.position.set(137, 0);

    imgContainer.addChild(xlBody);
    imgContainer.addChild(xlFace);
    imgContainer.addChild(xlHair);
  } else if (who == 1) {
    // 新娘
    container.name = "xnSpr";
    const bride = [460, 806];
    boxSpace = [bride[0] + space, bride[1] + space];
    imgContainer.name = "xinniang";
    // 依次添加身体脸部头发
    const xnBody = new PIXI.Sprite.from("/img/b-clothes1.png");
    xnBody.position.set(0, 200);
    const xnFace = new PIXI.Sprite.from("/img/bride-face.png");
    // xnFace.height = 140;
    // xnFace.width = 120;
    xnFace.position.set(140, 60);
    const xnHair = new PIXI.Sprite.from("/img/b-hair1.png");
    xnHair.position.set(60, 0);

    imgContainer.addChild(xnBody);
    imgContainer.addChild(xnFace);
    imgContainer.addChild(xnHair);
  } else {
    container.name = `sprite${state.sequence}`;
    state.sequence++;
    boxSpace = [sizeInfo[name][0] + space, sizeInfo[name][1] + space];
    imgContainer.name = name;
    const content = new PIXI.Sprite.from(`/img/${name}.png`);
    imgContainer.addChild(content);
    // 添加完成关闭右侧菜单
    state.subTabIndex = -1;
  }

  borderline.width = container.width = boxSpace[0];
  borderline.height = container.height = boxSpace[1];

  container.pivot.set(boxSpace[0] / 2, boxSpace[1] / 2);
  borderline.drawRoundedRect(0, 0, boxSpace[0], boxSpace[1]);

  resizeBtn.position.set(boxSpace[0] - btnSize / 2, -btnSize / 2);
  delBtn.position.set(-btnSize / 2, boxSpace[1] - btnSize / 2);

  // 依次添加元素到精灵组
  container.addChild(imgContainer);
  container.addChild(borderline);
  container.addChild(resizeBtn);
  container.addChild(delBtn);

  // 绑定事件
  imgContainer
    .on("touchstart", dragTouchStart)
    .on("touchmove", dragTouchMove)
    .on("touchend", clearTouchEnd);
  resizeBtn
    .on("touchstart", resizeTouchStart)
    .on("touchmove", resizeTouchMove)
    .on("touchend", clearTouchEnd);
  delBtn.on("touchend", delSpr);

  app.stage.addChild(container);
};

/**
 * 4. 拖拽 5. 缩放 6. 删除
 */
let startPos = { x: 0, y: 0 };
let sprPos = { x: 0, y: 0 };
let flag = true; // 是否可以执行拖拽
let sprName = ""; // 执行拖拽的精灵组别名
const dragTouchStart = (e) => {
  clearSelectedSpr();
  // 当前选中状态
  const spr = e.currentTarget;
  spr.parent.children[1].visible = true;
  spr.parent.children[2].visible = true;
  spr.parent.children[3].visible = true;

  // 调整选中精灵的层级
  app.stage.setChildIndex(spr.parent, app.stage.children.length - 1);

  if (flag && spr.name != "resizeBtn" && spr.name != "delBtn") {
    flag = false;
    startPos = { x: e.data.global.x, y: e.data.global.y };
    sprPos = {
      x: spr.parent.getGlobalPosition().x,
      y: spr.parent.getGlobalPosition().y,
    };
    sprName = spr.parent.name;

    // 新郎新娘显示右侧菜单
    if (sprName == "xlSpr") {
      state.subTabIndex = 0;
    } else if (sprName == "xnSpr") {
      state.subTabIndex = 1;
    } else {
      state.subTabIndex = -1;
    }
  }
};
const dragTouchMove = (e) => {
  const spr = e.currentTarget;
  if (
    spr.name != "resizeBtn" &&
    spr.name != "delBtn" &&
    spr.parent.name == sprName
  ) {
    let tempPos = {
      x: e.data.global.x,
      y: e.data.global.y,
    };
    spr.parent.position.set(
      sprPos.x + (tempPos.x - startPos.x),
      sprPos.y + (tempPos.y - startPos.y)
    );
  }
};
const clearTouchEnd = () => {
  flag = true;
  app.stage.getChildByName("bg").interactive = false;
  app.stage.getChildByName("bg").off("touchmove");
  resizeSprName = "";
  sprName = "";
};
let resizeStartPosX = 0;
let resizeSprName = "";
const resizeTouchStart = (e) => {
  const currentSpr = e.currentTarget;
  if (flag) {
    resizeStartPosX = e.data.global.x;
    resizeSprName = currentSpr.parent.name;

    app.stage.getChildByName("bg").interactive = true;
    app.stage
      .getChildByName("bg")
      .on("touchmove", resizeTouchMove)
      .on("touchend", clearTouchEnd);
  }
};
const resizeTouchMove = (e) => {
  const currentSpr = e.currentTarget;
  if (currentSpr.name == "bg") {
    let tempPosX = e.data.global.x;
    let duration = tempPosX - resizeStartPosX;
    resizeStartPosX = tempPosX;

    const moveSpr = app.stage.getChildByName(resizeSprName);

    if (duration > 0) {
      // 放大, 放大极限1.5倍
      if (moveSpr.scale.x < 1.5) {
        let newScale = moveSpr.scale.x + 0.01;
        moveSpr.scale.set(newScale, newScale);
      }
    }
    if (duration < 0) {
      // 缩小
      if (moveSpr.scale.x > 0.4) {
        let newScale = moveSpr.scale.x - 0.01;
        moveSpr.scale.set(newScale, newScale);
      }
    }
  }
};
const delSpr = (e) => {
  app.stage.removeChild(e.currentTarget.parent);
};

/**
 * 5. 生成海报
 */
const onHaibao = () => {
  // 清除选中
  clearSelectedSpr();
  // 手机性能影响可能需要延时

  setTimeout(() => {
    // const tupic = app.renderer.plugins.extract.base64(app.stage); 会渲染超出舞台的部分,改用下面的方式
    app.render();
    const tupic = app.view.toDataURL("image/png");

    const app2 = new PIXI.Application({
      width: 750,
      height: 1579, // 1334 + 底部文案
      transparent: true, // IOS下必须加
    });
    stage.value.appendChild(app2.view);
    const picB64 = new PIXI.Sprite.from(tupic);
    picB64.width = 750;
    picB64.height = 1334;
    picB64.position.set(0, 0);
    app2.stage.addChild(picB64);
    const banner = new PIXI.Sprite.from("/img/fn-desc.png");
    banner.width = 750;
    banner.height = 245;
    banner.position.set(0, 1334);
    app2.stage.addChild(banner);

    const txt = [
      "我怎么这么好看。",
      "新郎气质跟红毯不搭，帮我换一个吧",
      "确认过眼神，遇见对的人",
      "场景可以随便，婚礼不能随便",
    ];
    const word = txt[Math.floor(txt.length * Math.random())];
    const wordStyle = {
      fontSize: "22px",
      fill: "#5e7091",
    };
    const wordSpr = new PIXI.Text(word, wordStyle);
    wordSpr.position.set(48, 1334 + 139);
    app2.stage.addChild(wordSpr);

    setTimeout(() => {
      const tupic2 = app2.renderer.plugins.extract.base64(app2.stage);
      emit("onHaibaoSrc", tupic2);
      onNext();
    }, 200);
  }, 200);
};

// 获取一组ref, 需要创建一个数组储存ref
const xinlangRefs = ref([]);
const xinlangRef = (el) => xinlangRefs.value.push(el);

nextTick(() => {
  console.dir(xinlangRefs); // console.dir()显示一个对象所有的属性和方法
});

onMounted(() => {
  console.dir(stage);
  stage.value.appendChild(app.view);
});
</script>
<style lang="less">
#stage canvas {
  width: 100%;
}
</style>

<style scoped lang="less">
.bzcj {
  .stage {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
  .cardContent {
    width: 100vw;
    height: 13.875rem /* 222/16 */;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #f6f6f6;

    .tabs {
      height: 2.5625rem /* 41/16 */;
      background-color: #ffffff;
      display: grid;
      grid-template-columns: repeat(5, 20%);
      align-items: center;

      .tab {
        width: 20vw;
        height: 2.5625rem /* 41/16 */;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 80%;
        }
      }

      .xs img {
        height: 50%;
      }
    }

    .selected {
      background-color: #f6f6f6;
    }

    .tabCont {
      width: 100vw;
      height: 11rem /* 88/16 */;
      position: absolute;
      top: 2.875rem /* 46/16 */;

      .tCont {
        width: 100vw;
        height: 11rem /* 88/16 */;
        overflow-y: auto;
        position: absolute;
        top: 0;
        left: 0;
      }
      li {
        padding: 10px 0;
        text-align: center;
        width: 30%;
        display: inline-block;
      }
      img {
        width: 90%;
      }
    }
  }
  .saveBtn {
    position: absolute;
    bottom: 14.8125rem /* 237/16 */;
    right: 0.9375rem /* 15/16 */;
    background-image: url("/img/btn-generate.png");
    background-size: cover;
    width: 2.5rem /* 80/16 */;
    height: 2.5rem;
  }

  .subtab {
    position: absolute;
    top: 10vh;
    right: 5vw;
    .singleline {
      width: 60px;
    }
    .dobuleline {
      width: 120px;
    }
    li {
      width: 40px;
      height: 40px;
      margin: 10px;
      float: left;
      img {
        width: 100%;
      }
    }
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
