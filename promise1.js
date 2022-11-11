async function sum(a, b) {
    return a + b;
}
sum(1, 2).then(res => console.log(res))


async function ten() {
    return 10
}
let a = ten()
console.log(a)
