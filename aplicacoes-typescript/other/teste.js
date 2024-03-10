let M = 72;

let A = 35;
let B = 15;
let C = M - A -B;

console.log(C)
console.log ("  ")


let res = A;

if ((A < C) && (B < C))res = C;   
if ((A < B) && (B > C)) res = B;

console.log (res)
