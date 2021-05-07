// 不要混淆es6和ts中的箭头

let myNum: (x: number, y: number) => number              // ts的箭头用来描述函数，箭头描述返回值类型
    = function (x: number, y: number): number {
        return x + y
    }


// 函数默认参数
function buildName (firstname: string, lastname: string = 'Cat') {
    return firstname + lastname
}

// 剩余参数要放参数的后面位置
function push (array: any[], ...items: any[]) {
    items.forEach(item => array.push(item))
}

let a = ['what']
push(a, 1, 2, 3, 4)

console.log('a: ', a)

// 可选参数要放参数的后面位置
function buildName2 (firstname: string, lastname?: string) {
    // return firstname + lastname
}