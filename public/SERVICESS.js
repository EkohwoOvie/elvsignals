let number = document.getElementById('number');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');
let number4 = document.getElementById('number4');
let counter = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

setInterval(() => {
    if (counter == 100 ){
        clearInterval;
    }else{
        counter += 1;
    number.innerHTML = `${counter}%`;
 }
}, 100);

setInterval(() => {
    if (counter2 == 98 ){
        clearInterval;
    }else{
        counter2 += 1;
    number2.innerHTML = `${counter2}%`;
 }
}, 100);

setInterval(() => {
    if (counter3 == 99 ){
        clearInterval;
    }else{
        counter3 += 1;
    number3.innerHTML = `${counter3}%`;
 }
}, 100);

setInterval(() => {
    if (counter4 == 97 ){
        clearInterval;
    }else{
        counter4 += 1;
    number4.innerHTML = `${counter4}%`;
 }
}, 100);
