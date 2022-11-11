const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('3s...')
    }, 3000)
}).then(promise => {
    console.log('进入 then')
}).catch(() => {
    console.log('进入 catch')
}).finally(() => {
    console.log('故事的尾声')
})
console.log('Hello World')


function sum(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}
sum(100, 100).then(result => {
    return sum(result, 100)
}).then(result => {
    return sum(result, 100)
}).then(result => {
    console.log(result)
})
