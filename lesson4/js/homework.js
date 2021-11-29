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
//
function sortTheArray(someArray){
    let newArray = someArray.sort()
    console.log(newArray)
    let sortedArray = newArray.sort((a, b) => a-b)
    console.log(sortedArray)
}
sortTheArray(["b", 6, "a", "q", 7, 2, 15, 25, 'Oleg', 'Petro'])
