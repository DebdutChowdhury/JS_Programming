let year = 2015;

if ( (year % 4 == 0) || (year % 100 == 0) || (year % 400 == 0) ) {
    console.log(`${year} is the leap year`);
}
else{
    console.log(`${year} Not a leap year`);
}