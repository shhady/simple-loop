const arr =[1,7,3,0,-5,7,3,9];

for(let i=0; i <= arr.length-1; i++ ){
console.log (arr[i]);
}


let length=0;
for(let i=1; i<=arr.length; i++){
    length++
}
console.log(length);

let sum = 0;
for (let i=0; i < arr.length; i++){
    sum = sum + arr[i] 
}
console.log(sum);


let multiply= 0;
for (let i=0; i < arr.length; i++){
    multiply = multiply * arr[i] 
}
console.log(multiply);
