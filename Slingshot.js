class Slingshot {
  constructor(bodyA,pointB){
      var options = {
          bodyA:bodyA,
          pointB:pointB,
          length:5,
          stiffness:0.05
      }
 this.sling = Constraint.create(options);
 this.pointB=pointB
 World.add(world,this.sling);
 
    } 
    
    fly(){
        this.sling.bodyA=null
    }
   display(){
       if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
   } 
   }
}