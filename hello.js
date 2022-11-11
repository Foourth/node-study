function sum(a, b, c) {
    setTimeout(() => {
        c(a + b)
    }, 5000)
}
const result = sum(1,2,(result) => {
    sum(result, 5, (result) => {
        console.log(result)
    })
})
console.log("hello");
console.log("world");
