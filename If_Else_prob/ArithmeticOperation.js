let a = 10;
let b = 15;
let c = 12;

let d = (a+b*c);
let e = (c+a/b);
let f = (a%b+c);
let g = (a*b+c);

console.log(d);
console.log(e);
console.log(f);
console.log(g);

{
    if ( (d>e) && (d>f) && (d>g) ){
        console.log("Maximum value is :"+ d);
    }
    else if ( (e>d) && (e>f) && (e>g)){
        console.log("Maximum value is :"+ e);
    }
    else if ( (f>d) && (f>e) && (f>g)){
        console.log("Maximum value is :"+ f);
    }
    else{
        console.log("Maximum value is :"+ g);
    }
}

{
    if ( (d<e) && (d<f) && (d<g) ){
        console.log("Menimum value is :"+ d);
    }
    else if ( (e<d) && (e<f) && (e<g)){
        console.log("Menimum value is :"+ e);
    }
    else if ( (f<d) && (f<e) && (f<g)){
        console.log("Menimum value is :"+ f);
    }
    else{
        console.log("Menimum value is :"+ g);
    }
}