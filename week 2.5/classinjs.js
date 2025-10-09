//some inbuild classes in javascript 
//1.date
const now = new Date();
console.log(now);//prints date and time 
//you can access various methods of date class 
console.log(now.getDay());//prints the nummber of day of week 6=saturday
console.log(now.getFullYear());//prints current year

//2.Maps
//It is used to set key value pairs
const map =  new Map();
const setname=map.set('name','Parth');
const setage=map.set('age','18');
console.log(setage);