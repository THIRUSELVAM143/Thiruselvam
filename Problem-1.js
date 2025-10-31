
class Calculator {
    constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation;
        console.log('====================================');
        console.log(this.a, this.b, this.operation);
        console.log('====================================');

    }

    calculate() {
        if (this.operation === "add") {
            return this.a + this.b;
        } else if (this.operation === "sub") {
            return this.a - this.b;
        } else if (this.operation === "mul") {
            return this.a * this.b;
        } else if (this.operation === "div") {
            if (this.b === 0) {
                return "Error: cannot divide by zero";
            }
            return this.a / this.b;
        } else {
            return "Invalid operation";
        }
    }
}

const calc1 = new Calculator(10, 5, "add");
console.log("Addition:", calc1.calculate());

const calc2 = new Calculator(10, 5, "sub");
console.log("Subtraction:", calc2.calculate());

const calc3 = new Calculator(10, 5, "mul");
console.log("Multiplication:", calc3.calculate());

const calc4 = new Calculator(10, 5, "div");
console.log("Division:", calc4.calculate());
