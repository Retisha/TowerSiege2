class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        this.pointB = pointB;
    
    }
    fly(){
      this.sling.bodyA = null  
    }

    attach(body){
        this.sling.bodyA = body
    }
    display(){
        if(this.sling.bodyA){
        var posA = this.sling.bodyA.position;//birds position
        var posB = this.pointB;
        strokeWeight(3)
        line(posA.x,posA.y,posB.x,posB.y)
        }
    }
}