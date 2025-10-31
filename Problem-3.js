const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Enter the number: ", function (input) {
    let a = parseInt(input);
    if (a % 2 === 0) {
        a = a - 1;
    }

    let result = [];

    for (let i = 0; i < a; i++) {
        result.push(2 * i + 1);
    }

    console.log("Output:", result.join(", "));
    rl.close();
});
