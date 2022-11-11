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

const name = new Promise((function (resolve, reject) {
    reject('Good Bye')
})).catch((reason) => console.log(reason))
