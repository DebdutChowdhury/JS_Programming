
let number = Math.floor(Math.random() * 10);

if ((number == 0) || (number == 1) ){
    console.log(number+ "is prime number");
}
else{
    for (let i =2; i<=number; i++){
        if (number % i == 0){
            console.log(number + " is not a prime number : ");
            break;
        }
        else{
            console.log(number + " is a prime number");
        }
    }
}