// ДЗ 1

// Вам необхідно намалювати в консолі прямокутний трикутник із зірочок
// (або плюсиків, або якогось іншого символу): на першому рядку - одна зірочка, на другій дві, і так далі. 
// Рішення оформіть у вигляді функції, куди передаються два параметри:
//  висота трикутника та символ, яким його потрібно "малювати".

// 1 спосіб

function drawTriangle(hight, symbol) {   //Оголошення функції
    console.log("drawTriangle(" + hight + ' , ' + symbol + ")");  //Тіло функції
var s = '';
for (var i = 0; i < hight; i++) {
     s = s + symbol
    console.log(s);
}
}
drawTriangle(3, '*');

// 2 спосіб

function drawTriangle(hight, symbol) {   //Оголошення функції
    console.log("drawTriangle(" + hight + ' , ' + symbol + ")");  //Тіло функції
let result = '';
var i = 1;
while (i <= hight) {
    result = result + symbol;
    i++;
    console.log(result);
}
}
drawTriangle(5, '+');






// ДЗ 2

// Вивести на екран суму чисел від 1 до 100 включно, які не кратні 3.
var sum = 0
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0) continue;
//    console.log("i = "  + i) 
    sum = sum +i
    
    }
    console.log("Сума чисел = "  + sum);


// ДЗ 3:

// Написати функцію pow(x,y) яка буде приймати 2 цисла, перше це число яке ми будемо зводити у ступінь, друге у яку ступінь. 
// Наприклад pow(2,3) функція поверне значення 8. 

function pow(x,y) {   //Оголошення функції
    console.log(x + ' у степені ' + y + ' = '); 
let result = 1;
   for (let i = 1; i <= y; i++){
       result = result * x;
   }
   console.log(result);
}
pow(2,3);