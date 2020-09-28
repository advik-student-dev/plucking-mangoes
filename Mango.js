class mangoClass {
    constructor(x, y, r) {
        var options =
        {
            isStatic: true,
            restitution: 0,
            friction: 1,
        }
        this.x = x;
        this.r = r;
        this.y = y;
        this.image = loadImage("Plucking mangoes/mango.png");
        this.body = Bodies.circle(this.x, this.y, this.r / 2, options);



        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        push();
        rectMode(CENTER);
        imageMode(CENTER);
        translate(pos.x, pos.y);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}