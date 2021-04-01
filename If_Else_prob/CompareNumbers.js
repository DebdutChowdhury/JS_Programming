let min = 100;
let max = 999;
let number1 = Math.floor(Math.random() * (max - min)) + min;
let number2 = Math.floor(Math.random() * (max - min)) + min;
let number3 = Math.floor(Math.random() * (max - min)) + min;
let number4 = Math.floor(Math.random() * (max - min)) + min;
let number5 = Math.floor(Math.random() * (max - min)) + min;

console.log("Number One is : "+number1);
console.log("Number Two is : "+number2);
console.log("Number Three is : "+number3);
console.log("Number Four is : "+number4);
console.log("Number Five is : "+number5);

if ( (number1 > number2) && ( number1 > number3) && (number1 > number4) && (number1 > number5) ){
    console.log("Number One is greator number : "+ number1);
}
else if ( (number2 > number1) && ( number2 > number3) && (number2 > number4) && (number2 > number5) ){
    console.log("Number two is greator number : "+ number2);
}
else if ( (number3 > number1) && ( number3 > number2) && (number3 > number4) && (number3 > number5) ){
    console.log("Number two is greator number : "+ number3);
}
else if ( (number4 > number1) && ( number4 > number2) && (number4 > number3) && (number4 > number5) ){
    console.log("Number Four is greator number : "+ number4);
}
else{
    console.log("Number Five is greator number : "+ number5);
}