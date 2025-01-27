const Logger = require('./Logger')


// Exercise 7 pt.1 - pt.2
class Calculator {
    
    constructor() {
        // this.id = Date.now()
        this.id = Math.floor(Math.random() * 1000000)

        this.logger = new Logger('Calculator', this.id)
    }
    #log = (value) => {
    console.log(`[Calculator :${this.id}]:${value}`)
    }
    add(num1, num2) {
        const value = num1 + num2
        this.#log(value)
        return value;
    }
}
module.exports = Calculator