function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}
function Input(a,b,op){//Functional Argument
    return op(a,b);
}

console.log(Input(1,2,div));