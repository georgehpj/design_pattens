module.exports = class CommonModule {
    constructor() {
        this.hubs = [];
    }

    setInput(value) {
        this.hubs.forEach((hub) => hub.deliver(value));
    }

    update() {
        throw new Error('no implementation.');
    }


    regist(hub) {
        var alreadyExists = hub.modules.some((el)=>el === this);
        if (!alreadyExists) hub.modules.push(this);
        return this;
    }

    unRegist(hub) {
        hub.modules = hub.modules.filter((el)=>el !== this);
        return this;
    }
}