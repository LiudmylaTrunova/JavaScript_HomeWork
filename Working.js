// 'number' + 3 + 3  // виводиться: number33

// var message; //Об'ява змінної message
// var a=3; //Об'ява змінної a
// message = 'number'; //Ініціалізація змінної значенням "number"
// console.log(message) // Вивід зміної в консоль
// console.log(message + a + a)// Вивід зміної в консоль



// null + 3 // виводиться: 3

// var empty = null;
// var a=3;
// console.log(empty + a);




// 5 && "qwerty" // виводиться: qwerty

// var a = 5;  //Ініціалізація змінної
// var b = "qwerty";  //Ініціалізація змінної
// console.log(a && "qwerty"); //якщо ми все ж таки дійшли до кінця - повертається останнє обчислене значення



// +'40' + +'2' + "hillel";  // виводиться: 42hillel

// var a = '40'; //Ініціалізація змінної
// var b = '2';  //Ініціалізація змінної
// var c = "hillel";  //Ініціалізація змінної
// var res = +a + +b + c;  // +a - переводить string в число; +b - переводить string в число;
// console.log(res);




// '10' - 5 === 6; // виводиться: false
// console.log('10' - 5 === 6); // Повертає true, якщо значення рівні і мають однаковий тип, і false - якщо вони різні.



// true + false  // виводиться: 1

// var bool1 = true;
// var bool2 = false;
// console.log(bool1 + bool2);




// '4px' - 3  // виводиться: NaN
// console.log('4px' - 3);  // '4px' - string, а для string не може бути віднімання.  Будь які операції з Nan повертають Nan




// '4' - 3  // виводиться:  1
// console.log('4' - 3);  // '4' - js привела до числа 4



// '6' + 3 ** 0;  // виводиться: 61
// console.log('6' + 3 ** 0);   // (**) зведення в ступінь, 3**0=1, а потім конкатенація: string + 1




// 12 / '6'  // виводиться: 2
// console.log(12 / '6');  // '6'- js приводить до числа. 12/6=2




// '10' + (5 === 6);  // виводиться: 10false

// console.log('10' + (5 === 6)); // === Повертає true, якщо значення рівні і мають однаковий тип, і false - якщо вони різні. 5 === 6 = false
                               // '10'- string
                               // виконується конкатинація




// null == ''  // виводиться: false
// console.log(null == '');  // повертає true, якщо вони рівні, і false - якщо нерівн.






// 3 ** (9 / 3);  // виводиться: 27
// console.log(3 ** (9 / 3));  //спочатку дія (9 / 3) = 3, а потім піднесення до ступеню 3 в 3му = 27




// !!'false' == !!'true'  // виводиться: true
// console.log(!!'false' == !!'true'); // 'false', 'true' - string.
                                    // !!'false', !!'true' = переводить в true
                                    // true == true - буде true




// 0 || '0' && 1  // виводиться: 1
// console.log(0 || '0' && 1);   // 0 || '0' = true (бо хоча б одне true), && - повертає true, якщо обидва операнди є true, інакше повертає false.
                              // виводиться останній запис 1




// (+null == false) < 1;  // виводиться: false
console.log((+null == false) < 1);     // +null = 0
                                       // (+null == false) - це true
                                       // true < 1  - це false




// false && true || true  // виводиться: true
// console.log(false && true || true);  // false && true - виводить false, бо має бути хоча б одне з них false
                                       // потім false || true  - виводить true, бо має бути хоча б одне з них true




// false && (false || true);  // виводиться: false
// console.log(false && (false || true)); // (false || true) - виводить true, бо має бути  хоча б одне з них true
                                         // потім false && true  - виводить false, бо має бути хоча б одне з них false


                                         
// (+null == false) < 1 ** 5;  // виводиться: false
// console.log((+null == false) < 1 ** 5); // +null = 0
                                         // (+null == false) - це true
                                         // 1 ** 5 - це 1
                                          // true < 1  - це false
