/**
 * Find addition of all numbers like for 125 answer will be 8
 */
function sumAllNumbers(num) {
    //divide and remainder way # can be used in other programming languages also
    let sum = 0;
    do {
        sum += (num % 10);
        num = Math.floor(num / 10);
    } while (num > 10)
    sum = sum + Math.floor(num);
    return sum;
}

console.log(sumAllNumbers(199))
console.log(sumAllNumbers(199))

function sumNums(num) {
    //specific to javascript
    let sum = 0
    let str = num.toString();
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    return sum;
}