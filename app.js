"use strict";
 alert('Hello!');
console.log('hi');


alert('Hi there ' + name + '! Nice to meet you! ')

var favColor = prompt('Is my favorite color blue?').toLowerCase();


if ( favColor === 'yes' || favColor === 'y' ) {
alert('That\'s right!');

} else if( favColor === 'no' || favColor === 'n'){
    alert('Sorry, my favorite color is blue.');
console.log('Is my favorite color blue?');
}


var favoriteFood = prompt('Do I like pizza?').toLowerCase();

if (favoriteFood === 'yes' || favoriteFood ==='y') {
      alert('Correct!');
    
} else if ( favoriteFood ==='no'|| favoriteFood === 'n') {
    alert('Sorry, my favorite food is pizza.');
console.log('Do I like pizza?');
}

    var from = prompt('Was I born in Portland?').toLowerCase();

if (from === 'yes' || from === 'y'){
    alert('That\'s correct!');
} else if(from === 'no' || from === 'n') {
    alert('That is incorrect! I was born in Portland');
    console.log('Was I born in Portland?');
}
   var criminal = prompt('Do I like criminals?').toLowerCase();
   
   if (criminal === 'yes' || criminal === 'y'){
       alert('Wrong! More like I don\'t appreciate them');
   } else if(criminal === 'no' || criminal === 'n') {
    alert(' Correct!');
    console.log('Do I like criminals?');
   }
    
   var size = prompt('Do I have size 10 feet?').toLowerCase();
       
    if (size === 'yes' || size === 'y'){
        alert('That\'s wrong!');
} else if( size === 'no' || size === 'n') {
    alert ('Wrong, I wear Size 12s!');
    console.log('Do I have size 10 feet?');
}
for (var i = 0; i < 4; i++) {
   var guess = parseInt(prompt('How many types of fruits do I like?'));
    console.log ('loop #1' + i);

   if (guess < 5) {
        alert('Too low!');
        console.log('')

   } else if (guess > 5 ) {
        alert('Too high!');
        console.log()

   } else if( guess === 5) {
     alert('Correct!'); 
    console.log() 
   }
}

while ()