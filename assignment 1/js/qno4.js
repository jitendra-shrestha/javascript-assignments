var numbers = [1, 2, 3, 4];

function transform(array, tranFunc){

    arr=[];

    array.forEach(function(num){

        arr.push(tranFunc(num));

    });

    return arr;
}

var output =  transform(numbers, function(num){

    return num * 2;

});

console.log(output);