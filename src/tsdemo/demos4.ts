// 抽象类, 可以定义抽象方法，抽象方法必须被继承类重新实现
// 方法修饰符有3种
// public   共有的
// private 私有的 不能在类的外部使用
// protected 保护的 子类可以使用
abstract class Animal {
    abstract makeSound (): void
    public move (): void {
        console.log('onMove')
    }
    private eat () {
        console.log('onEat')
    }
}
// 类可以是实体类，也可以是抽象类
class Dog extends Animal {
    #region: string
    constructor() {
        super()
        this.#region = 'private'
    }
    makeSound () {
        console.log('wang')
    }
}

const dog: Dog = new Dog()
dog.move()
dog.makeSound()

const dog2: Animal = new Dog()
const animals: Animal[] = [dog, dog2]
// dog2.eat()