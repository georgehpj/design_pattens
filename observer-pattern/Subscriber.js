module.exports = class Subscriber {
    constructor(name) {
        this.callName = name;
    }

    update(data) {
        console.log(this.callName + ' is reading ' + data.paperName + ' ' + data.paperNews);
    }

    subscribe(publisher) {
        var alreadyExists = publisher.subscribers.some((el)=>el === this);
        if (!alreadyExists) publisher.subscribers.push(this);
        return this;
    }

    unSubscribe(publisher) {
        publisher.subscribers = publisher.subscribers.filter((el)=>el !== this);
        return this;
    }
};