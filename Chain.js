class Connect{
    constructor(bodyA,bodyB){

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 10,
            stiffness: 0.004
        }

        this.connect = Constraint.create(options);
        World.add(world,this.connect);
    }

    attach(body){
        this.connect.bodyA = body;
    }

    fly(){
        this.connect.bodyA = null;
    }

    display(){
        if(this.connect.bodyA){
            var pointA = this.connect.bodyA.position;
            var pointB = this.connect.bodyB.position;
            strokeWeight(4);
            stroke(0);
            line(pointA.x, pointA.y, pointB.x - 45, pointB.y - 70);
        }
    }

}