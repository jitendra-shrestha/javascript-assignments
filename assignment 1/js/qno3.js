var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},   
    {id: 2, name: 'Apple', color: 'Red'}
]


function searchByName(array, value){

    var obj;

    array.forEach(function(element){

        fruitname = element.name ;

        if(fruitname === value){

            obj=element;
        }
    });
    return obj;
}

function searchByKey(array, key, value ){

    var obj;

    array.forEach(function(element){

        Object.keys(element).forEach(function(item){

            if(key == item && value == (element[item] )){

                obj=element;
            }
        });
    });
    return obj;
}

console.log(searchByName(fruits, 'Apple'));
console.log(searchByKey(fruits, 'id', '1'));