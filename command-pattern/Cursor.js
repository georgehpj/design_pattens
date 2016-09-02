module.exports = class Cursor{
    constructor(width, height, parent){
        this.width = width;
        this.height = height;
        this.position = {x: width / 2, y: height / 2};

        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        parent.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
        this.ctx.fillStyle = '#c00';
        this.move(0, 0);
    }
    move(x, y){
        this.position.x += x;
        this.position.y += y;

        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillRect(this.position.x, this.position.y, 3, 3);
    }
}