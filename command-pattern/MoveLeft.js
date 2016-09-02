module.exports = class MoveLeft{
    constructor(cursor){
        this.cursor = cursor;
    }
    execute(){
        this.cursor.move(-10, 0);
    }
    undo(){
        this.cursor.move(10, 0);
    }
}