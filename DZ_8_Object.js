// ДЗ1

// Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію).
//  Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення".
// Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта. 

// Наприклад так:

// obj.getInfo(); // Правильна інформація про об'єкт
// obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
// obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.

let NewYearMan = {
    Ukraine: 'Mykolaj',
    GreatBritain: 'Santa_Claus',
    Italy: 'Babbo_Natale',
    getInfo: function () {
            for (let key in NewYearMan){
                if (key != "getInfo"){
                    console.log(key + " : " + NewYearMan[key]);}
}
    } 
}
// NewYearMan.Netherlands = 'Sinterklaas';
NewYearMan.getInfo();




// ДЗ2 Сума вартості послуг

//  Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:
// var services = {
// 	"стрижка": "60 грн",
// 	"гоління": "80 грн",
// 	"Миття голови": "100 грн" };
// "Послуги" можуть додаватися по ходу роботи:
// services['Розбити скло'] = "200 грн";

// Умови виконання ДЗ

// створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
// створити метод minPrice() - який повертає мінімальний price
// створити метод maxPrice() - який повертає максимальний price


var services = {
	"стрижка": '60 грн',
	"гоління": '80 грн',
	"Миття голови": '100 грн',
	getInfo: function () {
	    for (let key in services){
	       // console.log("services[key] = " + typeof services[key])
                if (typeof services[key] !== 'function') {
                    console.log(key + " : " + services[key]);
                }   
            }
	},
    getPrice: function () {
        let Price = 0;
        for (let key in services){
       if (typeof services[key] !== 'function') {
                     Price = Price + parseInt(services[key]);
                }   
        }
         return Price;
    },
    minPrice: function () {
        let Price = 10000000;
        for (let key in services){
       if (typeof services[key] !== 'function') {
           if (Number(services[key]) < Price)
                     Price = parseInt(services[key]);
                }   
        }
         return Price;
    },
    maxPrice: function () {
        let Price = 0;
        for (let key in services){
       if (typeof services[key] !== 'function') {
           if (parseInt(services[key]) > Price)
                     Price = parseInt(services[key]);
                }   
        }
         return Price;
    }
}
services['Розбити скло'] = "200 грн";
services['water'] = "20" ;
services['coffe'] = "40" ;
// services.getInfo()
console.log('Загальна вартість наданих послуг = ' + services.getPrice())
console.log('Мінімальна вартість наданих послуг = ' + services.minPrice())
console.log('Максимальна вартість наданих послуг = ' + services.maxPri