// 实现接口
interface IPrice {
    id: number,
    m: string
}
type IPriceArray = IPrice[]

function getPrice () {
    return new Promise<IPriceArray>((resolve, reject) => {
        fetch('url').then(function (response) {
            return response.json()
        }).then(function (myJson) {
            const data: IPriceArray = []
            resolve(data)
        })
    })
}

getPrice().then((data) => {
    console.log(data[0].id)
})

/**
 * interface和type的区别：
 * 1. 相同点
 * 1-1 都可以描述一个对象或者函数
 * 1-2 都可以进行扩展
 *
 * 2. 不同点
 * 2-1 type可以声明基本类型别名、联合类型、元组等
 * 2-2 typeof 获取实例的对象
 * 2-3 interface可以被合并
 * 
 * 3. 通常用法
 * 3-1 后台接口多用interface
 * 3-2 第三方SDK 比如Vue多用interface
 * 3-3 前端库多用interface
 * 3-4 正常的开发任务多用type会更直接更方便
 * */

// 先定义interface，后实现
interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface1
}

interface ClockInterface1 {
    tick1 (): void
}
interface ClockInterface2 {
    tick2 (): void
}

// 使用implements可以实现多个interface
class DigitalClock implements ClockInterface1, ClockInterface2 {
    public tick1 (): void {
        console.log(1);
    }
    tick2 (): void {
        console.log(2);
    }
}

function createClock (constructor: ClockConstructor, hour: number, minute: number): ClockInterface1 {
    return new constructor(hour, minute)
}

const digital = createClock(DigitalClock, 12, 17)

digital.tick1









