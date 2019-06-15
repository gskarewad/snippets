/**
 * Given two sorted arrays merge two arays.
 * FOr example arr1 = [1,2], arr2 =[3,4] ,result = [1,2,3,4]
 * @param {*} arr1 
 * @param {*} arr2 
 */
function mergeArrays(arr1, arr2) {
    let arr3 = [];
    let track1 = 0;
    let track2 = 0;
    while (track1 < arr1.length || track2 < arr2.length) {
        if (arr1[track1] < arr2[track2]) {
            arr3.push(arr1[track1]);
            track1++;
        } else {
            arr3.push(arr2[track2]);
            track2++;
        }
    }
    while (track1 < arr1.length) {
        arr3.push(arr1[track1++]);
    }
    while (track2 < arr2.length) {
        arr3.push(arr2[track2++]);
    }
    return arr3;
}

let arr1 = [0, 1, 2, 3, 4, 5, 6];
let arr2 = [0, 0, 0, 0, 5, 6, 6, 6, 7, 8, 9,];
let arr3 = mergeArrays(arr1, arr2);
console.log(arr3)