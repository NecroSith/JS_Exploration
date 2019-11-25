console.time();
let arr = [];
for (let i = 0; i < 1000000; i++) {
    arr.push(i);
}
console.timeEnd();


console.time();
let i = 0;
while (i < 1000000) {
    arr.push(i);
    i++;
}
console.timeEnd()