/*Given an integer n, return the largest number that contains exactly n digits.

Example

For n = 2, the output should be
solution(n) = 99.*/

function solution(n) {
    return Number(new Array(n).fill(9).join(""));
}
