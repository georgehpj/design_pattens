var CommonModule = require('./CommonModule');

module.exports = class Module2 extends CommonModule{
    constructor() {
        super();
        this.inputValue = '';
        this.outputValue = '';
    }

    update(value) {
        this.outputValue = value;
        console.log('module2 received msg : ' + this.outputValue);
    }
}
