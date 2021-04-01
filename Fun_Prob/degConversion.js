const prompt = require('prompt-sync')();
console.log("1. farhenhight to celcius");
console.log("2. celcious top farhenmhite");

const conversion = () => {
    let chose = prompt("Choose number: ");
    let degree = prompt("Enter the number: ");
    
    switch(chose){
        case '1': 
            let celsius = degree;
            if (celsius > -1 && celsius < 101){
                var degFar = (celsius * 1.8) + 32;
                console.log(`farhenhight to celcius. ${degFar}`);
            }
            else{
                console.log("wrong input");
            }
            break;
        case '2': 
            let fahrenheit = degree;
            if (fahrenheit > 31 && fahrenheit < 213){
                var degCel = (fahrenheit - 32) / 1.8;
                console.log(`celcious top farhenmhite. ${degCel}`);
            }
            else{
                console.log("wrong input");
            }
            break;
    }
}
conversion();