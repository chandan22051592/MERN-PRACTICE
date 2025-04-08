// problem statements : Given an array , give me back a new array in ehich every value is multiplied by 2
// ip : [1,2,3,4,5], op: [2,4,6,8,10]

// normal way
// const input = [1,2,3,4,5];
// const newArray = [];

// for(let i =0; i<input.length;i++){
//     newArray[i] = input[i]*2;
// }

// console.log(newArray);



// other solution 
const input = [1,2,3,4,5];
// map is part of array class


// function f(i){
//     return i*2;
// }
// const ans = input.map(f);

// -----------------OR-----------------------

// const ans = input.map(function(i){
//     return i*2;

// })
// console.log(ans);





// ______________________filter________________________



// normal way
// const ans1 = []; 
// for(let i =0;i<input.length;i++){
//     if(input[i] % 2==0){
//         ans1.push(input[i]);
//     }
// }
// console.log(ans1);



// using filter
const ans1 = input.filter(function(n){
    if(n%2 == 0){
        return true;
    }else{
        return false;    }
})

console.log(ans1);