module.exports = class Subscriber {
    constructor(name){
        this.callName = name;
    }
    
    update(data){
        console.log(this.callName + ' is reading ' + data.paperName + ' ' + data.paperNews);
    }
    
    subscribe(publisher) {
        var that = this;
        var alreadyExists = publisher.subscribers.some(
            function (el) {
                return el === that;
            }
        );
        if (!alreadyExists) {
            publisher.subscribers.push(this);
        }
        return this;
    }

    unSubscribe(publisher){
        var that = this;
        publisher.subscribers = publisher.subscribers.filter(
            function(el){
                return el !== that;
            }
        );
        return this;
    }
}