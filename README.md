### font change in vscode

1. install Victor Mono font [https://rubjo.github.io/victor-mono/]

2. switch font in vscode

3. add these in settings.json

   config guide : [https://macromates.com/manual/en/language_grammars]

```javascript
    "editor.fontFamily": "Victor Mono, Fira Code, Consolas, 'Courier New', monospace",
    "terminal.integrated.fontFamily": "monospace",
    "editor.fontLigatures": true,
    "editor.tokenColorCustomizations": {
        "textMateRules": [
            {
                "scope": [
                    //following will be in italic (=FlottFlott)
                    "comment",
                    "entity.name.type.class", //class names
                    "entity.other.attribute-name", //class names
                    "keyword", //import, export, return…
                    "constant", //String, Number, Boolean…, this, super
                    "storage.modifier", //static keyword
                    "storage.type.class.js", //class keyword
                    "variable.parameter"
                ],
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": [
                    //following will be excluded from italics (VSCode has some defaults for italics)
                    "invalid",
                    "keyword.operator",
                    "constant.numeric.css",
                    "keyword.other.unit.px.css",
                    "constant.numeric.decimal.js",
                    "constant.numeric.json"
                ],
                "settings": {
                    "fontStyle": "bold"
                }
            }
        ]
    },
    "editor.fontSize": 15
```

4.  btw, md guide [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet]

### deploy site: netlify

[https://app.netlify.com/teams/linwh203/builds/60864789cd53b3248fa40d6b]

## 瀑布流插件[https://github.com/desandro/masonry]

### DPI(device pixels)：设备像素、物理像素

- 用来描述设备显示的最小单位(相当于显示器上一个点)
- 通常说的屏幕分辨率 1920\*1080 表示的就是设备像素单位。
- UI 设计稿通常以设备像素为标准设计（比如 iPhone6 的 UI 稿尺寸是 750\*1334px）
- 网页 CSS 中的 px 并非设备像素，而是逻辑像素

#### density-independent pixel: 设备独立像素、密度无关像素、逻辑像素

- 相当于是计算机坐标系统中得一个点，这个点代表一个可以由程序使用的虚拟像素(比如 css 像素 )
- 1 个 CSS 像素在不同设备上可能对应不同的物理像素数，这个比值是设备的属性（Device Pixel Ratio，设备像素比）来决定的。
- 在 CSS 规范中，长度单位分为绝对单位和相对单位。
- px 是相对单位 ，相对的是设备像素。比如 iPhone6 的屏幕，用 2x2 的 Device Pixel 代表 1x1 的 CSS Pixel，所以设备像素数为 750*1334px，而 CSS 逻辑像素数为 375*667px

### DPR(device pixel ratio): 设备像素比

- Wiki 的定义: Device pixel ratio, the ratio between physical pixels and logical pixels used by cascading style sheets (CSS): other names for it are “CSS Pixel Ratio” and “dppx”

- DPR 表示 1 个 CSS 像素（在某一方向上，x 方向或者 y 方向）等于几个设备像素。
- DPR = 物理像素数 / 逻辑像素数
- iPhone6 的 DPR 为 2 ，x 轴物理像素 750,则它的逻辑像素为 375
- DPR 不是单位，而是一个属性名，在浏览器中通过 window.devicePixelRatio 获取屏幕的 DPR

### REM

- rem 单位的意思是“根元素的字体大小”,在 CSS 中更改<html>字体大小，所有其他相关内容都会发生更改，包括 rem 大小的文本。[https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units]

#### 为什么 UI 稿需要按照设备像素尺寸来画

- 在移动端中会使用 rem 方案来做适配，实现同一份代码在不同的设备上展示的效果都是近似的。
- rem 相当于是做了设备像素和 CSS 像素之间的转换
- 由于工程化开发中(webpack)能够使用 rem 转换插件来实现 px -> rem 的自动转换，因此 UI 稿只需要按照设备像素尺寸来画，CSS 中也按照 UI 稿的尺寸来写 px，webpack 会在编译过程中将 px 单位自动转为 rem 来渲染页面。
- 如果 UI 稿给的是 CSS 单位尺寸，就要不使用 rem，而是直接用 px 单位照着 UI 稿写，那么写出来的页面会完美匹配 UI 稿尺寸下的情况，但其他尺寸的设备就不合适了。在 rem 诞生之前，会有一个页面几套尺寸的 UI 稿，相对的也要开发几套尺寸的 CSS 来使页面适配
- 插件转换原理：改变 html 根元素的 fontSize

```javascript
function changeRootFont() {
  var designWidth = 750,
    rem2px = 100;
  document.documentElement.style.fontsize =
    (window.innerWidth / designWidth) * rem2px + "px"; //iphone6: (375 / 750) * 100 + 'px';
}
changeRootFont();
window.addEventListener("resize", changeRootFont, false);
```
