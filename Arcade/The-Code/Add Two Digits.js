/*You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
solution(n) = 11.*/

function solution(n) {
    const numArr = String(n).split("").map(Number);
    return numArr.reduce((acc, val) => acc + val, 0);
}
