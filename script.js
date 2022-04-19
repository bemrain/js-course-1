// let number = 7 // тип данных число 
// let str = "string" // тип данных строка
// let bool = true  // тип данных булеон
// let n = undefined // тип данных пустота 
// let n2 = null // тип данных null
// let obj = {} // тип данных объект

//  let string = "56" * "40" + "sdfsdf" // конкатенация
//  // NaN Not a Number
//  let operators = "dfsdf" * "dgsdg"
//   number = number + 4
//   number = number + 4
//   number = number + 4
//   const a2 = 120
// console.log(operators); 

// 0 // ложное значение
// "" // ложное значение
// false // ложное значение 
// undefined // ложное значение
// null // ложное значение
// NaN // ложное значение

// if (uslovie){
//   komanda
// }
//  && - И
//  || - Или
 //!! правдивое значение
//  ? - больше
//  : - меньше
// let age = 54
// console.log(age > 20 ? "Больше" : "Меньше" )

// console.log(null || 3  ||undefined)

// console.log(1 && 0 && 2)

// Объект

// let userInfo = {
//     name: "Begimai",
//     age: 20,
//     address:{
//       city: "Bishkek",
//      street: "jukeeva"
//     }

// }
// userInfo.name = "Tala"
// console.log(userInfo.name)

// let product = {
//  size: "xl",
//  price: 4000,
//  count: 2,
//  owner:{
//    name: "Begimai",
//    surname: "Nurbekova"
//  }
// }
// console.log(product.owner);

// let obj ={
//   "string" : 14,
//   2 : "value"
// }
// console.log(obj["string"]);

//Массив
// let array = ["value1",
//  "value2",
//   "value3",
 
// ]
// array[0] = "not value"

// console.log(array.push("value4")) // Добавление в конец массива
// console.log(array.unshift("value0") )// Добавление в начало массива
// console.log(array.pop()) // Удаление одного элемента с конца 
// console.log(array.shift()) // Удаление одного элемента с начала

// let styles = ["Джаз", "Блюз"]

// styles.push("Рок-н-ролл")
// styles[1] = "Классика"
// styles.shift()
// styles.unshift("Рэп и Рэги")
// console.log(styles)

// let styles = [1,2,3,4,5]
// let lenght = styles.length
// let middle = (lenght-1) / 2

// console.log(styles[middle]);
// })
// forEach() - проходит по каждому элемету массива

// let array2 = []
// let array = [0,1,-2,3,4,-5,1, 2, 3 ,4 ,5]

// array.forEach(function(item) {
//   if(item > 0){
//     array2.push(item)
//   }
// })
// console.log(array2);


// let array = [1,2,3,4,5]
// function func (){

//     console.log(array.length);

//     return 1 
// }
// let result = func()
// console.log(result);

// function func(a) // a - параметры
// {
// return (a + 1)
// }
// console.log(func(5));

// function func(a){
//     console.log(a + "Beka");
    
// }
// func("Tala")

// function sum (a,b){
//     return a + b
// }
// console.log(sum(20,30));
// console.log(sum(4,20));
// console.log(sum(9,7));


// function sum(a){
//     let result = 0
//     a.forEach((item) => {
//         if(item < 0){
//             result = result + 1
//         }
        
//     })
//     console.log(result)
// }
// sum([-1,34,46,-45,-12,45])
// sum([1,4,46,-6,-2,45])
 
// funcrion expression
// let func = function(){
//     console.log(1)
// }

// // function declaration
// function func2(){
// }

// // arrow function
// let func3 = () =>{
//     console.log(3)
// }


// let username = "some name"
// function someFunc(){
//     function someFunc2(){
//         let username = "some name2"
//         console.log(username);
//     }
   
// }
// someFunc()

// let user = {
//     name:"some name",
//     username: "sdfsdf",
//     walk:() => {
//         console.log(this);
//     },
//     SayName : function()  {
//         console.log(this.name);
//     }

// }
// user.walk()
// user.SayName()

// let animals = 4
// switch(animals){
//     case 1: 
//     console.log("Носорог");
//     break
//     case 2: 
//     console.log("Лев");
//     break
//     case 3: 
//     console.log("Тигр");
//     break
//     case 4: 
//     console.log("Слон");
//     break
//     default:
//        console.log("Ошибка");
// }


// var mostWordsFound = function(sentences) {
//     let maxWords = 0
//     for(let i = 0; i < sentences.length; i++){
//         const lengthOfSentenceWords= sentences[i].split(" ").length
//         maxWords = Math.max(lengthOfSentenceWords, maxWords)
        
//     }
//     console.log(maxWords);
// };
// mostWordsFound( ["alice and bob love leetcode", "i think so too", "this is great thanks very much"])

// var containsDuplicate = function(nums) {
//     nums.sort();
//      for (let i = 0; i < nums.length; i++) {
//          if (nums[i] === nums[i + 1]) {
//              return true;
//          }
//      }
//      return false;
//  };
 
// console.log(containsDuplicate([1,2,3,4,]));

// const lang = ["java","typescript","javascript"] 

// const jlang = lang.filter(function (language){
//      return language.startsWith("j") 
// }) 
// console.log(jlang)

// const arr = [0,2,3,4,5]
// let [first, second, ...restArr] = arr
// console.log(first, second, restArr);

// console.log( [1, 4, 3, 0, 4, 5, 4]
// .filter (element => !(element % 2))
// .reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0));

// function basicOp(operation, value1, value2)
// {
//   if (operation === '+') {
//      return value1 + value2
//  }else if(operation === "-"){
//  return value1 - value2
//  } else if(operation === "*"){
//  return value1 * value2
//  } else if (operation === "/") {
//      return value1 / value2
//  }

// }
// console.log(basicOp('+', 4, 7));
// console.log(basicOp('-', 8, 7));
// console.log(basicOp('*', 8, 7));
// console.log(basicOp('/', 8, 7));

// function rentalCarCost(d) {
// if (d >= 1 && d <=3){
// return d * 40
// } if(d >= 3 && d <=6){
//   return d * 40 - 30
// } if(d>= 7){
//  return d * 40 - 50
// }
// }
//   console.log( rentalCarCost(10));

// function array(arr){
// return arr.split(",").slice(1,-1).join(" ")
//     }
//     console.log( array("1,2,3,4"));


// let massage = "Уже есть сообщение"

// massage ||= "Какое то сообщение" // Присваивает значение если massage == false
// massage &&= "Какое то сообщение" // Присваивает значение если, massage == true

// console.log(massage);

// let str = "abbbbbbcdefg"
// console.log(str.replaceAll("b","Б")); // Заменяет в строке букву или число на другое значение на которое мы хотим 

// let m = 1_000_000_000 // _ Знаки игнорируются, для удобства чтение больших чисел 
// console.log(m);

// function SomeFunc(...some){
//     console.log(some);
// }
// SomeFunc("1", "ffddf","343")

// function someFunc(walk = () => {console.log("Я классная"); // Параметры по умолчанию 
// name = "beka"
// age = 21
// console.log(name);

// })
// someFunc()

// setTimeout(function(){ // Задержка времени
//     console.log("Прошло 5 секунд"); 
// }, 5000)

// let i = 0
// const firstInterval = setInterval(function(){
//     console.log("Прошло еще 2 секунды"); 
//     i++
//     if(i > 3){
//         clearInterval(firstInterval) 
//clearInterval(айди интервала) чтобы остановить интервал
//     }
// }, 2000)   






// function name(str){
// return str.split(' ').revesre().join(' ')
// }

//Синхронность, выполняется сразу при получении кода
// function somefunc(){ //Не ждет. 
// console.log(1);
// }

// Асинхронность
// setTimeout(()=>{
//     console.log(1); // ждет ответа от какого-то кода, значит некоторое время
// },3000)

// let someAsynValue = new Promise((resolve, reject)=>{
//     let isfinished = true
//     if(isfinished){
//         resolve (1)
//     }
//     else{
//         reject("Потому что isfinished не положительное значение")
//     }
// })


// Promise - асинхронный код, имеете 3 состояния
// pending = ожидание
// fullfilled = выполнился успешно
// rejected = безуспешно

// let some = new Promise((resolve,reject) =>{
//     let isFinished = false
//     if (isFinished){
//         resolve(1)
//     }else{
//         reject("Потому что isFinished не положительное значение ")
//     }
// })
// some.then(() =>{
//     console.log("Успешно!")
// }).catch(() =>{
//     console.log(" Не успешно")
// })

// function betterThanAverage(classPoints, yourPoints) {
//  if(classPoints >= yourPoints){
//     return "false"
//  }
//    if(yourPoints >= classPoints){
//     return "true"
//   }
  
// }
// betterThanAverage()

// function sum(a,b){
//     return a * b
// }console.log(sum(5,6));

// function stringToArray(string){
//  return  string.split(" ")

// }

// console.log(stringToArray("Я хочу сдохнуть"));

// function     oddCount(n){
//     return Math.floor( n /2)
// }
// console.log(oddCount(7));

// async function someAsyncFunc(){
//  const response = await fetch("")
// }
// const 

// async function loadJson(url) {
//     return fetch(url)
//       .away(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }

// const  wait = (seconds) =>{
//   return new Promise((res) =>{
//       setTimeout(() =>{
//           res ("Какоето сообщение")
//       }, seconds * 1000)
//   })
// }

// async function someAsyncFunction(){
//   console.log("Началось ожидание");
//   const res = await wait(3)  // await  пишется до функциии которую должны ожидать 
//   // Ожидание 3 секунды, ничего не выполняется
//   // Через 3 секунды выполняется следующий код 
//   // await работает только с промисами
//   // Три точки под await  ознаает что никакого эффекта она не даст
//   // Когда пишем async await мы говорим чтоб он прямо сейчас ждал и
//   // не выполнял ничего в рамках этой функции 
//   // А при промис = "Когда получишь, тогда и сделаешь"
//   await setTimeout(() =>{},1000)
//   console.log("Прошло какое-то время и мы получили сообщение:  " + res);
// }

// someAsyncFunction()

const  wait = (operation) =>{
  return new Promise((res) =>{
      setTimeout(() =>{
          res (operation)
      },3000)
  })
}

const getsomeCalculation = async () =>{
  console.log("Просто сообщение которое означает что функция началась");
  let fortyFive = 45 
  console.log(" Второе сообщение");
  let getSomeOfVar = fortyFive + 100
  console.log("Мы получили" + getSomeOfVar);
  const result = await wait (155 + getSomeOfVar) // Типа очень сложная операция, которая занимает 3 секунды
}
getsomeCalculation()