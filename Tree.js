class treeClass {
    constructor(x, y, width, height) {
        var options =
        {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.boy = loadImage("Plucking mangoes/boy.png");
        this.image = loadImage("Plucking mangoes/tree.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
    }
    display() {
        var pos = this.body.position;
        image(this.boy, 260, 320, 200, 300);
        push();
        rectMode(CENTER);
        imageMode(CENTER);
        translate(pos.x, pos.y);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    }
}

