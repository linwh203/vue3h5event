// function getLen(str: string | number):number {
//     return str.length
// }
// 联合属性的写法会报错，需要类型断言
function getLen (str: string | number): number {
    // <string>str 或者 str as string 来断言str类型
    return (<string>str).length | str.toString().length
}

type Name = string
type NameResolve = () => string
type NameOrResolve = Name | NameResolve

function getName (n: NameOrResolve): Name {
    if (typeof n === 'string') {
        return n
    }
}

const len1: number = getLen('ssss')
const len2 = getLen(7)

console.log(len1, len2)


interface A {

}

function helper (options: A): A {
    return options
}