// 변수 Q
// 1. object, array 자료형을 이용해서 3개의 상품이 들어가 있는 배열을 만드시오
var products = [{
    name: '농구공',
    price: 1000
},{
    name: '축구공',
    price: 2000
}]

products[1].name;

if (products.length > 1 && products[0].name)

function arr(products) {
    return products.length;
}

for (var i = 0; i < products.length; i++){
    console.log(products[i].price);
}


function q(products) {
    var newProducts = [];
    for (var i = 0; i < products.length; i++) {
        if (products[i].price >= 60000)
            newProducts.push(products[i]);
    }
}