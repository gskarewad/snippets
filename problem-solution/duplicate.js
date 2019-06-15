/**
 * Check if the string has duplicate characters in it
 */
function hasUnique(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] == str[j]) return false;
        }
    }
    return true;
}

console.log(hasUnique("abcd"));
console.log(hasUnique("aqwertyuiopnmxcksjdfglaa"));
