//create an map function that takes an array and a transform function as input and returns the transformed array
function map(array, transformation){
for(let i = 0; i < array.length; i++){
array[i] = transformation(array[i]);
}
return array;
}


let input = [1,2,3,4,5]
let output = map(input, x => x*2)
console.log(output)
