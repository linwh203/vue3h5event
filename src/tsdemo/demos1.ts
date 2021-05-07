/**
 * ES6基础类型
 * Boolean Number String Array Function Object Symbol undefined null
 * 
 * TS基础类型 用小写，大写表示ES类型
 * Void Never Any 元组 枚举 高级类型
 * 
 * 有固定值的时候能够反向推断类型，可以不写类型
 * */

let isDone: boolean = false;
let num: number
let hex: number = 0b000001

function alertName (name: string): void {
    alert(name)
}

let unusable: void = undefined

// 类型推断
function getString (something: string | number | void): string {
    return something ? something.toString() : ''
}

enum Days {
    Sun,
    Sat,
    Mon = 'Monday',
}

console.log('熊', Days['Mon'], Days['Sat'])

// type & interface
interface Person {
    readonly gender: string
    age: number,
    name?: string,
    [propName: string]: any
}

const me: Person = {
    age: 18,
    gender: 'male'
}

