//1
//let arr = [1,33,456,986,122]
//найти суму квадратов всех значений масива (reduce)

// let arr = [1,33,456,986,122]
// let sum = 0
// let newArr = arr.reduce((previousValue,item) => {
//     sum += item**2
//     return sum
// },0)
// console.log(newArr)

//2
//let arr = [ 'Tanita', 'Vasyl', 'George', 'Stepan']
//получить массив вида: [ 'My name is Tanita','My name is Vasyl', и тд... ] использовать map

// let arr = [ 'Tanita', 'Vasyl', 'George', 'Stepan']
// let newArr = arr.map((item) => `My name is ${item}`)
// console.log(newArr)

//3
//написать функцию которая будет принимать входным параметром массив
//и переставит в нем елементы так что в начале массива будут только цифры а в конце только строки
//

// function sortTheArray(arr){
//     if (arr.length <= 2){
//         return arr
//     }
//     const index = 2
//     const currentItem = arr[index]
//
//     const more = []
//     const less = []
//
//     for (let i = 0; i < arr.length; i++){
//         if (i === index){
//             continue
//         }
//         if (arr[i] > currentItem){
//             more.push(arr[i])
//         } else {
//             less.push(arr[i])
//         }
//     }
//     return [
//         ...sortTheArray(less),
//         currentItem,
//         ...sortTheArray(more)
//     ]
// }
//
// console.log(sortTheArray(["b", 6, "a", "q", 7, 2]))
