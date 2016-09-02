module.exports = class UndoDecorator{
    constructor(command, undoStack){
        this.command = command;
        this.undoStack = undoStack;
    }

    execute(){
        this.undoStack.push(this.command);
        this.command.execute();
    }
    undo(){
        this.command.undo();
    }
}