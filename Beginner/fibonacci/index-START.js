/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    let fib = [1, 1];
    for (i = 0; i < n - 1; i++) {
        fib.push(fib[i] + fib[i + 1]);
    }
    return fib[fib.length - 1];
}

module.exports = fibonacci