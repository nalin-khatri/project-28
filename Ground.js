class Base{
    constructor(x,y){
        var option = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,1000,15,option);
        this.width = 1000;
        this.height = 15;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        rectMode(CENTER);
        noStroke();
        fill("grey");
        rect(pos.x, pos.y, 1000,15);

    }

}