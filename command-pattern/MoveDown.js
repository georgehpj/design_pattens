module.exports = class MoveDown{
    constructor(cursor){
        this.cursor = cursor;
    }
    execute(){
        this.cursor.move(0, 10);
    }
    undo(){
        this.cursor.move(0, -10);
    }
}