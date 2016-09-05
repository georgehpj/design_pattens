module.exports = class Hub {
    constructor(){
        this.modules = [];
    }

    deliver(data) {
        this.modules.forEach((module) => module.update(data));
        return this;
    }

    regist(module) {
        var alreadyExists = module.hubs.some((el)=>el === this);
        if (!alreadyExists) module.hubs.push(this);
        return this;
    }

    unRegist(module) {
        module.hubs = module.hubs.filter((el)=>el !== this);
        return this;
    }
}