
// - Junior passengers (under 18) get a 20% discount
// - Senior passengers (over 65) get a 40% discount
const priceKm = 0.21;
const age = prompt('How old are you?');
const route = 
prompt('Which Route do you take? (Please choose one number) 1.London to Cambridge , 2.London to Sheffield, 3.London to Manchester, 4.London to Oxford, 5.London to Bristol');


// all distances
const LnToCamb = 103;
const LnToSheff = 267;
const LnToMan = 339;
const LnToOxf = 96;
const LnToBris= 136;

let distance;

if(parseInt(route) === 1){
    distance = LnToCamb
}
else if(parseInt(route) === 2){
    distance = LnToSheff
}
else if(parseInt(route) === 3){
    distance = LnToMan
}
else if(parseInt(route) === 4){
    distance = LnToOxf
}
else{
    distance = LnToBris
}

// calculate price
let price = priceKm * distance

let ticketPrice;

// calculate based on age discount
if(parseInt(age) < 18){
    let discount = priceKm * distance * 0.2
    ticketPrice = (price - discount).toFixed(2);
}
else if(parseInt(age) > 65){
    let discount = priceKm * distance * 0.4
    ticketPrice = (price - discount).toFixed(2);

}else{
    ticketPrice = price.toFixed(2);
}

// show user ticket
alert(`Your ticket price is £${ticketPrice}, Enjoy your journey...`)
console.log(`Your ticket price is £${ticketPrice}, Enjoy your journey...`);


