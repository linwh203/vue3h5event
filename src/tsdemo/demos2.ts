// 元组与数组

// 已有数组
let arr: any[]
let arr2: Array<number> = new Array
let arr3 = new Array<number>(4)

interface NumberArray {
    [index: number]: number
}

let arr4: NumberArray = [1, 2, 3, 4]

// 类数组
function sum () {
    let args: IArguments = arguments
    args.callee()
}

// 元组
let tuple1: [number, string] = [1, 'hehe']

// 区别
function useFetch () {
    const res = 'jack'
    const age: number = 30
    // return [res, age]
    return tuplify(res, age)
}
function tuplify<T extends unknown[]> (...elements: T): T {
    return elements
}
const [res] = useFetch()

console.log(res)
