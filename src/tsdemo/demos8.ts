// 装饰器
import 'reflect-metadata'

function inject (serviceIdentifier: string) {
    return function (target: Object, targetKey: string, index: number) {
        Reflect.defineMetadata(serviceIdentifier, '666', target)
    }
}
class IndexController {
    public indexService: string
    constructor(@inject('xxx') indexService: string) {
        this.indexService = indexService
    }
}

const indexController = new IndexController('老王')
console.log('苹果', indexController.indexService)

// JavaScript元编程
console.log('橘子', Reflect.getMetadata('xxx', IndexController))
