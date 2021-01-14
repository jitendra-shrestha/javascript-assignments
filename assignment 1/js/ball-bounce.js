
var ball = document.getElementById('ball')



var i =0 ;
var speed = 10;

flag=true;

// setInterval(function move() {
//           if(flag === true){
//             ball.style.top = i + 'px';
//             i=i+speed;
//             if(i===450){
//                 flag=false;
//             }
//           }
//           else{
//             ball.style.top = i + 'px';
//             i=i-speed;
//             if(i===0){
//                 flag=true;
//             }
//           }
// }, 1000/60);

// setInterval(function () {}, 1000 / 60);

function move() {
    if(flag === true){
        ball.style.top = i + 'px';
        i=i+speed;
        if(i>=450){
            flag=false;
        }
      }
      else{
        ball.style.top = i + 'px';
        i=i-speed;
        if(i<=0){
            flag=true;
        }
      }
    requestAnimationFrame(move);
  }
  
move();
