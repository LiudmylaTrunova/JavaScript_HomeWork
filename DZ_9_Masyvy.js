// ДЗ1 Тусувати масив

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
function myBlend(arr){
    for (let i = 0; i < arr.length; i++){
    let rand = Math.floor(Math.random()*arr.length)
    let tmp = arr[i];
    arr[i] = arr[rand];
    arr[rand] = tmp;
}
}
myBlend(arr);
console.log(arr);


// ДЗ2 BigBoss

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};



function findBy(obj, name){
    if (obj.name == name)
    {
        console.log(obj);
        return;
    }
    else if (obj.hasOwnProperty("partners"))
    {
        for (let person of obj["partners"]){
                findBy(person, name);
        }
    }
}

let companyName = 'Клієнт 2';
function findValueByKey(companyName)
{
    for (let client of company["clients"]){
        findBy(client, companyName);
    }
}
findValueByKey(companyName);