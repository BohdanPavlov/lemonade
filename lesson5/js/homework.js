// ----------ДЗ ПО МАССИВАМ--------------------------

// Задание 1
// Написать функцию которая первым принимает значение, которым заполнять массив,
// а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5)
// сделает массив ['x', 'x', 'x', 'x', 'x'].
// function arrayFill(value, length){
//     let arr = []
//     for (let i = 0; i < length; i++){
//         arr.push(value)
//     }
//     return arr
// }

// console.log(arrayFill('x', 5))
// Задание 2
// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
// let sum = 0
//
// function getSumOfAllElements(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             getSumOfAllElements(arr[i])
//         }
//         else{
//             sum += arr[i]
//         }
//     }
//     return sum
// }
//
// console.log(getSumOfAllElements(arr))

// Задание 3
// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
// что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// function isNumberInRange (number){
//     if (number !== 0 && number < 10){
//         return true;
//     }
//     return false;
// }
//
// console.log(isNumberInRange(7))

// Задание 4
// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет:
// четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
//
// function isEven(number){
//     if (number%2){
//         return false;
//     }
//     return true;
// }
//
// console.log(isEven(21))

// Задание 5
// Дан массив с целыми числами. Создайте из него новый массив,
// где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let evenArray = []
//
// console.log(getEvenArray())
//
// function getEvenArray(){
//     for (let i = 0; i < arr.length; i++){
//         if (isEven(arr[i]) === true){
//             evenArray.push(arr[i])
//         }
//     }
//     return evenArray
// }
//
// function isEven(number){
//     if (number%2){
//         return false;
//     }
//     return true;
// }
// Задание 6
// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей
// (чисел, на которое делится данное число).

// function getDivisors (number) {
//     let array = []
//     for (let i = 1; i <= number; i++){
//         if (!(number%i)){
//             array.push(i)
//         }
//     }
//     return array
// }
//
// console.log(getDivisors(15))

// Задание 7
// Создайте функцию, которая получает два параметра – число и степень числа.
// Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.

// function  someFunction(number, power){
//     return number ** power
// }
//
// console.log(someFunction(2,4))

// Задание 8
// Функция принимает параметр - возраст пользователя. Если число больше 16 – то выводим «добро пожаловать»,
// если меньше – “вы еще молоды”.

// let age = +prompt('Input your age')
// function confirmAccess(age){
//     if (age > 16){
//         alert('Добро пожаловать!')
//     } else {
//         alert('Вы еще молоды!')
//     }
// }
// confirmAccess(age)
//
// Задание 9
// Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
// В таком случае выведите сообщение – “Введите возраст”. Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.

// let age = prompt('Input your age', 16)
// function confirmAccess(age){
//     if (age === undefined || age === null){
//         alert('Введите возраст!')
//     } else if (age <= 16){
//         alert('Вы еще молоды!')
//     } else {
//         alert('Добро пожаловать!')
//     }
// }
// confirmAccess(age)

// Задание 10
// Создайте функцию, которая считает длину массива и возвращает ее в виде числа. Массив в функцию передается как аргумент.
// Если аргумент не задан – выводится сообщение об ошибке.

// let array = [1, 2, 3]
// let arrayLength = 0
// function getArrayLength(array){
//     if (array === null || array === undefined){
//         alert('ERROR!!!')
//     }
//     for (let i = 0; i < array.length; i++){
//         arrayLength++
//     }
//     return arrayLength
// }
//
// console.log(getArrayLength(array))

// Задание 11
// Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа, если меньше 7 – пишет, что число меньше 7.
// Если 8, 9 – то возвращает соответственно 7 или 8. Реализуйте решение с несколькими return.

// let number = +prompt('Input any number')
// function getNumber(number){
//     if (number > 10){
//         return number**2
//     } else if (number < 7){
//         alert('Число меньше 7!')
//     } else {
//         return number - 1
//     }
//     return number
// }
//
// console.log(getNumber(number))

// Задание 12
// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst,
// которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

// function ucfirst(str){
//     const words = str.split(" ");
//
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     const upperCase = words.join(' ')
//     return upperCase
// }
//
// console.log(ucfirst('hello my name is bohdan'))

// Задание 13
// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

// function getNewString(str){
//     const words = str.split('_')
//     for (let i = 1; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     const newString = words.join('')
//     return newString
// }
//
// console.log(getNewString('var_text_hello'))

// Задание 14
// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
// Функция должна возвращать true или false. Показать решение.

// function inArray(text, array){
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === text){
//             return true
//         }
//     }
//     return false
// }
//
// console.log(inArray('privet', ['privet', 'kak', 'u', 'tebya', 'dela']))

// Задание 15
// Дана строка, например, '123456'. Сделайте из нее '214365'.
//
// let str = '123456';
// function getNewString(string){
//     let arr = string.split('')
//     let newArr = []
//     let newStr = ''
//     for (let i = 0; i < arr.length; i++){
//         newArr.push(arr[1], arr[0], arr[3], arr[2], arr[5], arr[4])
//         newStr = newArr.join('')
//         return newStr
//     }
// }
//
// console.log(getNewString(str))

// ----------------ДЗ ПО ЦИКЛАМ---------------
// Задание 1
// Вывести числа от 4 до 400 на экран.

// for (let i = 4; i <= 400; i++){
//     console.log(i)
// }

// Задание 2
// Вывести числа в последовательности: 4 7 10 13 с помощью цикла.

// for (let i = 4; i < 15; i+=3){
//     console.log(i)
// }

// Задание 3
// Вывести числа 654 653 652 до нуля.

// for (let i = 654; i >= 0; i--){
//     console.log(i)
// }

// Задание 4
// Вывести все годы с 1983 до 2017.

// for (let i = 1983; i < 2017; i++){
//     console.log(i)
// }

// Задание 5
// Вывести числа -4 -2 0 2 4 6 ... 100.

// for (let i = -4; i <= 100; i += 2){
//     console.log(i)
// }

// Задание 6
// С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.

// for (let i = 1; i < 10; i++){
//     console.log(`${i} * 7 = ${i * 7}`)
// }

// Задание 7
// Выведите с помощью цикла коды спецсимволов от 1000 до 2000.

// let symbols = ''
// for (let i = 1000; i <= 2000; i++){
//     symbols +='&#'+i+';'+' ';
// }
// document.querySelector('#out').innerHTML=symbols;

// Задание 8
// Найти сумму чисел от 0 до 100 включительно.

// let sum = 0
// for (let i = 0; i <= 100; i++){
//     sum = sum + i
// }
// console.log(sum)

// Задание 9
// С помощью цикла вивысти произведение чисел от 1 до 50.

// let res = 1
// for (let i = 1; i <= 50; i++){
//     res = res * i
// }
// console.log(res)

// Задание 10
// Заполните массив следующим образом: в первый елемент запишите 'x', во второй 'хх', в третий 'ххх' и так далее.
// Длину массива вводить через prompt.

// let arr = []
// let value = 'x'
// let arrayLength = +prompt('Array Length')
// for (let i = 0; i < arrayLength; i++){
//     arr.push(value)
//     value += 'x'
// }
// console.log(arr)

// Задание 11
// Заполните массив следующим образом: в первый елемент запишите '1', во второй '22', в третий '333' и так далее.
// Длину массива вводить через prompt.

// let arr = []
// let arrayLength = +prompt('Array Length')
// for (let i = 1; i < arrayLength + 1; i++){
//     let str = ''
//     for (let j = 0; j < i; j++){
//         str += i
//         console.log(str)
//     }
//     arr.push(str)
// }
// console.log(arr)

// Задание 12
// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// let arr = [1, 3, 5, 2, 2, 2, 7, 8, 9, 10]
// let sum = 0
// for (let i = 0; i < arr.length; i++){
//     sum += arr[i]
//     if (sum > 10){
//         console.log(i + 1)
//         break
//     }
//
// }

// Задание 13
// Дан массив с числами. Не используя метода reverse переверните его в обратном порядкe.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newArr = []
// for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i])
// }
// console.log(newArr)

//--------------ДЗ МАССИВЫ И РЕКУРСИЯ--------------------

// 1. Задача (Рекурсия)
// Дано натуральное число n. Выведите все числа от 1 до n.

// let num = 0
// function rowOfNumbers(n){
//     num++
//     console.log(num)
//     if (num >= n) return;
//     rowOfNumbers(n)
// }
// rowOfNumbers(15)

// 2. Задача (Рекурсия)
// Даны два целых числа A и В (каждое в отдельной строке). Выведите все числа
// от A до B включительно, в порядке возрастания, если A < B, или в порядке
// убывания в противном случае.

// let a = 9
// let b = 3
// function showRowOfNumbers(){
//     if (a <= b){
//         console.log(a)
//         a++
//         if (a > b) return;
//         showRowOfNumbers()
//     } else if( a >= b){
//         console.log(a)
//         a--
//         if (a < b) return;
//         showRowOfNumbers()
//     }
// }
// showRowOfNumbers()

// 3. Задача (Рекурсия)
// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки, списки, массивы (ну и
// циклы, разумеется).

// function calcSumOfNumber(n){
//     if (n < 10){
//         return n
//     }else {
//         let sum = n % 10 + calcSumOfNumber(n / 10)
//         return (Math.trunc(sum))
//     }
// }
//
// console.log(calcSumOfNumber(99))

// 6. Задача (функции работы с массивами)
// Даны два массива: ['a', 'b', 'c']и [1, 2, 3]. Объедините их вместе.

// let array1 = ['a', 'b', 'c']
// let array2 = [1, 2, 3]
// let array3 = array1.concat(array2)
// console.log(array3)

// or

// let concatenatedArray = [...array1, ...array2]
// console.log(concatenatedArray)

// 7. Задача (функции работы с массивами)
// Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// let arr = ['a', 'b', 'c']
// arr.push(1, 2, 3)
// console.log(arr)

//or

// arr.splice(3,0, 1, 2, 3)
// console.log(arr)

// 8. Задача (функции работы с массивами)
// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6

// let arr = [1, 2, 3]
// arr.unshift(4, 5, 6)
// console.log(arr)

// or

// arr.splice(0, 0, 4, 5, 6)
// console.log(arr)

// 9. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.slice(0,3)
// console.log(newArr)

// 10. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.slice(3,5)
// console.log(newArr)

// 11. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let arr = [1, 2, 3, 4, 5]
// arr.splice(1,2)
// console.log(arr)

// 12. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.splice(1,3)
// console.log(newArr)

// 13. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]

// let arr = [1, 2, 3, 4, 5]
// arr.splice(3, 0, 'a', 'b', 'c')
// console.log(arr)

// 14. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 0,'a', 'b')
// arr.splice(6, 0, 'c')
// arr.splice(8,0, 'e')
// console.log(arr)



