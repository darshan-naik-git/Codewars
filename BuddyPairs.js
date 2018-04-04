//https://www.codewars.com/kata/59ccf051dcc4050f7800008f

let buddy = (start, limit) => {
    let p1, p2;
    for (let i = start; i <= limit; i++) {
        p1 = getSumOfDivisors(i);
        if (p1 < i) {
            continue;
        }
        p2 = getSumOfDivisors(p1, p1);
        if (p2 === i) {
            return [i, p1];
        }
    }
    return 'Nothing';
}

let getSumOfDivisors = (n, firstSum = Infinity) => {
    if (n < 4) {
        return 0;
    }

    let sum = 0;

    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            sum += i;
            if (n / i !== i) {
                sum += (n / i);
            }
            if (sum > firstSum) {
                return sum;
            }
        }
    }
    return sum;

}