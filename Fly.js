class Fly {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stifness: 1.2,
            length: 250
        }

        this.fly = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.fly);
    }
    attach(body) {
        this.fly.bodyA = body;
    }

    fly() {
        this.fly.bodyA = null;
    }
    display() {
        if (this.rope.bodyA) {
            var pointA = this.fly.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(255);
            strokeWeight(0);
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }

    }
}