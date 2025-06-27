function getElement<T> (args : T[]):T{
    return args[0];

}

const a = getElement(['hello','to','world']);
const b = getElement([1,2,3,4,5,6,7]);

console.log(a);
console.log(b);