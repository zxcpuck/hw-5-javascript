//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let ploscha = (a,b) => a * b;
// document.write(ploscha(5, 7));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let SCircle = (r) => r*r*2;
// document.write(SCircle(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let SCilindra = (r,h) => 2*r*h;
// document.write(SCilindra(4,8))

// - створити функцію яка приймає масив та виводить кожен його елемент
// let Array = (arr) => {
//     for (const element of arr) {
//         document.write(element)
//     }
// }
// Array([1,2,3,4,5])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let PWithTxt = (txt) => {
//     document.write(`<p>${txt}</p>`)
// }
// PWithTxt('hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let TWithTxt = (txt) => {
//     document.write(`<ul><li>${txt}</li><li>${txt}</li></ul>`)
// }
// TWithTxt('hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let TableWithTxt2 = (txt,number) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write(`</ul>`)
// }
// TableWithTxt2('hello',3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let PrimitiveElement = (arr) => {
//     document.write(`<ul>`)
//     for (const element of arr) {
//         document.write(`<li>${element}</li>`)
//     }
//     document.write(`</ul>`)
// }
// PrimitiveElement([1,2,3,'hello','hi',true,false])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let ObjArray = (arr) => {
//     for (let element of arr) {
//         document.write(`<div><p>${element.id} ${element.name} ${element.age}</p></div>`)
//     }
// }
// ObjArray([{
//     id:1,
//     name:'kokojambo',
//     age:30
// },
//     {
//         id:2,
//         name:'motomoto',
//         age:21
//     }])

// - створити функцію яка повертає найменьше число з масиву
// let MinNumber = (numbers) => {
//     let min = numbers[0]
//     for (let i = 1; i < numbers.length; i++) {
//         const number = numbers[i];
//         if (min > number){
//             min = number
//         }
//     }
//     return min
// }
// document.write(MinNumber([5,9,2,4,6,-299,-100]))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let Sum = (arr) =>{
//     let storage = 0
//     for (const element of arr) {
//         storage = storage + element
//     }
//     return storage
// }
//
// document.write(Sum([1,2,3,4,5]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr,i1,i2) =>{
    if (i1<arr.length && i2<arr.length){
        let temp = arr[i1]
        arr[i1] = arr[i2]
        arr[2] = temp

        return arr
    }

}

document.write(swap([11,22,33,44],1,2))