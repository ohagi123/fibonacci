'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n){
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = memo.get(n - 1) +memo.get(n - 2);
    memo.set(n,value);
    return value;
}
//console.log(`${process.argv[2]}番目のフィボナッチ数は${fib(process.argv[2])}です。`);
const length = 40;
for (let i = 0; i <= length; i++){
    console.log(`${i}番目のフィボナッチ数は${fib(i)} です。`);
}