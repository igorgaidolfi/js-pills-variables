// ESERCIZIO 1
// let number = 100
// console.log(number)
// // ESERCIZIO 2
// const pi = 3.14
// console.log(pi)
// // ESERCIZIO 2B
// /* pi = 3.1416
// console.log(pi) */
// // ESERCIZIO 2C
// let radius = 8
// let circle = radius*2*pi
// console.log(circle)
// // ESERCIZIO 3
// let name = "Carlo"
// name = "Marco"
// console.log(name)

// // ESERCIZIO 2
// let comparison
// let nomeA = 'franco'
// let nomeB = 'gino'
// if (nomeA == nomeB){
//     comparison = "Le stringhe sono uguali"
// }
// else{
//     comparison = "Le stringhe sono diverse"
// }
// console.log(comparison)
// // ESERCIZIO 3
// let numero = 3
// if(numero == '3'){
//     comparison = true
// }
// else{
//     comparison = false
// }
// console.log(comparison)
// // ESERCIZIO 1/A 
// for(let i=1; i<=42;i++){
//     console.log(i)
// }
// // ESERCIZIO 1/B
// for(let i=42; i>=1;i--){
//     console.log(i)
// }
// // ESERCIZIO 1/A 
// const numbers = [1,45,75,87,46,46,346,335]
// console.log(numbers)

// // ESERCIZIO 1/B
// const fruits = ['mela', 'banana', 'pesca', 'pera', 'albicocca', 'mango', 'kiwi', 'papaya']
// console.log(fruits)
// // Esercizio 1/C
// console.log(fruits.length)
// **Esercizio 2/A**
// const numOfElements = prompt('Inserisci un numero intero da 2-100')
// let numbers = []
// for(let i=1; i<=numOfElements; i++){
//     numbers.push(i)
// }
// console.log(numbers)
// **Esercizio 2/B**
// const numOfElements = prompt('Inserisci un numero intero da 2-100')
// let numbers = []
// let somma=0

// for(let i=1; i<=numOfElements; i++){
//     numbers.push(i)
// }
// for(let i=0; i<numbers.length; i++){
//     somma= somma + numbers[i]
// }
// console.log(numbers)
// console.log(somma)
// let max = (Math.max(numbers))
// console.log(max)
// SNACK 1
// let num1 = prompt('Inserisci un numero') 
// let num2 = prompt('Inserisci un altro numero')
// if(num1>num2){
//     console.log('Il primo numero che hai inserito è il maggiore')
// }else if(num1<num2){
//     console.log('Il secondo numero che hai inserito è il maggiore')
// }else{
//     console.log('I numeri che hai inserito sono uguali')
// }
// SNACK 2
// let num=0
// for(let i=0; i<10;i++){
//     num += parseInt(prompt('Inserisci un numero'))
// }
// console.log(num)
// SNACK 3
// const invite = ["di","a","da","in","con","su","per","tra","fra"]
// let user = prompt('Inserisci il tuo nome')
// let bloed = 0
// for(let i=0;i<invite.length;i++){
//     if(invite[i] == user){
//         bloed = 1
//     }
// }
// if(bloed == 1){
//     console.log('Benvenuto')
// }else{
//     console.log('Non sei nella lista')
// }
// SNACK 4
// const pizza=[]
// for(let i=0; i<6;i++){
//         let num = parseInt(prompt('Inserisci un numero'))
//         if(num%2 == 1){
//             pizza.push(num)
//         }
// }
// console.log(pizza)
// FIBONACCI WHILE 
let num = prompt('Inserisci quanti numeri vuoi visualizzare?')

let a=0, b=1
let c 

let i=0
while(i<num){
    c = a+b
    a=b
    b=c
    console.log(c)
    i++
}