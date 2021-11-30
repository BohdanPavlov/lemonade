//1
//найти суму квадратов всех значений масива (reduce)
let arr = [1,33,456,986,122]
let reduceArr = arr.reduce(function (previousValue,item){
    return item**2 + previousValue;
},0);
console.log(reduceArr)
//2
//получить массив вида: [ 'My name is Tanita','My name is Vasyl', и тд... ] использовать map
let arr2 = [ 'Tanita', 'Vasyl', 'George', 'Stepan']
let myName = arr2.map(item => `My name is ${item}`)
console.log(myName)
//3
//написать функцию которая будет принимать входным параметром массив
//и переставит в нем елементы так что в начале массива будут только цифры а в конце только строки
// let arr =[2, 6, 7, "a", "b", "q"]
const array = ['b', 6, 'a', 'q', 7, 2]

function sortTheArray(array) {
    if (array.length <= 2){
        return array
    }
    let index = 2
    const currentItem = array[index]

    const more = []
    const less = []

    for (let i = 0; i < array.length; i++){
        if (i === index){
            continue
        }

        if (array[i] > currentItem){
            more.push(array[i])
        }

        else {
            less.push(array[i])
        }
    }
    return [
        ...sortTheArray(less),
        currentItem,
        ...sortTheArray(more)
    ]
}

console.log(sortTheArray(array))

