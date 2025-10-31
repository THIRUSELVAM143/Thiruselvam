const readline = require("readline");

// create input/output interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the number: ", function (input) {
    let a = parseInt(input);
    let result = [];

    for (let i = 0; i < a; i++) {
        result.push(2 * i + 1);
    }

    console.log("Output:", result.join(", "));
    rl.close();
});
