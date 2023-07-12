function alternateDigitSum(n: number): number {
    let res: number = 0, sign: number = 1
    while (n > 0) {
        res += n % 10 * sign
        sign = -sign
        n = Math.floor(n / 10)
    }
    return -sign * res
};