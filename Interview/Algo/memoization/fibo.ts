/**
 * Create a method which takes a fibonnaci number as its input and adds up all the fibonnaci number below it
 */
const memo: Array<number> = [];

const fibonacci = (n: number): number => {

    let value: number;

    if (memo[n]) {
        value = memo[n];
    } else {
        if (n === 0 || n === 1)
            value = n;
        else
            value = fibonacci(n - 1) + fibonacci(n - 2);

        memo[n] = value;
    }

    return value;

};

const solveProblem = (input: number): number => {
    let sum = 0;
    for (let i = 0; i < input - 1; i++) {
        sum += fibonacci(i);
    }

    return sum;
}

console.log(solveProblem(93));