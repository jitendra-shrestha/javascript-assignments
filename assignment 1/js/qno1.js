
function pattern(number){
    for(var i=number; i>0; i--){
            var stars='';
        for(var j=i; j>0; j--){
            document.write('*'+'\t'); 
        }
        document.write('<br>');
    }
}

document.write('input = 5 <br>'); 
pattern(5);
document.write('input = 10 <br>'); 
pattern(10);

