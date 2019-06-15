/* Get set bit for an integer number.
 * Convert that number to bit form and them find number of 1's
 *
*/

function bitCount(num) {
    let bits = num.toString(2);
    let count = 0;
    for (let i = 0; i < bits.length; i++) {
        if (bits[i] == 1) count++;
    }
    return count;
}

let bitsInSix = bitCount(6); //110
let bitsInSixtyFour = bitCount(64); //1000000
let bitsInThirteeOne = bitCount(31); //11111
console.log(bitsInSix);
console.log(bitsInSixtyFour);
console.log(bitsInThirteeOne);
