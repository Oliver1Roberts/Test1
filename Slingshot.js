class Slingshot {
    constructor (bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stifness: 0.04,
            length: 20
        }
        this.pointB=pointB;
        this.Slingshot=Constraint.create (options);
        World.add (world,this.Slingshot);
    }
    fly(){
        this.Slingshot.bodyA=null; //null = nothing or 0//
    }
    display() {
        if (this.Slingshot.bodyA) {
        var pointA = this.Slingshot.bodyA.position;
        var pointB = this.pointB;
        line (pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}