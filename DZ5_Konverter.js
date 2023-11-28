var a = 'км';    // 'км'  , 'г'  , 'кг'
var b = 5 ;
switch (a) {
    case 'км':
        console.log(b + a + ' це ' +  b * 1000 + ' м ');
        break;
    case 'г':
        console.log(b + a + ' це ' +  b * 60 + ' хв ');
        break;
  case 'кг':
        console.log(b + a + ' це ' +  b * 1000 + ' г ');
        break;
    default:
        console.log('Невірно введене значення');
}