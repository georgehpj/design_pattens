module.exports = class CommandButton{
    constructor(label, command, parent){
        this.el = document.createElement('button');
        this.el.innerHTML = label;
        parent.appendChild(this.el);

        this.el.addEventListener('click', function () {
            command.execute();
        });
    }
}