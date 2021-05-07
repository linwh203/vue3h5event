/**
 * 并查集模板
 * 连通性问题
*/
class UnionSet {
    constructor(n) {
        let fa = new Array(n + 1)
        for (let i = 0; i <= n; i++) {
            fa[i] = i
        }
        this.fa = fa
    }
    // 返回当前点所在集合根节点的编号
    get (x) {
        return this.fa[x] = (this.fa[x] == x ? x : this.get(this.fa[x]))
    }
    // 合并集合
    merge (a, b) {
        this.fa[this.get(a)] = this.get(b)
    }
}

export default UnionSet