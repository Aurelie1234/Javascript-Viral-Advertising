function viralAdvertising(n) {
    // Write your code here


let sum = 0;
let shared = 5;
    
for (let i = 0; i < n; i ++) {
        sum = Math.floor(shared/2) + sum;
        shared = Math.floor(shared/2) * 3;
    }
    
    return sum
}
