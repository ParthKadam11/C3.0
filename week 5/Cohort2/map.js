let arr=[1,2,3,4,5];
/*
//Leetcode style
let newarr=[];
for(let i =0;i<arr.length;i++){
    newarr.push(arr[i]*2);
}
console.log(newarr);
*/

//Map 
//function transform(array){
//    return array*2
//}
//const ans=arr.map(transform);
//console.log(ans);

//another cleaner way to do this 
const ans = arr.map(function(array){
    return array*2
})
console.log(ans);