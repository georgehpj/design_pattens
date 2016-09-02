module.exports = class UndoButton{
    constructor(label, parent, undoStack){
        this.el = document.createElement('button');
        this.el.innerHTML = label;
        parent.appendChild(this.el);

        this.el.addEventListener('click', function () {
            if(undoStack.length === 0){
                return;
            }else{
                var lastCommand = undoStack.pop();
                lastCommand.undo();
            }
        });
    }
}