//Filtering 
// given an input array of random number filter out all the even number
const arr =[1,2,3,4,5,6];

//dsa or leetcode style
/*
let filarr=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        filarr.push(arr[i])
    }
}
console.log(filarr);
*/

//Filtering 
//function isEven(n){
//    if(n%2==0){
//        return true
//    }else return false
//}
//const ans=arr.filter(isEven)
//console.log(ans);

//cleaner syntax 
const ans=arr.filter(function (n){
    if(n%2==0){
        return true
    }else return false
})
console.log(ans);
