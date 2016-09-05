module.exports = class Publisher {
    constructor() {
        this.subscribers = [];
    }

    deliver(data) {
        this.subscribers.forEach(
            function (fn) {
                fn.update(data);
            }
        );
        return this;
    }
};