var CommonModule = require('./CommonModule');

module.exports = class Module1 extends CommonModule{
    constructor() {
        super();
        this.inputValue = '';
        this.outputValue = '';
    }

    setInput(value) {
        this.inputValue = value;
        console.log('module1 setInput start... :' + this.inputValue);
        super.setInput(value);
    }

    update(value) {
        this.outputValue = value;
        console.log(this.outputValue);
    }
}
