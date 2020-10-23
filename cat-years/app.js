// The first two years of a cat's life count as 25 cat years each.
// Each year following equates to 4 cat years.

var myAge = 35;
var earlyYears = 2;

earlyYears *= 25;

var laterYears = myAge - 2;

laterYears *= 4;

var myAgeInCatYears = earlyYears + laterYears;
var myName = 'Gabriel';

console.log('My name is ' + myName + '. I am ' + myAge + ' years old in human years which is ' + myAgeInCatYears + ' years old in cat years.')