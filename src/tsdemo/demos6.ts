// 不知道类型是什么的时候，使用泛型
interface LengthWise {
    length: number
}

function identity<T extends LengthWise> (arg: T): T {
    return arg
}

const result = identity<string>('呵呵')

console.log(result)

class GenericNumber<T> {
    zeroValue: T | undefined
    add: ((x: T, y: T) => T) | undefined

}

const myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 1
myGenericNumber.add = function (x, y) {
    return x + y
}
console.log(myGenericNumber.add(20, 30))

// 函数重载
function getData<T> (value: T): T {
    return value
}

getData<number>(123)
getData<string>('666')

// 泛型接口
interface ConfigFn {
    <T> (value: T): void

}

const getData2: ConfigFn = function <T> (value: T): void {
    console.log(value)
}
getData2<number>(123)
getData2<string>('666')

// 动态泛型
interface Bookmark {
    label: string
}
class BookmarkService<T extends Bookmark> {
    items: T[] = []
}
class BookmarkService2<T extends Bookmark = Bookmark> {
    items: T[] = []
}
const b1 = new BookmarkService()
b1.items = [{
    label: 'hehe'
}]

// readonly对泛型的使用
let err1: readonly Set<number>
let err2: readonly Array<number>

let ok1: readonly number[]
let ok2: readonly [string, number]