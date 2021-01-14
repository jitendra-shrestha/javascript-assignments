
// var points = [
//     {x:100, y:37},
//     {x:200, y:47},
//     {x:150, y:48},
//     {x:278, y:48},
//     {x:17, y:49},
//     {x:20, y:361},
//     {x:23, y:127},
//     {x:288, y:26},
//     {x:279, y:15},
//     {x:50, y:250},
//     {x:40, y:121},
//     {x:253, y:21}
// ];

var points= [];
var ndots= 200;

for (var i = 0; i < ndots; i++){
    x=Math.floor(Math.random() * 450);
    y=Math.floor(Math.random() * 450);
    points[i]={'x':x,'y':y};
}


var colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
            '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
            '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
            '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
            '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
            '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
            '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
            '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
            '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
            '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

var colorsize = colors.length;

var root = document.getElementById('right');

points.forEach(function (value,index){
    x=value.x;
    y=value.y;
    color = colors[index % colorsize];
    var dots = document.createElement('div');
    dots.setAttribute('id','dots'+index);
    dots.style.backgroundColor = color;
    dots.style.position = 'absolute';
    dots.style.height = '20'+'px';
    dots.style.width = '20'+'px';
    dots.style.borderRadius = '50%' ;
    dots.style.left = x +'px';
    dots.style.top= y + 'px';
    root.appendChild(dots);

});

document.addEventListener('click', function (event) {
    var clicked = event.target;
    var currentID = clicked.id || "No ID!";
    // console.log(currentID);
    var check = document.getElementById(currentID);
    if(currentID === 'right' || currentID === 'root' || currentID === 'ball'){
        console.log('cannot delete container');
    }
    else{
        check.remove();
    }
  });


