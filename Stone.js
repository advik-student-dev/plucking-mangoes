class stoneClass {
    constructor(x, y, r) {
        var options =
        {
            isStatic: false,
            restitution: 0.5,
            friction: 1,
            density: 1.2
        }
        this.r = r;
        this.x = x;
        this.y = y;
        this.image = loadImage("Plucking mangoes/stone.png");
        this.body = Bodies.circle(x, y, (this.r - 10) / 2, options);
    }
    display() {
        var pos = this.body.position
        push();
        rectMode(CENTER);
        imageMode(CENTER);
        translate(pos.x, pos.y);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}