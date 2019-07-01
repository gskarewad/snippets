//todo

function fib(num) {
    if (num == 0) {
        return 0;
    } if (num == 1) {
        return 1;
    } else {
        return fib(num - 1) + fib(num - 2);
    }
}

function printFib(num) {
    let ans = [];
    for (let i = 0; i < num; i++) {
        ans.push(fib(i));
    }
    console.log(ans)
}

printFib(6);
printFib(10);