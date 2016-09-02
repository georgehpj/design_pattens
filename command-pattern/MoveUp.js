module.exports = class MoveUp {
    constructor(cursor){
        this.curosr = cursor;
    }
    execute(){
        this.cursor.move(0, -10);
    }
    undo(){
        this.curosr.move(0, 10);
    }
}