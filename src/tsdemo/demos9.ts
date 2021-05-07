/**
 * DOM类型
*/
interface HTMLElementTagNameMap {
    a: HTMLAnchorElement
    abbr: HTMLElement
    address: HTMLElement
    applet: HTMLAppletElement
    area: HTMLAreaElement
    input: HTMLInputElement
}
// 泛型定义
const textEl = document.querySelector<HTMLInputElement>('input')
if (textEl !== null) {
    textEl.addEventListener('click', (e: MouseEvent) => {
        console.log(e.clientX)
    })
    console.log(textEl.value)
}

// as定义
const textEl1 = document.querySelector('input') as HTMLInputElement
const textEl2 = document.querySelector('input')

console.log(textEl2!.value); // !. 强制定义textEl2有value








